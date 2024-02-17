import React from "react";
function Category(props) {
  const { img, text } = props;
  return (
    <div className="h-36 w-36 flex flex-col items-center border border-gray-200 hover:border-primary rounded-lg text-black ">
      {/* <Link to={`/*`}> */}

      <img className="my-3" src={img} alt="Vegetables" />
      {/* </Link> */}

      <p className="text-sm text-black">{text}</p>
    </div>
  );
}

export default Category;
