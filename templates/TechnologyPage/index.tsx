"use client";

import Layout from "@/components/Layout";
import Subscription from "@/components/Subscription";
import Photo from "@/components/Photo";
import Main from "./Main";
import Technology from "./Technology";
import Sustainability from "./Sustainability";
import Details from "./Details";
import Future from "./Future";

const TechnologyPage = () => {
    return (
        <Layout>
            <Main />
            <Technology />
            <Photo image="/images/content/photo.jpg" />
            <Sustainability />
            <Details />
            <Future />
            <Subscription />
        </Layout>
    );
};

export default TechnologyPage;
