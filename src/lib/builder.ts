import { builder } from "@builder.io/sdk";
const API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY || "demo"; // Fallback to 'demo' to prevent build crash
builder.init(API_KEY);
