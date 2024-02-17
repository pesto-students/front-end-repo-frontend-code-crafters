import { Select, Option } from "@material-tailwind/react";

const options = ["Fruits", "Vegetables", "Dairy", "Beverages"];

export function CategoryFilter(props) {
  const { categoryChangeHandler, categoryValue } = props;
  
  return (
    <div className="rounded-md  text-black">
      <Select
        label="Category"
        className="text-black"
        selected={(e) => {
          categoryChangeHandler(e?.props.value);
          return e?.props.value;
        }}
      >
        <Option value="fruits" className="text-black">
          Fruits
        </Option>
        <Option value="vegetables" className="text-black">
          Vegetables
        </Option>
        <Option value="dairy" className="text-black">
          Dairy
        </Option>
        <Option value="beverages" className="text-black">
          Beverages
        </Option>
      </Select>
    </div>
  );
}
