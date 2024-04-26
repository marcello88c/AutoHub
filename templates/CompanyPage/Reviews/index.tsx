import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import Icon from "@/components/Icon";

import { reviews } from "@/mocks/reviews";

type ReviewsProps = {};

const Reviews = ({}: ReviewsProps) => {
    const swiperRef = useRef<SwiperType>();

    return (
        <div className="pt150 overflow-hidden">
            <div className="container">
                <div className="mb-25">
                    <div className="mb-16 label">Best Testimonials</div>
                    <div className="max-w-[34rem] text-h1">
                        How Carsova Revolutionized Their Ride
                    </div>
                </div>
                <div className="max-w-[74.25rem] md:max-w-[70%]">
                    <Swiper
                        className="swiper-reviews !overflow-visible"
                        modules={[Navigation, Pagination]}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        spaceBetween={32}
                        slidesPerView={1}
                        speed={500}
                        loop={true}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: {
                                spaceBetween: 48,
                                slidesPerView: 2,
                            },
                        }}
                    >
                        {reviews.map((review) => (
                            <SwiperSlide className="" key={review.id}>
                                <div className="mb-12 label md:mb-8">
                                    {review.author}
                                </div>
                                <div className="text-h3 md:text-[1.25rem] md:leading-[1.56rem]">
                                    “{review.content}”
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="flex justify-end mt-22 space-x-4 md:mt-14">
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

export default Reviews;
