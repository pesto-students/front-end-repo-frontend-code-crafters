import { Select, Option } from "@material-tailwind/react";

export function PriceFilter(props) {
  // const { priceChangeHandler, priceValue } = props;
  return (
    <div className="rounded-md p-2 text-black">
      <Select
        label="Price"
        className="text-black"
        // selected={(e) => {
        //   if (!e?.props.value) {
        //     priceChangeHandler([0,50]);
        //     return `₹0 - ₹50`;
        //   }
        //   priceChangeHandler(e?.props.value);
        //   return `₹${e?.props.value[0][0]} - ₹${e?.props.value[0][1]}`;
        // }}
        disabled={true}
      >
        <Option value={"0,50"} className="text-black">
          ₹0 - ₹50
        </Option>
        <Option value={"50,100"} className="text-black">
          ₹50 - ₹100
        </Option>
        <Option value={"100,200"} className="text-black">
          ₹100 - ₹200
        </Option>
        <Option value={"200,99999"} className="text-black">
          ₹200+
        </Option>
      </Select>
    </div>
  );
  // selected={(e) => {
  //   if(!e?.props.value){
  //     priceChangeHandler([0,50])
  //     return `₹0 - ₹50`
  //   }
  //   priceChangeHandler(e?.props.value);
  //   return `₹${e?.props.value[0][0]} - ₹${e?.props.value[0][1]}`;
  // }}
}
