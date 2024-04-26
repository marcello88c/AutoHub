import { milestones } from "@/constants/milestones";

type MilestonesProps = {};

const Milestones = ({}: MilestonesProps) => (
    <div className="pt150">
        <div className="container">
            <div className="flex lg:block">
                <div className="shrink-0 w-[27.13rem] label 2xl:w-[16rem] xl:w-[12rem] lg:w-full lg:mb-16 lg:mr-0">
                    Milestones and <br className="lg:hidden"></br>Achievements
                </div>
                <div className="grow">
                    <div className="mb-12 pb-12 border-b border-g-75/50 text-h1">
                        We have achieved various significant achievements. From
                        the launch of the first model to industry awards
                    </div>
                    <div className="flex flex-wrap -mt-12 -ml-16 2xl:-ml-12 lg:-ml-8 md:-mt-10 md:ml-0">
                        {milestones.map((item) => (
                            <div
                                className="mt-12 ml-16 2xl:ml-12 lg:ml-8 md:w-1/2 md:mt-10 md:ml-0 md:odd:pr-3"
                                key={item.id}
                            >
                                <div className="mb-2 text-[2.19rem] leading-[2.73rem] font-semibold 2xl:text-[1.875rem] 2xl:leading-[2.34rem]">
                                    {item.year}
                                </div>
                                <div className="text-body text-g-100">
                                    {item.details}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Milestones;
