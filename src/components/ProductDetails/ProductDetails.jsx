import React, { useState } from 'react';
import RelatedProducts from "./RelatedProducts";
import Star from '../assets/Star.svg'
import Kristin from '../assets/Kristin.svg'
const ProductDetails = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (value) => {
    setSelected(value);
  };
  return (
    <div>
    <div className="w-[1320px] h-[558px] relative">
  <div className="w-[648px] h-[556px] left-0 top-[2px] absolute">
    <img className="w-[556px] h-[556px] left-[92px] top-0 absolute" src="/product-image@2x.png" />
    
    <div className="w-6 h-6 left-[28px] top-[532px] absolute" />
    <div className="w-6 h-6 left-[28px] top-[24px] absolute" />
  </div>
  <div className="left-[672px] top-0 absolute flex-col justify-start items-start gap-6 inline-flex">
    <div className="flex-col justify-start items-start gap-5 flex">
      <div className="flex-col justify-start items-start gap-3 flex">
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="text-zinc-900 text-4xl font-semibold font-['Poppins'] leading-[43.20px]">Chinese Cabbage</div>
          <div className="px-2 py-1 bg-green-600 bg-opacity-20 rounded justify-center items-center gap-2.5 flex">
            <div className="text-green-800 text-sm font-normal font-['Poppins'] leading-[21px]">In Stock</div>
          </div>
        </div>
        <div className="justify-start items-start gap-3 inline-flex">
          <div className="justify-start items-center flex">
            <div className="w-[18px] h-[18px] relative" />
            <div className="w-[18px] h-[18px] relative" />
            <div className="w-[18px] h-[18px] relative" />
            <div className="w-[18px] h-[18px] relative" />
            <div className="w-[18px] h-[18px] relative" />
            <div className="text-stone-500 text-sm font-normal font-['Poppins'] leading-[21px]"> 4 Review</div>
          </div>
          <div className="text-zinc-400 text-sm font-medium font-['Poppins'] leading-[21px]">•</div>
          <div className="justify-start items-start gap-1 flex">
            <div className="text-zinc-800 text-sm font-medium font-['Poppins'] leading-[21px]">SKU:</div>
            <div className="text-stone-500 text-sm font-normal font-['Poppins'] leading-[21px]">2,51,594</div>
          </div>
        </div>
      </div>
      <div className="justify-start items-center gap-3 inline-flex">
        <div className="justify-start items-center gap-1 flex">
          <div className="text-zinc-400 text-xl font-normal font-['Poppins'] line-through leading-[30px]">$48.00</div>
          <div className="text-green-800 text-2xl font-medium font-['Poppins'] leading-9">$17.28</div>
        </div>
        <div className="px-2.5 py-[3px] bg-red-500 bg-opacity-10 rounded-[30px] justify-start items-start gap-1.5 flex">
          <div className="text-red-500 text-sm font-medium font-['Poppins'] leading-[21px]">64% Off</div>
        </div>
      </div>
      <div className="w-[647px] h-[0px] border border-neutral-200"></div>
    </div>
    <div className="flex-col justify-start items-start gap-4 flex">
      
      <div className="w-[568px] text-zinc-500 text-sm font-normal font-['Poppins'] leading-[21px]">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. </div>
    </div>
    <div className="py-[18px] bg-white shadow border border-white justify-center items-center gap-3 inline-flex">
      <div className="p-2 bg-white rounded-[170px] border border-neutral-200 justify-center items-center flex">
        <div className="w-[34px] h-[34px] relative">
          <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-zinc-100 rounded-[170px]" />
          
          <img className="w-3.5 h-3.5 left-[10px] top-[10px] absolute" alt="" src="/plus-1@2x.png" />
        </div>
        <div className="w-10 text-center text-zinc-900 text-base font-normal font-['Poppins'] leading-normal">5</div>
        <div className="w-[34px] h-[34px] relative">
          <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-zinc-100 rounded-[170px]" />
          <img className="w-3.5 h-3.5 left-[10px] top-[10px] absolute" alt="" src="/minus@2x.png" />
        </div>
      </div>
      
      <div className="p-4 bg-green-600 bg-opacity-10 rounded-[43px] justify-start items-start gap-2.5 flex">
        <img className="w-5 h-5 relative" alt="" src="/heart@2x.png"/>
      </div>
    </div>
    
  </div>
</div>

<div>
<div className="w-[1920px] h-14 px-[689px] bg-white shadow justify-start items-start inline-flex">
        <button
          className={`p-4 bg-white justify-start items-start flex hover:shadow-inner ${
            selected === 'description' ? 'shadow-inner' : ''
          }`}
          onClick={() => handleSelect('description')}
        >
          <div className="text-zinc-900 text-base font-medium font-['Poppins'] leading-normal">
            Descriptions
          </div>
        </button>
        <button
          className={`p-4 bg-white justify-start items-start flex hover:shadow-inner ${
            selected === 'additional' ? 'shadow-inner' : ''
          }`}
          onClick={() => handleSelect('additional')}
        >
          <div className="text-zinc-500 text-base font-medium font-['Poppins'] leading-normal">
            Customer Feedback
          </div>
        </button>
      </div>
      {selected === 'description' ? (
        <div className="w-[648px] text-zinc-500 text-sm font-normal font-['Poppins'] leading-[21px]">
          Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.<br/><br/>Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra.
        </div>
      ) : selected === 'additional' ? (
        <div className="w-[760px] h-[74px] flex-col justify-start items-start gap-3 inline-flex">
          <div className="w-[760px] h-[41px] relative">
            <img className="w-[41px] h-[41px] left-0 top-0 absolute rounded-full" src={Kristin} />
            <div className="w-[119.63px] h-[41px] pb-0.5 left-[53px] top-0 absolute flex-col justify-start items-start gap-0.5 inline-flex">
              <div className="text-zinc-900 text-sm font-medium font-['Poppins'] leading-[21px]">Kristin Watson</div>
              <div className="justify-start items-center inline-flex">
                <img className="rating-child12 w-6 h-6" alt="" src={Star} />
              </div>
            </div>
            <div className="w-[83.27px] left-[676.73px] top-[10px] absolute text-right text-neutral-400 text-sm font-normal font-['Poppins'] leading-[21px]">2 min ago</div>
          </div>
          <div className="w-[760px] text-zinc-500 text-sm font-normal font-['Poppins'] leading-[21px]">Duis at ullamcorper nulla, eu dictum eros.</div>
        </div>
      ) : (
        ''
      )}
    </div>
<RelatedProducts/>

</div>

  );
};

export default ProductDetails;
