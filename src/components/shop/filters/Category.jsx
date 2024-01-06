import { Select, Option } from "@material-tailwind/react";

export function CategoryFilter() {
    return (
    <div className="rounded-md  text-black">
      <Select label="Category" className="text-black">
        <Option className="text-black">Fruits</Option>
        <Option className="text-black">Vegetables</Option>
        <Option className="text-black">Snacks</Option>
      </Select>
    </div>
    );
   }
   
   
