import { Checkbox } from "@material-tailwind/react";

export function OutOfStockFilter() {
 return (
 <div className="rounded-md p-2 text-black">
   <Checkbox label="Exclude Out of Stock" className="text-black h-4 w-4" />
 </div>
 );
}
