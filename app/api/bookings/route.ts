import { NextResponse } from 'next/server'
import { z } from 'zod'

const bookingSchema = z.object({ roomId: z.string().min(1), guestName: z.string().min(2), email: z.string().email(), checkIn: z.coerce.date(), checkOut: z.coerce.date(), paymentMode: z.enum(['deposit', 'full']) })
export async function POST(request: Request) { const body = await request.json().catch(() => null); const parsed = bookingSchema.safeParse(body); if (!parsed.success || parsed.data.checkOut <= parsed.data.checkIn) return NextResponse.json({ error: 'Please provide valid booking details.' }, { status: 400 }); const booking = { id: `MRD-${Date.now().toString(36).toUpperCase()}`, status: 'pending_confirmation', ...parsed.data, integrations: { stripe: 'placeholder', email: 'placeholder', calendar: 'placeholder', messaging: 'placeholder' } }; return NextResponse.json({ mockMode: process.env.MOCK_MODE !== 'false', booking }, { status: 201 }) }
