create table public.bookings (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  car_preference text,
  pickup_city text,
  rental_period text not null check (rental_period in ('daily', 'weekly', 'monthly')),
  start_date date,
  message text,
  created_at timestamptz not null default now()
);

GRANT INSERT ON public.bookings TO anon, authenticated;
GRANT SELECT ON public.bookings TO authenticated;
GRANT ALL ON public.bookings TO service_role;

ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

create policy "Anyone can submit a booking"
  on public.bookings
  for insert
  to anon, authenticated
  with check (true);