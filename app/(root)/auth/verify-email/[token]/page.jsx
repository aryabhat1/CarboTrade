"use client";

import React, { useState } from "react";
import { use, useEffect } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import verifiedImg from "@/public/images/verified.jpg";
import verifiedFailImg from "@/public/images/verification_fail.jpg";
import { WEBSITE_HOME } from "@/routes/WebsiteRoute";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const EmailVerification = ({ params }) => {
    const { token } = use(params);
    const [isVerified, setIsVerified] = useState(false);

    useEffect(() => {
        const verify = async () => {
            const { data: verificationResponse } = await axios.post(
                "/api/auth/verify-email",
                { token }
            );
            if (verificationResponse.success) {
                setIsVerified(true);
            }
        };
        verify();
    }, [token]);

    return (
        <Card className="w-[400px]">
            <CardContent>
                {isVerified ? (
                    <div>
                        <div className="flex justify-center items-center">
                            <Image
                                src={verifiedImg.src}
                                height={verifiedImg.height}
                                width={verifiedImg.width}
                                className="h-[100px] w-auto"
                                alt="verification success"
                            ></Image>
                        </div>

                        <div className="text-center">
                            <h1 className="text-2xl text-green-500 font-bold my-5">
                                Email verification successful!
                            </h1>
                            <Button asChild>
                                <Link href={WEBSITE_HOME}>
                                    Continue Browsing...
                                </Link>
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="flex justify-center items-center">
                            <Image
                                src={verifiedFailImg.src}
                                height={verifiedFailImg.height}
                                width={verifiedFailImg.width}
                                className="h-[100px] w-auto"
                                alt="verification fail"
                            ></Image>
                        </div>

                        <div className="text-center">
                            <h1 className="text-2xl text-red-500 font-bold my-5">
                                Email verification failed!
                            </h1>
                            <Button asChild>
                                <Link href={WEBSITE_HOME}>
                                    Continue Browsing...
                                </Link>
                            </Button>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default EmailVerification;
