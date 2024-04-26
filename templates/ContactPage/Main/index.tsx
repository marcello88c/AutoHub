import Button from "@/components/Button";
import Form from "./Form";

type MainProps = {};

const Main = ({}: MainProps) => (
    <div className="pt-20 md:pt-15">
        <div className="container">
            <div className="mb-[8.75rem] 2xl:mb-25">
                <div className="max-w-[42rem] mb-12 text-display">
                    Are you ready to build a future with carsova?
                </div>
                <Button className="min-w-[11rem]" title="Order Now" arrow />
            </div>
            <div className="flex justify-between lg:flex-col-reverse">
                <div className="shrink-0 w-[28.5rem] mr-20 xl:w-[24rem] lg:w-full lg:mt-22 lg:mr-0">
                    <div className="mb-4 text-h5">
                        Our professional team is ready
                    </div>
                    <div className="mb-9 pb-9 border-b border-g-75/50 text-g-100 md:mb-7 md:pb-7">
                        We are dedicated to providing the best service in
                        meeting your needs regarding electric cars. Don&apos;t
                        hesitate to contact us, as we are always ready to
                        provide fast and efficient assistance
                    </div>
                    <div className="max-w-[20rem] space-y-8">
                        <div className="">
                            <div className="mb-3 text-h5">
                                UK Address{" "}
                                <span className="font-normal text-g-75">
                                    (head office)
                                </span>
                            </div>
                            <div className="space-y-3 text-g-100">
                                <p>
                                    2972 Westheimer Rd. Santa Ana, Illinois
                                    85486
                                </p>
                                <p>(406) 555-0120</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="mb-3 text-h5">FR Address</div>
                            <div className="space-y-3 text-g-100">
                                <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
                                <p>(207) 555-0119</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Form />
            </div>
        </div>
    </div>
);

export default Main;
