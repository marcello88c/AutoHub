"use client";

import Layout from "@/components/Layout";
import Subscription from "@/components/Subscription";
import Main from "./Main";
import Introduction from "./Introduction";
import Design from "./Design";
import Performance from "./Performance";
import Technology from "./Technology";
import Driving from "./Driving";
import Partners from "./Partners";

const HomePage = () => {
    return (
        <Layout classHeader="!absolute top-0 left-0 right-0 z-5" lightHeader>
            <Main />
            <Introduction />
            <Design />
            <Performance />
            <Technology />
            <Driving />
            <Partners />
            <Subscription />
        </Layout>
    );
};

export default HomePage;
