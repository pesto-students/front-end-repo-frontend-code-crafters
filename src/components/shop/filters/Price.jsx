import { Select, Option } from "@material-tailwind/react";

export function PriceFilter() {
    return (
    <div className="rounded-md p-2 text-black">
      <Select label="Price" className="text-black">
        <Option className="text-black">₹0 - ₹10</Option>
        <Option className="text-black">₹10 - ₹20</Option>
      </Select>
    </div>
    );
   }
   