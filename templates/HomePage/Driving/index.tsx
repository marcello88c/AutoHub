import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "@/components/Image";

type DrivingProps = {};

const Driving = ({}: DrivingProps) => (
    <div className="pt150 overflow-hidden">
        <div className="container">
            <div className="mb-14 label">Driving happiness with AutoHub</div>
            <div className="flex justify-between items-end mb-25 xl:items-start xl:mb-20 lg:block">
                <div className="max-w-[38rem] mr-10 text-h1 lg:mb-8">
                    Capture your moment with AutoHub electric vehicle
                </div>
                <div className="shrink-0 w-[29.5rem] text-g-100 lg:w-full">
                At AutoHub Electric Vehicles, each journey embodies a captivating adventure worth preserving, and this gallery serves as a platform to exchange enthusiasm and inspiration within the electric car enthusiast community.
                </div>
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
                    {[
                        "/images/content/driving-pic-1.jpg",
                        "/images/content/driving-pic-2.jpg",
                        "/images/content/driving-pic-3.jpg",
                        "/images/content/driving-pic-4.jpg",
                        "/images/content/driving-pic-1.jpg",
                        "/images/content/driving-pic-2.jpg",
                        "/images/content/driving-pic-3.jpg",
                        "/images/content/driving-pic-4.jpg",
                    ].map((photo, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                className="w-full rounded-2xl"
                                src={photo}
                                width={432}
                                height={522}
                                alt=""
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </div>
);

export default Driving;
