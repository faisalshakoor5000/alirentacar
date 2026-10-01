import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const bookingSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(80, "Name is too long"),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9][0-9\s-]{6,19}$/, "Please enter a valid phone number"),
  carPreference: z.string().trim().max(80).optional(),
  pickupCity: z.string().trim().max(80).optional(),
  rentalPeriod: z.enum(["daily", "weekly", "monthly"]),
  startDate: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Please enter a valid date")
    .optional(),
  message: z.string().trim().max(1000, "Message is too long").optional(),
  // Honeypot — real visitors never fill this hidden field.
  website: z.string().optional(),
});

export const submitBooking = createServerFn({ method: "POST" })
  .inputValidator((data) => bookingSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.website) {
      throw new Error("Request rejected");
    }

    const { error } = await supabase.from("bookings").insert({
      name: data.name,
      phone: data.phone,
      car_preference: data.carPreference || null,
      pickup_city: data.pickupCity || null,
      rental_period: data.rentalPeriod,
      start_date: data.startDate || null,
      message: data.message || null,
    });

    if (error) {
      console.error("Booking insert failed:", error.message);
      throw new Error("Could not save your booking request");
    }

    return { ok: true };
  });
