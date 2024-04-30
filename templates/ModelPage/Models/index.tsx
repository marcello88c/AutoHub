import Button from "@/components/Button";
import Image from "@/components/Image";

import { models } from "@/mocks/models";

type ModelsProps = {};

const Models = ({}: ModelsProps) => (
    <div className="pt150 overflow-hidden">
        <div className="container">
            <div className="mb-14 label">Our variant electric cars </div>
            <div className="flex justify-between mb-40 xl:mb-30 lg:block">
                <div className="max-w-[39rem] mr-12 text-h1 lg:mr-0 lg:mb-14">
                    Fulfill your mobility needs with AutoHub variants of
                    electric vehicles.
                </div>
                <div className="shrink-0 w-[29.5rem] lg:w-full">
                    <div className="mb-8 text-g-100">
                        AutoHub offers a choice of electric vehicles that meet
                        different preferences and needs, ensuring a
                        comprehensive solution for modern and sustainable
                        transportation.
                    </div>
                    <Button title="Download Brochure" />
                </div>
            </div>
            <div className="flex flex-wrap -mt-30 -mx-14 xl:-mt-20 xl:-mx-8 md:block md:mt-0 md:mx-0">
                {models.map((model) => (
                    <div
                        className="w-[calc(33.333%-7rem)] mt-30 mx-14 text-center xl:w-[calc(33.333%-4rem)] xl:mt-20 xl:mx-8 lg:w-[calc(50%-4rem)] md:w-full md:mt-14 md:mx-0"
                        key={model.id}
                    >
                        <div className="mb-7 md:mb-4">
                            <Image
                                className="w-full"
                                src={model.image}
                                width={370}
                                height={183}
                                alt=""
                            />
                        </div>
                        <div className="text-h5">{model.title}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Models;
