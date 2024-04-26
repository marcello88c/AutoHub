"use client";

import Layout from "@/components/Layout";
import Subscription from "@/components/Subscription";
import Main from "./Main";
import Popular from "./Popular";
import Models from "./Models";

const ModelPage = () => {
    return (
        <Layout>
            <Main />
            <Popular />
            <Models />
            <Subscription />
        </Layout>
    );
};

export default ModelPage;
