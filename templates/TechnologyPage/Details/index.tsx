import { useState } from "react";
import Image from "@/components/Image";
import Select from "@/components/Select";
import Button from "@/components/Button";

import { detailsCar } from "@/mocks/detailsCar";

const cars = [
    {
        id: "0",
        title: "MaxEnergi M250",
    },
    {
        id: "1",
        title: "QuantumElec",
    },
    {
        id: "2",
        title: "ElectraStar S7",
    },
];

type DetailsProps = {};

const Details = ({}: DetailsProps) => {
    const [car, setCar] = useState(cars[0]);

    return (
        <div className="pt150">
            <div className="container">
                <div className="flex lg:block">
                    <div className="relative z-2 grow pb-8 lg:mb-12 lg:pb-0">
                        <div className="mb-12 -mr-12 text-h1 lg:mr-0">
                            Various variants of electric cars from carsova
                            electric cars
                        </div>
                        <div className="hidden mb-6 text-center lg:block">
                            <Image
                                className="w-full"
                                src="/images/content/car.png"
                                width={692}
                                height={342}
                                alt=""
                            />
                        </div>
                        <Select
                            className="z-1 w-[19.75rem] md:w-full"
                            label="Cars electric type"
                            value={car}
                            onChange={setCar}
                            items={cars}
                        />
                    </div>
                    <div className="shrink-0 w-[43.25rem] mt-8 2xl:w-[38rem] xl:w-[34rem] lg:hidden">
                        <Image
                            className="w-full"
                            src="/images/content/car.png"
                            width={692}
                            height={342}
                            alt=""
                        />
                    </div>
                </div>
                <div className="">
                    {detailsCar.map((item) => (
                        <div
                            className="flex py-6 border-b border-g-75 text-h5 even:bg-g-50/50 xl:text-body md:block md:p-4"
                            key={item.id}
                        >
                            <div className="shrink-0 w-[28rem] px-4 xl:w-[20rem] md:w-full md:px-0 md:text-g-100">
                                {item.title}
                            </div>
                            <div className="grow pr-4 md:pr-0">
                                {item.value}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-14 text-right lg:mt-8">
                    <Button title="See More" arrow />
                </div>
            </div>
        </div>
    );
};

export default Details;
