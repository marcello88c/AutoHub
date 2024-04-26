import Image from "@/components/Image";

type CompaniesProps = {};

const Companies = ({}: CompaniesProps) => (
    <div className="pt150">
        <div className="container">
            <div className="mb-25 text-center md:mb-14">
                <div className="mb-16 label">Support & trust our products</div>
                <div className="text-h1">
                    Supported by millions of global companies
                </div>
            </div>
            <div className="flex flex-wrap justify-center -mt-6 -mx-3 md:-mt-4 md:-mx-3">
                {[
                    "/images/content/global-bank.svg",
                    "/images/content/epicurious.svg",
                    "/images/content/segment.svg",
                    "/images/content/cloud-watch.svg",
                    "/images/content/feather-dev.svg",
                    "/images/content/sisyphus.svg",
                ].map((image, index) => (
                    <div
                        className="mt-6 mx-3 border border-g-75 rounded-full overflow-hidden md:w-[calc(50%-1.5rem)] md:mt-4 md:mx-3"
                        key={index}
                    >
                        <Image
                            className="w-full"
                            src={image}
                            width={184}
                            height={64}
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Companies;
