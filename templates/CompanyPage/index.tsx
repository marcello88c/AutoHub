"use client";

import Layout from "@/components/Layout";
import Subscription from "@/components/Subscription";
import Photo from "@/components/Photo";
import Main from "./Main";
import Milestones from "./Milestones";
import Releas from "./Releas";
import Mission from "./Mission";
import Reviews from "./Reviews";
import Companies from "./Companies";

const CompanyPage = () => {
    return (
        <Layout>
            <Main />
            <Milestones />
            <Releas />
            <Photo
                className="h-[49.625rem]"
                image="/images/content/photo-1.jpg"
            />
            <Mission />
            <Reviews />
            <Companies />
            <Subscription />
        </Layout>
    );
};

export default CompanyPage;
