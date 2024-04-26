import Button from "@/components/Button";
import Image from "@/components/Image";

type FutureProps = {};

const Future = ({}: FutureProps) => (
    <div className="pt150">
        <div className="container flex items-center lg:block">
            <div className="grow pr-30 2xl:pr-20 xl:pr-12 lg:mb-14 lg:pr-0">
                <div className="mb-12 label">A Peek into the Future</div>
                <div className="mb-8 text-h1">
                    Connectivity and autonomous driving in carsova electric cars
                </div>
                <div className="mb-14 text-g-100 lg:mb-8">
                    Focused on user safety and comfort, Carsova Electric Cars
                    delivers connectivity technology that connects drivers with
                    their surroundings, while also paving the way for autonomous
                    driving systems that open up opportunities for a fully
                    integrated mobility future
                </div>
                <Button title="Read More" arrow />
            </div>
            <div className="shrink-0 w-[42.75rem] 2xl:w-[36rem] xl:w-[32rem] lg:w-full">
                <Image
                    className="w-full min-h-[39.5rem] rounded-2xl object-cover lg:min-h-[30.625rem]"
                    src="/images/content/future-pic.jpg"
                    width={684}
                    height={633}
                    alt=""
                />
            </div>
        </div>
    </div>
);

export default Future;
