import Image from "@/components/Image";
import Button from "@/components/Button";

type PerformanceProps = {};

const Performance = ({}: PerformanceProps) => (
    <div className="relative after:absolute after:inset-0 after:z-2 after:bg-gradient-to-r after:from-black/60 after:to-black/0">
        <Image
            className="object-cover md:object-[15%50%]"
            src="/images/content/performance-pic.jpg"
            fill
            alt=""
        />
        <div className="container relative z-3 flex items-end min-h-[49.625rem] pb-21 2xl:min-h-[45rem] xl:min-h-[40rem]">
            <div className="max-w-[34.25rem] text-white xl:max-w-[30rem]">
                <div className="mb-4 text-h1">
                    Cutting-edge Technology for Peak Performance
                </div>
                <div className="mb-12">
                From the streamlined electric drive system to the sophisticated stabilization control, each component is meticulously crafted to seamlessly integrate and deliver an exceptional driving journey.
                </div>
                <Button title="Schedule a Test Run" light arrow />
            </div>
        </div>
    </div>
);

export default Performance;
