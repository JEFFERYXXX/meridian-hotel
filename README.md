# Meridian Hotel

A refined luxury hotel booking experience built with Next.js App Router, TypeScript, Tailwind CSS, Lucide, and Framer Motion-ready component patterns.

## Included
- Responsive Meridian homepage with room collection, concierge, and booking modal
- Booking search with guest/date validation and payment preference (deposit or full)
- Guest login, signup, dashboard, and concierge request surfaces
- Zod-validated `/api/availability` and `/api/bookings` routes
- Prisma schema for users, rooms, bookings, and concierge requests
- Overlap-safe booking integration point: add a Prisma transaction querying `checkIn < requestedCheckOut AND checkOut > requestedCheckIn` before creating a booking
- Placeholder adapters for Stripe, email, messaging, and calendar integrations
- Mock mode enabled by default via `MOCK_MODE=true`

## Environment
```env
DATABASE_URL=postgresql://...
MOCK_MODE=true
STRIPE_SECRET_KEY=placeholder
RESEND_API_KEY=placeholder
CALENDAR_API_KEY=placeholder
MESSAGING_API_KEY=placeholder
```

Set `MOCK_MODE=false` after wiring the providers and database. The API contracts are intentionally provider-agnostic so Stripe Checkout, transactional email, calendar holds, and concierge messaging can be added without changing the UI.

## Install
Use the repository with the standard Next.js App Router workflow. In v0, use the generated project install or connect the GitHub repository from Project Settings. Populate the environment variables in the Vercel project Vars panel before enabling live integrations.
