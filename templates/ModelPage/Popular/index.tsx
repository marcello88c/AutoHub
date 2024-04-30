import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import Image from "@/components/Image";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

import { modelsSlider } from "@/mocks/models";

type PopularProps = {};

const Popular = ({}: PopularProps) => {
    const swiperRef = useRef<SwiperType>();

    return (
        <div className="pt-30 overflow-hidden">
            <div className="container">
                <div className="mb-24 text-center md:mb-18">
                    <div className="mb-8 label">Best our electric cars </div>
                    <div className="text-h1">
                        Some of our popular <br></br>electric vehicles
                    </div>
                </div>
                <div className="max-w-[54.25rem] mx-auto xl:max-w-[48rem] lg:max-w-[40rem]">
                    <Swiper
                        className="swiper-models !overflow-visible"
                        modules={[Navigation, Pagination]}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        spaceBetween={24}
                        slidesPerView={1}
                        speed={500}
                        loop={true}
                        pagination={{ clickable: true }}
                        initialSlide={3}
                        autoHeight={true}
                        breakpoints={{
                            1440: {
                                spaceBetween: 120,
                            },
                            1024: {
                                spaceBetween: 92,
                            },
                            768: {
                                spaceBetween: 48,
                            },
                        }}
                    >
                        {modelsSlider.map((model) => (
                            <SwiperSlide className="text-center" key={model.id}>
                                <div className="relative mb-8 before:absolute before:left-0 before:right-0 before:bottom-0 before:h-5 before:bg-[#111111]/60 before:rounded-[50%] before:blur-[1rem] md:before:h-2 md:before:blur-[.5rem]">
                                    <Image
                                        className="w-full"
                                        src={model.image}
                                        width={867}
                                        height={330}
                                        alt=""
                                    />
                                </div>
                                <div className="mb-4 text-h4 md:text-h5">
                                    {model.title}
                                </div>
                                <div className="max-w-[30rem] mx-auto mb-8 text-body text-g-100 md:text-caption">
                                    {model.details}
                                </div>
                                <Button
                                    title="View Detail"
                                    href="/model"
                                    arrow
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="flex justify-between max-w-[31rem] mx-auto mt-18 md:max-w-full md:mt-16">
                    <button
                        className="group w-10 h-10 border border-g-75 rounded-full text-0 transition-colors hover:bg-g-500 hover:border-g-500"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <Icon
                            className="fill-g-500 transition-colors group-hover:fill-w-50"
                            name="arrow-left"
                        />
                    </button>
                    <button
                        className="group w-10 h-10 border border-g-75 rounded-full text-0 transition-colors hover:bg-g-500 hover:border-g-500"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <Icon
                            className="fill-g-500 transition-colors group-hover:fill-w-50"
                            name="arrow-right"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popular;
