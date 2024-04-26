import Button from "@/components/Button";
import Image from "@/components/Image";

type MainProps = {};

const Main = ({}: MainProps) => (
    <div className="">
        <div className="container">
            <div className="flex items-center py-25 lg:block lg:pb-15">
                <div className="grow pr-28 2xl:pr-16 lg:mb-20 lg:pr-0">
                    <div className="mb-4 text-h1">
                        Latest development carsova releases Its latest electric
                        car model
                    </div>
                    <div className="max-w-[34rem] mb-8 text-g-100">
                        Packed with the latest technology and design, this
                        latest electric car model shows Carsova&apos;s
                        dedication to providing environmentally friendly and
                        high-performance vehicles.
                    </div>
                    <Button title="Read More" arrow />
                </div>
                <div className="shrink-0 w-[41.25rem] 2xl:w-[34rem] xl:w-[30rem] lg:w-full">
                    <Image
                        className="w-full min-h-[26.25rem] rounded-3xl object-cover md:min-h-[20rem] md:rounded-2xl"
                        src="/images/content/news-pic.jpg"
                        width={660}
                        height={420}
                        alt=""
                    />
                </div>
            </div>
            <div className="w-full h-0.25 bg-g-75/50"></div>
        </div>
    </div>
);

export default Main;
