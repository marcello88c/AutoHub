"use client";

import Layout from "@/components/Layout";
import Subscription from "@/components/Subscription";
import Main from "./Main";
import News from "./News";

const NewsPage = () => {
    return (
        <Layout>
            <Main />
            <News />
            <Subscription />
        </Layout>
    );
};

export default NewsPage;
