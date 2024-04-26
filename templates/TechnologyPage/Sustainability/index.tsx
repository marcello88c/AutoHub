import Image from "@/components/Image";
import Button from "@/components/Button";

type SustainabilityProps = {};

const Sustainability = ({}: SustainabilityProps) => (
    <div className="pt150">
        <div className="container flex items-center lg:flex-col-reverse lg:items-stretch">
            <div className="shrink-0 w-[41.125rem] 2xl:w-[34rem] xl:w-[30rem] lg:w-full">
                <Image
                    className="w-full min-h-[37.5rem] rounded-2xl object-cover lg:min-h-[30.625rem]"
                    src="/images/content/sustainability-pic.jpg"
                    width={658}
                    height={600}
                    alt=""
                />
            </div>
            <div className="grow pl-20 xl:pl-12 lg:mb-14 lg:pl-0">
                <div className="mb-20 label lg:mb-16">
                    Sustainability and Innovation
                </div>
                <div className="mb-8 text-h1">
                    Carsova&apos;s approach to electric vehicle technology
                </div>
                <div className="mb-20 pr-9 text-g-100 2xl:pr-0 2xl:mb-12 lg:mb-8">
                    Introducing revolutionary autonomous driving technology,
                    Carsova Electric Cars takes a step forward in defining the
                    future of mobility. This system is not just about comfort,
                    but also illustrates Carsova&apos;s commitment to creating a
                    safe and intelligent driving experience
                </div>
                <Button title="Read More" href="/technology" arrow />
            </div>
        </div>
    </div>
);

export default Sustainability;
