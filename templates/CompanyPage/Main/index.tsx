import Button from "@/components/Button";
import Image from "@/components/Image";

type MainProps = {};

const Main = ({}: MainProps) => (
    <div className="pt-20 md:pt-15">
        <div className="container">
            <div className="max-w-[71.13rem] mb-30 text-display 2xl:mb-25">
                Creating a revolutionary electric car that combines superior
                performance, elegant design and high sustainability.
            </div>
            <div className="flex space-x-6 md:block md:space-x-0 md:space-y-6">
                {[
                    "/images/content/company-pic-1.jpg",
                    "/images/content/company-pic-2.jpg",
                ].map((image, index) => (
                    <div
                        className="relative flex-1 h-[30rem] 2xl:h-[29rem]"
                        key={index}
                    >
                        <Image
                            className="object-cover rounded-2xl"
                            src={image}
                            fill
                            sizes="(max-width: 767px) 100vw, 50vw"
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Main;
