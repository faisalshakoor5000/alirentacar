<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Architecture notes

- Single-page site: all sections live in `src/routes/index.tsx` with hash-anchor nav (#cars, #rates, #reviews, #booking, #contact) — the user explicitly chose one scrolling page.
- Booking submissions: public server fn `submitBooking` (src/lib/booking.functions.ts, zod-validated, honeypot field `website`) inserts into the `public.bookings` table (anon INSERT only via RLS). No real prices are shown anywhere — never invent PKR amounts.
