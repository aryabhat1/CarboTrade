import { connectDB } from "@/lib/databaseConnection";
import { zSchema } from "@/lib/zodSchema";
import UserModel from "@/models/User.model";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        await connectDB();

        // validation schema
        const validationSchema = zSchema.pick({
            name: "true",
            email: "true",
            password: "true",
        });
        const payload = await request.json();

        const validatedData = validationSchema.safeParse(payload);
        if (!validatedData.success) {
            return response(
                false,
                401,
                "Invalid or missing input field.",
                validatedData.error
            );
        }

        const { name, email, password } = validatedData.data;

        // check already registered user
        const checkUser = await UserModel.exists({ email });
        if (checkUser) {
            return response(
                true,
                409,
                "User already registered",
                validatedData.error
            );
        }
    } catch (error) {}
}
