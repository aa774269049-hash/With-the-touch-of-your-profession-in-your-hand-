import { v4 as uuidv4 } from 'uuid';
console.log('=== AI Dev bootstrap ===');
const START = Date.now();
const BOOT_ID = process.env.BOOT_ID || uuidv4();
console.log(`BOOT_ID=${BOOT_ID} - starting AI dev module at ${new Date(START).toISOString()}`);

import { config } from 'dotenv';
config();

console.log("🚀 AI Development Server Started");

import '@/ai/flows/smart-job-search.ts';
import '@/ai/flows/analyze-user-behavior.ts';
