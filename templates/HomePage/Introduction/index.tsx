import Image from "@/components/Image";
import Button from "@/components/Button";

type IntroductionProps = {};

const Introduction = ({}: IntroductionProps) => (
    <div className="pt150 pb-19 bg-[#FAFAFA] md:pb-0 md:bg-transparent">
        <div className="container">
            <div className="flex mb-32 xl:mb-25 lg:block">
                <div className="grow">
                    <div className="mb-8 text-h1">
                    Discover the exhilaration of sustainable driving with our electric vehicles. Fueled by cutting-edge technology, our electric cars propel you forward into the future while preserving the environment.
                    </div>
                    <Button title="Read More" arrow />
                </div>
            </div>
            <div className="flex space-x-6 lg:block lg:space-x-0 lg:space-y-6">
                {[
                    "/images/content/introduction-pic-1.jpg",
                    "/images/content/introduction-pic-2.jpg",
                ].map((image, index) => (
                    <div className="flex-1" key={index}>
                        <Image
                            className="w-full rounded-2xl md:object-cover md:min-h-[21.875rem] md:rounded-xl"
                            src={image}
                            width={660}
                            height={481}
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Introduction;
