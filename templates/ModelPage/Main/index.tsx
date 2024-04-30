import Image from "@/components/Image";
import Button from "@/components/Button";

type MainProps = {};

const Main = ({}: MainProps) => (
    <div className="pt-20 md:pt-15">
        <div className="container">
            <div className="max-w-[50rem] mb-30 text-display xl:mb-25">
                The amazing experience of the newest model of carsova electric
                cars.
            </div>
            <div className="flex justify-between mb-6 text-h5 md:mb-4 md:text-body">
                <div className="">The Electrical Carsova - DMG A 80x</div>
                <div className="shrink-0 ml-6">208 - 188 g/km</div>
            </div>
            <div className="relative rounded-[1.25rem] overflow-hidden before:absolute before:inset-0 before:z-1 before:bg-radial-gradient before:opacity-40">
                <Image
                    className="w-full md:min-h-[33.125rem] md:object-cover"
                    src="/images/content/model.jpg"
                    width={1344}
                    height={679}
                    alt=""
                />
            </div>
        </div>
    </div>
);

export default Main;
