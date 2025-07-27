"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
    Card,
    // CardAction,
    CardContent,
    // CardDescription,
    // CardFooter,
    // CardHeader,
    // CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";

import Logo from "@/public/images/monkey.png";
import { useForm } from "react-hook-form";
import { zSchema } from "@/lib/zodSchema";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ButtonLoading from "@/components/Application/ButtonLoading";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import Link from "next/link";
import { WEBSITE_LOGIN, WEBSITE_REGISTER } from "@/routes/WebsiteRoute";

const RegisterPage = () => {
    const [loading, setLoading] = useState(false);
    const [isTypePassword, setIsTypePassword] = useState(true);

    const formSchema = zSchema
        .pick({
            name: true,
            email: true,
            password: true,
        })
        .extend({
            confirmPassword: z.string(),
        })
        .refine((data) => data.password === data.confirmPassword, {
            message: "Password and confirm password must be same.",
            path: ["confirmPassword"],
        });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const handleRegisterSubmit = async (values) => {
        console.log("The values are", values);
    };

    return (
        <Card className="w-[450px] shadow-xl">
            <CardContent>
                <div className="flex justify-center">
                    {/* Register Page */}
                    <Image
                        src={Logo.src}
                        width={Logo.width}
                        height={Logo.height}
                        alt="logo"
                        className="max-w-[150px]"
                    />
                </div>
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Create Account</h1>
                    <p>Create new account by filling out the form below.</p>
                </div>
                {/* // form */}
                <div className="mt-5">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(handleRegisterSubmit)}
                            // className="space-y-8"
                        >
                            <div className="mb-5">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Full Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    placeholder="username"
                                                    {...field}
                                                />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            {/* Name ends here */}

                            {/* New Email */}
                            <div className="mb-5">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    placeholder="dummymail@dummymail.com"
                                                    {...field}
                                                />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            {/* Email ends here */}
                            {/* form for password */}
                            <div className="mb-5">
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="relative">
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    placeholder="********"
                                                    {...field}
                                                ></Input>
                                                {/* <Input
                                                    type={
                                                        isTypePassword
                                                            ? "password"
                                                            : "text"
                                                    }
                                                    placeholder="*********"
                                                    {...field}
                                                /> */}
                                            </FormControl>
                                            {/* <button
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
                                            </button> */}

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            {/* password ends here */}

                            {/* form for confirm password */}
                            <div className="mb-5">
                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem className="relative">
                                            <FormLabel>
                                                Confirm Password
                                            </FormLabel>
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
                            </div>
                            {/* form for confirm password ends here */}
                            {/* form for password end here */}
                            <div className="mb-3">
                                <ButtonLoading
                                    type="submit"
                                    text="Create Account"
                                    className="w-full mt-3 cursor-pointer"
                                    loading={loading}
                                ></ButtonLoading>
                            </div>

                            <div className="text-center">
                                <div className="flex justify-center items-center gap-1">
                                    <p>Already have a account?</p>
                                    <Link
                                        href={WEBSITE_LOGIN}
                                        className="text-primary underline"
                                    >
                                        Login!
                                    </Link>
                                </div>

                                {/* <div className="mt-3">
                                    <Link
                                        href=""
                                        className="text-primary underline"
                                    >
                                        Forgot password?
                                    </Link>
                                </div> */}
                            </div>
                        </form>
                    </Form>
                </div>
            </CardContent>
        </Card>
    );
};

export default RegisterPage;
