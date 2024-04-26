import Button from "@/components/Button";
import Image from "@/components/Image";

type ReleasProps = {};

const Releas = ({}: ReleasProps) => (
    <div className="pt150 text-center">
        <div className="container">
            <div className="mb-16 label">Will be released soon</div>
            <div className="max-w-[36rem] mx-auto mb-20 text-h1">
                The latest type with AI technology support
            </div>
            <div className="2xl:max-w-[54rem] 2xl:mx-auto">
                <Image
                    className="max-w-full"
                    src="/images/content/car-soon.png"
                    width={1112}
                    height={454}
                    alt=""
                />
            </div>
            <div className="max-w-[30rem] mx-auto mb-8 text-body text-g-100">
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s, when an unknown printer took
            </div>
            <Button title="Watch Trailer" arrow />
        </div>
    </div>
);

export default Releas;
