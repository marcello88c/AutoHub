import Button from "@/components/Button";

type MainProps = {};

const Main = ({}: MainProps) => (
    <div className="">
        <div className="container">
            <div className="max-w-[55.5rem] py-25 md:pb-19">
                <div className="mb-10 text-display">
                    We build electric cars with advanced technology to provide a
                    unique and satisfying driving experience
                </div>
                <Button
                    className="min-w-[11rem]"
                    title="View more details"
                    arrow
                />
            </div>
            <div className="w-full h-0.25 bg-g-75/50"></div>
        </div>
    </div>
);

export default Main;
