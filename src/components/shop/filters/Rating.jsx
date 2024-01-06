import { Select, Option } from "@material-tailwind/react";

export function RatingFilter() {
    return (
    <div className="rounded-md p-2 text-black">
      <Select label="Rating" className="text-black">
        <Option className="text-black">4 stars and up</Option>
        <Option className="text-black">3 stars</Option>
        <Option className="text-black">2 stars</Option>
        <Option className="text-black">1 stars</Option>
      </Select>
    </div>
    );
   }
   