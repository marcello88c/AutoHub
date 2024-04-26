import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Pagination from "@/components/Pagination";

import { news } from "@/mocks/news";

type NewsProps = {};

const News = ({}: NewsProps) => (
    <div className="pt150">
        <div className="container">
            <div className="max-w-[50rem] mx-auto mb-30 text-center 2xl:mb-22 xl:max-w-[36rem]">
                <div className="mb-14 label">
                    Carsova technology and comfort
                </div>
                <div className="text-h1">
                    Carsova support for leading technology innovation in
                    mobility
                </div>
            </div>
            <div className="flex flex-wrap -mt-20 -mx-3 xl:-mt-16 md:-mt-12 md:mx-0">
                {news.map((article) => (
                    <div
                        className="w-[calc(33.333%-1.5rem)] mt-20 mx-3 xl:mt-16 lg:w-[calc(50%-1.5rem)] md:w-full md:mt-12 md:mx-0"
                        key={article.id}
                    >
                        <div className="relative mb-6 aspect-[1.45]">
                            <Image
                                className="object-cover rounded-2xl"
                                src={article.image}
                                fill
                                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                                alt=""
                            />
                        </div>
                        <div className="mb-4 uppercase text-caption text-g-100">
                            {article.date}
                        </div>
                        <div className="mb-8 text-h4 md:text-[1.25rem]">
                            {article.title}
                        </div>
                        <Link
                            className="group inline-flex items-center text-body"
                            href="/news"
                        >
                            Read More
                            <Icon
                                className="!w-5 !h-5 ml-2 transition-transform group-hover:translate-x-1"
                                name="arrow-right"
                            />
                        </Link>
                    </div>
                ))}
            </div>
            <Pagination />
        </div>
    </div>
);

export default News;
