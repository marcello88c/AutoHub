import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "@/components/Image";

import { technology } from "@/mocks/technology";

type TechnologyProps = {};

const Technology = ({}: TechnologyProps) => (
    <div className="pt150 overflow-hidden">
        <div className="container">
            <div className="mb-14 label">Carsova technology and comfort</div>
            <div className="max-w-[50.5rem] mb-25 text-h1 md:mb-20">
                Carsova support for leading technology innovation in mobility
            </div>
            <div className="md:max-w-[80%]">
                <Swiper
                    className="!overflow-visible"
                    spaceBetween={16}
                    slidesPerView={1}
                    speed={500}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                    }}
                >
                    {technology.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="mb-4 md:mb-3.5">
                                <Image
                                    className="w-full rounded-2xl"
                                    src={item.image}
                                    width={432}
                                    height={522}
                                    alt=""
                                />
                            </div>
                            <div className="font-inter-tight text-[1.375rem] md:text-body">
                                {item.title}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </div>
);

export default Technology;
