// app/api/instagram/route.ts

import { NextResponse } from 'next/server';
import { http } from '@/utils/http';

export async function GET() {

  try {

    const response = await http.get(`/product`)

    // console.log('Instagram API Response:', response.data); // Log hasilnya
    return NextResponse.json(response.data); // Kirimkan JSON ke frontend
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {

    console.error('Error fetching Instagram media:', error.response?.data || error.message);

    return NextResponse.json({ error: 'Failed to fetch product martect' }, { status: 500 });
  }
}