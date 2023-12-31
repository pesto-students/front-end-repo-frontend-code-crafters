import React, { useState } from "react";
import RelatedProducts from "./RelatedProducts";
import Star from "../assets/Star.svg";
import Kristin from "../assets/Kristin.svg";
import ProductImage from "./ProductImage";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
const ProductDetails = ({ product }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (value) => {
    setSelected(value);
  };
  return (
    <div>
      <div className="w-[1320px] h-[558px] relative">
        
       <ProductImage/>
      </div>

      <div>
        <div className="w-[1920px] h-14 px-[689px] bg-white shadow justify-start items-start inline-flex">
          <button
            className={`p-4 bg-white justify-start items-start flex hover:shadow-inner ${
              selected === "description" ? "shadow-inner" : ""
            }`}
            onClick={() => handleSelect("description")}
          >
            <div className="text-zinc-900 text-base font-medium font-['Poppins'] leading-normal">
              Descriptions
            </div>
          </button>
          <button
            className={`p-4 bg-white justify-start items-start flex hover:shadow-inner ${
              selected === "additional" ? "shadow-inner" : ""
            }`}
            onClick={() => handleSelect("additional")}
          >
            <div className="text-zinc-500 text-base font-medium font-['Poppins'] leading-normal">
              Customer Feedback
            </div>
          </button>
        </div>
        {selected === "description" ? (
          <div className="w-[648px] text-zinc-500 text-sm font-normal font-['Poppins'] leading-[21px]">
            Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
            posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
            vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi
            porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin.
            Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus.
            Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam
            scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis
            commodo quis, egestas elementum leo. Donec convallis mollis enim.
            Aliquam id mi quam. Phasellus nec fringilla elit.
            <br />
            <br />
            Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed
            iaculis, metus faucibus elementum tincidunt, turpis mi viverra
            velit, pellentesque tristique neque mi eget nulla. Proin luctus
            elementum neque et pharetra.
          </div>
        ) : selected === "additional" ? (
          <div className="w-[760px] h-[74px] flex-col justify-start items-start gap-3 inline-flex">
            <div className="w-[760px] h-[41px] relative">
              <img
                className="w-[41px] h-[41px] left-0 top-0 absolute rounded-full"
                src={Kristin}
              />
              <div className="w-[119.63px] h-[41px] pb-0.5 left-[53px] top-0 absolute flex-col justify-start items-start gap-0.5 inline-flex">
                <div className="text-zinc-900 text-sm font-medium font-['Poppins'] leading-[21px]">
                  Kristin Watson
                </div>
                <div className="justify-start items-center inline-flex">
                  <img className="rating-child12 w-6 h-6" alt="" src={Star} />
                </div>
              </div>
              <div className="w-[83.27px] left-[676.73px] top-[10px] absolute text-right text-neutral-400 text-sm font-normal font-['Poppins'] leading-[21px]">
                2 min ago
              </div>
            </div>
            <div className="w-[760px] text-zinc-500 text-sm font-normal font-['Poppins'] leading-[21px]">
              Duis at ullamcorper nulla, eu dictum eros.
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <FeaturedProducts/>
    </div>
  );
};

export default ProductDetails;
