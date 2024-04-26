import { useState } from "react";
import Field from "@/components/Field";
import Select from "@/components/Select";
import Button from "@/components/Button";

const categories = [
    {
        id: "0",
        title: "Category 1",
    },
    {
        id: "1",
        title: "Category 2",
    },
    {
        id: "2",
        title: "Category 3",
    },
];

type FormProps = {};

const Form = ({}: FormProps) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [category, setCategory] = useState("");
    const [comment, setComment] = useState("");

    return (
        <form
            className="w-full max-w-[41.25rem] space-y-8 lg:max-w-full"
            action=""
            onSubmit={() => console.log("Submit")}
        >
            <Field
                label="Full Name"
                placeholder="Ex. John Pablo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <Field
                label="Email Address"
                placeholder="Ex. Johnpablo@example.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <Field
                label="Phone Number"
                placeholder="Ex. (808) 555-0111"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <Select
                className="relative z-2"
                classButton="!text-caption"
                classOption="!text-caption"
                label="Category"
                placeholder="Ex. Complaint"
                value={category}
                onChange={setCategory}
                items={categories}
            />
            <Field
                label="Comment(max 4,000 characters)"
                placeholder="Ex. Hello there is something I want to ask.."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                textarea
            />
            <div className="text-right">
                <Button title="Submit" arrow />
            </div>
        </form>
    );
};

export default Form;
