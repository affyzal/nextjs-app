import { promises as fs } from 'fs';
import path from 'path';

// Force Node runtime (needed for fs)
export const runtime = 'nodejs';

export async function GET() {
  try {
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
    console.error('Error reading file:', error);
    return new Response('File not found', { status: 404 });
  }
}
