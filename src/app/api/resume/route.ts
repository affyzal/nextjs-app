import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from "next/server";
import { Redis } from '@upstash/redis'


// Force Node runtime (needed for fs)
export const runtime = 'nodejs';

const redis = Redis.fromEnv();

export async function GET() {
  try {
    const timestamp = new Date().toISOString();
    // Increment download counter
    await redis.multi()
      .incr('resume-downloads')          // increment counter
      .lpush('resume-downloads-log', timestamp) // add timestamp to list
      .exec();

    // Find the file inside your public folder
    const filePath = path.join(
      process.cwd(),
      'public',
      'Afzal_Miah_CV_V5_No_Phone.docx',
    );
    const fileBuffer = await fs.readFile(filePath);

    // Return it as a downloadable file
    return new Response(fileBuffer, {
      headers: {
        'Content-Type':
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Content-Disposition': 'attachment; filename="Afzal_Miah_CV.docx"',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    // handle error, e.g., file not found
    console.error('Error reading file:', error);
    return new Response('File not found', { status: 404 });
  }
}
