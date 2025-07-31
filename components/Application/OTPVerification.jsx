import { zSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import ButtonLoading from "./ButtonLoading";
// import { FormField } from '../ui/form'
import {
    Form,
    FormControl,
    // FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

const OTPVerification = ({ email, onSubmit, loading }) => {
    const formSchema = zSchema.pick({
        otp: true,
        email: true,
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            otp: "",
            email: email,
        },
    });

    const handleOtpVerification = async (values) => {
        onSubmit(values);
    };

    return (
        <div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleOtpVerification)}
                    className="space-y-8"
                >
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-2">
                            Please complete verification
                        </h1>
                        <p className="text-md">
                            We have sent a OTP to your registered email address.
                            This OTP is valid for 10 minutes only.
                        </p>
                    </div>
                    <div className="mb-5 mt-5 flex justify-center">
                        <FormField
                            control={form.control}
                            name="otp"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-semibold">
                                        One-Time Password (OTP)
                                    </FormLabel>
                                    <FormControl>
                                        <InputOTP maxLength={6} {...field}>
                                            <InputOTPGroup>
                                                <InputOTPSlot
                                                    index={0}
                                                ></InputOTPSlot>
                                                <InputOTPSlot
                                                    className="text-xl"
                                                    index={1}
                                                />
                                                <InputOTPSlot
                                                    className="text-xl"
                                                    index={2}
                                                />
                                                <InputOTPSlot
                                                    className="text-xl"
                                                    index={3}
                                                />
                                                <InputOTPSlot
                                                    className="text-xl"
                                                    index={4}
                                                />
                                                <InputOTPSlot
                                                    className="text-xl"
                                                    index={5}
                                                />
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* form for password */}
                    {/* <div className="mb-5">
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="relative">
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type={
                                                        isTypePassword
                                                            ? "password"
                                                            : "text"
                                                    }
                                                    placeholder="*********"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <button
                                                className="absolute top-1/2 right-2 cursor-pointer"
                                                type="button"
                                                onClick={() =>
                                                    setIsTypePassword(
                                                        !isTypePassword
                                                    )
                                                }
                                            >
                                                {isTypePassword ? (
                                                    <FaRegEyeSlash />
                                                ) : (
                                                    <FaRegEye />
                                                )}
                                            </button>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div> */}
                    <div className="mb-3">
                        <ButtonLoading
                            type="submit"
                            text="Verify"
                            className="w-full mt-3 cursor-pointer"
                            loading={loading}
                        ></ButtonLoading>
                        <div className="text-center">
                            <button
                                type="button"
                                className="text-blue-500 cursor-pointer hover:underline"
                            >
                                Resend OTP
                            </button>
                        </div>
                    </div>

                    {/* form for password end here */}
                </form>
            </Form>
        </div>
    );
};

export default OTPVerification;
