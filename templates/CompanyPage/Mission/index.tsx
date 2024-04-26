import Image from "@/components/Image";

type MissionProps = {};

const Mission = ({}: MissionProps) => (
    <div className="pt150">
        <div className="container flex items-center lg:flex-col-reverse">
            <div className="shrink-0 w-[35.625rem] 2xl:w-[32rem] xl:w-[28rem] lg:w-full">
                <Image
                    className="w-full min-h-[30.625rem] rounded-2xl object-cover"
                    src="/images/content/mission-pic.jpg"
                    width={570}
                    height={600}
                    alt=""
                />
            </div>
            <div className="grow pl-25 pr-4 2xl:pl-12 lg:mb-14 lg:pl-0">
                <div className="mb-20 label 2xl:mb-16">
                    Our Mission and Values
                </div>
                <div className="mb-8 text-h1">
                    Carsova provides electric cars that combine innovation,
                    performance, and sustainability
                </div>
                <div className="text-g-100">
                    Bringing positive change by providing easy and affordable
                    access to electric cars, while prioritizing sustainability
                    and the latest technology
                </div>
            </div>
        </div>
    </div>
);

export default Mission;
