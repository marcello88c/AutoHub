import Image from "@/components/Image";

import { design } from "@/mocks/design";

type DesignProps = {};

const Design = ({}: DesignProps) => (
    <div className="py150">
        <div className="container">
            <div className="mb-16 label">Outstanding Exterior Design</div>
            <div className="mb-30 text-h1 2xl:mb-25">
            Embark on a fresh driving adventure with our electric vehicle.
            </div>
            <div className="pl-22 pr-36 2xl:px-0">
                {design.map((item) => (
                    <div
                        className="flex mb-10 pb-10 border-b border-g-75/25 last:mb-0 last:pb-0 last:border-b-0 lg:block md:mb-8 md:pb-8"
                        key={item.id}
                    >
                        <div className="shrink-0 w-[27rem] lg:w-full lg:mb-8">
                            <Image
                                className="w-full rounded-2xl md:min-h-[15.625rem] md:object-cover"
                                src={item.image}
                                width={432}
                                height={250}
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col grow pl-10 py-2 lg:p-0">
                            <div className="mb-6 text-h2 md:mb-10">
                                {item.title}
                            </div>
                            <div className="mt-auto text-g-100">
                                {item.content}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Design;
