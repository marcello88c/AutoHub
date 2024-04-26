import Image from "@/components/Image";
import Button from "@/components/Button";

type MainProps = {};

const Main = ({}: MainProps) => (
    <div className="relative after:absolute after:inset-0 after:z-2 after:bg-gradient-to-b after:from-black/40 after:to-black/0 before:absolute before:inset-0 before:z-1 before:bg-radial-gradient before:opacity-40">
        <Image
            className="object-cover object-[50%75%] 3xl:object-center"
            src="/images/content/main-pic.jpg"
            fill
            alt=""
        />
        <div className="container relative z-3 flex items-end min-h-[54.3125rem] pb-24 2xl:min-h-[48rem] md:min-h-screen md:pb-15">
            <div className="max-w-[36.5rem]">
                <div className="mb-8 text-display text-white">
                Modern solutions for current and future transport needs.
                </div>
                <Button
                    className="min-w-[11rem] md:min-w-min"
                    title="Order Now"
                    light
                    arrow
                />
            </div>
        </div>
    </div>
);

export default Main;
