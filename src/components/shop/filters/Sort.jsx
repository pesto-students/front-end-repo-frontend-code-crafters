import { Select, Option } from "@material-tailwind/react";

export function SortByFilter() {
    return (
    <div className="rounded-md p-2 text-black">
      <Select label="Sort By" className="text-black" disabled={true}>
        <Option className="text-black">Name: A-Z</Option>
        <Option className="text-black">Name: Z-A</Option>
        <Option className="text-black">Price: Low to High</Option>
        <Option className="text-black">Price: High to Low</Option>
      </Select>
    </div>
    );
   }
   