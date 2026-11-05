import { NextResponse } from 'next/server'
import { z } from 'zod'

const querySchema = z.object({ checkIn: z.coerce.date(), checkOut: z.coerce.date(), guests: z.coerce.number().int().min(1).max(12) })
const rooms = [{ id: 'deluxe-sanctuary', name: 'Deluxe Sanctuary', maxGuests: 2 }, { id: 'grand-suite', name: 'Grand Suite', maxGuests: 4 }, { id: 'royal-penthouse', name: 'Royal Penthouse', maxGuests: 6 }, { id: 'cliffside-villa', name: 'Cliffside Villa', maxGuests: 8 }]
const mockReservations = [{ roomId: 'grand-suite', checkIn: new Date('2026-12-20'), checkOut: new Date('2026-12-24') }]
const overlaps = (roomId: string, checkIn: Date, checkOut: Date) => mockReservations.some(reservation => reservation.roomId === roomId && reservation.checkIn < checkOut && reservation.checkOut > checkIn)
export async function GET(request: Request) { const parsed = querySchema.safeParse(Object.fromEntries(new URL(request.url).searchParams)); if (!parsed.success || parsed.data.checkOut <= parsed.data.checkIn) return NextResponse.json({ error: 'Valid dates and guest count are required.' }, { status: 400 }); return NextResponse.json({ mockMode: process.env.MOCK_MODE !== 'false', available: rooms.filter(room => room.maxGuests >= parsed.data.guests && !overlaps(room.id, parsed.data.checkIn, parsed.data.checkOut)), checked: { checkIn: parsed.data.checkIn, checkOut: parsed.data.checkOut } }) }
