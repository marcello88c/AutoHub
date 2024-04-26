import Image from "@/components/Image";

type PartnersProps = {};

const Partners = ({}: PartnersProps) => (
    <div className="pt150">
        <div className="container flex items-center lg:block">
            <div className="grow pr-20 xl:pr-16 lg:mb-14 lg:pr-0">
                <div className="mb-12 label">Best work our partner</div>
                <div className="max-w-[35.75rem] mb-26 text-h1 2xl:mb-12">
                Through collaborations with leading equipment manufacturers, we gain access to an extensive array of hardware choices.
                </div>
                <div className="max-w-[33.25rem] text-g-100">
                This collaboration holds significant importance for AutoHub Electric Cars, as it guarantees access to a diverse array of top-tier hardware options essential for the advancement and manufacturing of our electric vehicles.
                </div>
            </div>
            <div className="shrink-0 w-[35.625rem] xl:w-[30rem] lg:w-full">
                <Image
                    className="w-full rounded-2xl"
                    src="/images/content/partners-pic.jpg"
                    width={570}
                    height={700}
                    alt=""
                />
            </div>
        </div>
    </div>
);

export default Partners;
