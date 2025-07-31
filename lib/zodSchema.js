import { z } from "zod";

export const zSchema = z.object({
    email: z.string().trim().toLowerCase().email("Invalid email address"),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .max(64, { message: "Password must be at most 64 characters long" })
        .regex(/[A-Z]/, "Must include at least one uppercase letter")
        .regex(/[a-z]/, "Must include at least one lowercase letter")
        .regex(/[0-9]/, "Must include at least one number")
        .regex(/[^A-Za-z0-9]/, "Must include at least one symbol"),

    name: z
        .string()
        .min(2, { message: "Name must be at-least 2 characters." })
        .max(50, { message: "Name must be at least 50 characters." })
        .regex(/^[a-zA-Z\s]+$/, {
            message: "Name can contain letters and spaces only.",
        }),
        otp: z.string().regex(/^\d{6}$/, {
            message: "OTP must be a 6-digit number."
        })
});



// export type EmailPasswordInput = z.infer<typeof EmailPasswordSchema>;
