import Image from "@/components/Image";
import Button from "@/components/Button";

type TechnologyProps = {};

const Technology = ({}: TechnologyProps) => (
    <div className="pt150">
        <div className="container flex items-center lg:flex-col-reverse lg:items-stretch">
            <div className="shrink-0 w-[35.625rem] 2xl:w-[32rem] xl:w-[28rem] lg:w-full">
                <Image
                    className="w-full rounded-2xl"
                    src="/images/content/technology-pic.jpg"
                    width={570}
                    height={700}
                    alt=""
                />
            </div>
            <div className="grow pl-25 2xl:pl-16 lg:mb-14 lg:pl-0">
                <div className="mb-20 label 2xl:mb-12">
                    Features and Technology
                </div>
                <div className="mb-14 text-h1 2xl:mb-8">
                    Introducing Next-Generation Technology for the Driving Experience Ahead
                </div>
                <div className="mb-4 text-h5">Real-time monitoring</div>
                <div className="mb-14 text-g-100 lg:mb-8">
                    Not only do our electric vehicles provide eco-conscious transportation solutions, but they also offer an incredible driving experience with state-of-the-art features. From rapid charging to seamless smart device integration.
                </div>
                <Button title="Read More" href="/technology" arrow />
            </div>
        </div>
    </div>
);

export default Technology;
