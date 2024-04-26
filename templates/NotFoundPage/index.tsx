"use client";

import Layout from "@/components/Layout";
import Image from "@/components/Image";
import Button from "@/components/Button";

const NotFoundPage = () => {
    return (
        <Layout>
            <div className="pt-22 text-center">
                <div className="container">
                    <div className="">
                        <div className="mb-4">
                            <Image
                                className="max-w-[15.5rem]"
                                src="/images/content/404.png"
                                width={248}
                                height={259}
                                alt=""
                            />
                        </div>
                        <div className="max-w-[35rem] mx-auto mb-4 text-h2">
                            Sorry, we couldn&apos;t find the page you were
                            looking for.
                        </div>
                        <div className="max-w-[29rem] mx-auto mb-8 text-g-100">
                            Return to Carsova Home and discover more about
                            paradigm-shifting electric mobility
                        </div>
                        <Button title="Back to homepage" href="/" />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NotFoundPage;
