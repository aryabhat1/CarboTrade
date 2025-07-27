"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
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
    // FormDescription,
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
import { WEBSITE_REGISTER } from "@/routes/WebsiteRoute";

const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const [isTypePassword, setIsTypePassword] = useState(true);

    const formSchema = zSchema
        .pick({
            email: true,
        })
        .extend({
            password: z.string().min("3", "Password field is required."),
        });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const handleLoginSubmit = async (value) => {};

    return (
        <Card className="w-[450px] outline-none shadow-xl">
            <CardContent>
                <div className="flex justify-center">
                    {/* Login Page */}
                    <Image
                        src={Logo.src}
                        width={Logo.width}
                        height={Logo.height}
                        alt="logo"
                        className="max-w-[150px]"
                    />
                </div>
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Login into Account</h1>
                    <p>
                        Log in into your account by filling out the form below.
                    </p>
                </div>
                {/* // form */}
                <div className="mt-5">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(handleLoginSubmit)}
                            className="space-y-8"
                        >
                            <div className="mt-5">
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
                            <div className="mb-3">
                                <ButtonLoading
                                    type="submit"
                                    text="Login"
                                    className="w-full mt-3 cursor-pointer"
                                    loading={loading}
                                ></ButtonLoading>
                            </div>

                            {/* form for password end here */}
                            <div className="text-center">
                                <div className="flex justify-center items-center gap-1">
                                    <p>Don't have a account?</p>
                                    <Link
                                        href={WEBSITE_REGISTER}
                                        className="text-primary underline"
                                    >
                                        Create account!
                                    </Link>
                                </div>

                                <div className="mt-3">
                                    <Link
                                        href=""
                                        className="text-primary underline"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </Form>
                </div>
            </CardContent>
        </Card>
    );
};

export default LoginPage;
