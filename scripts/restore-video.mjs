import { createClient } from 'next-sanity';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import os from 'os';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

function getLocalAuthToken() {
    try {
        const configPath = path.join(os.homedir(), '.config', 'sanity', 'config.json');
        if (fs.existsSync(configPath)) {
            const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
            return config.authToken;
        }
    } catch (e) {
        return null;
    }
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_ACCESS_TOKEN || process.env.SANITY_TOKEN || getLocalAuthToken();

if (!projectId || !dataset || !token) {
    console.error("Missing configuration");
    process.exit(1);
}

const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
});

async function restoreVideo() {
    console.log("Restoring Homepage Video...");
    const VIDEO_PATH = path.join(process.cwd(), 'public', 'assets', 'videos', 'video-2.mp4');

    if (!fs.existsSync(VIDEO_PATH)) {
        console.error("Video file not found!");
        return;
    }

    console.log("Uploading video...");
    const buffer = fs.readFileSync(VIDEO_PATH);
    const asset = await client.assets.upload('file', buffer, { filename: 'video-2.mp4' });
    console.log("Video uploaded:", asset._id);

    console.log("Patching homepage...");
    await client.patch('homepage')
        .set({
            heroVideo: { _type: 'file', asset: { _ref: asset._id } }
        })
        .commit();

    console.log("Homepage patched successfully!");
}

restoreVideo().catch(err => console.error(err));
