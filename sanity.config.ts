import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { presentationTool } from 'sanity/presentation'
import { schema } from './src/sanity/schemaTypes'
import { apiVersion, dataset, projectId } from './src/sanity/env'

export default defineConfig({
    basePath: '/studio',
    projectId,
    dataset,
    schema,
    plugins: [
        structureTool(),
        presentationTool({
            previewUrl: {
                previewMode: {
                    enable: '/api/draft-mode/enable',
                },
            },
        }),
        visionTool({ defaultApiVersion: apiVersion }),
    ],
})


