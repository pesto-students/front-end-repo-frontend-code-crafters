import React, { useState } from 'react';

const DropDown = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    return (
        <div className="flex space-x-4">
                
       <div className="rounded flex flex-row items-center justify-start py-2.5 px-4 border-[1px] border-solid border-gray-scale-gray-100">
        <select
          className="rounded-l border-[1px] border-solid border-gray-scale-gray-100 py-2.5 px-4 bg-white text-gray-500"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="" disabled selected>Select Category</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          {/* Add more options as needed */}
        </select>
        <div className="w-3.5 h-3.5 bg-transparent border-l border-[1px] border-solid border-gray-scale-gray-100 flex items-center justify-center">
          <img
            className="w-2 h-2 transform rotate-45"
            alt=""
            src="/chevron-down2.svg"
          />
        </div>
        <div className="rounded flex flex-row items-center justify-start py-2.5 px-4 border-[1px] border-solid border-gray-scale-gray-100"></div>
      </div>
      <div className="rounded flex flex-row items-center justify-start py-2.5 px-4 border-[1px] border-solid border-gray-scale-gray-100">
      <select
          className="rounded-l border-[1px] border-solid border-gray-scale-gray-100 py-2.5 px-4 bg-white text-gray-500"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="" disabled selected>Select Price</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          {/* Add more options as needed */}
        </select>
        <div className="w-3.5 h-3.5 bg-transparent border-l border-[1px] border-solid border-gray-scale-gray-100 flex items-center justify-center">
          <img
            className="w-2 h-2 transform rotate-45"
            alt=""
            src="/chevron-down2.svg"
          />
        </div>
       </div>
       <div className="rounded flex flex-row items-center justify-start py-2.5 px-4 border-[1px] border-solid border-gray-scale-gray-100">
        <select
          className="rounded-l border-[1px] border-solid border-gray-scale-gray-100 py-2.5 px-4 bg-white text-gray-500"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="" disabled selected>Select Rating</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          {/* Add more options as needed */}
        </select>
        <div className="w-3.5 h-3.5 bg-transparent border-l border-[1px] border-solid border-gray-scale-gray-100 flex items-center justify-center">
          <img
            className="w-2 h-2 transform rotate-45"
            alt=""
            src="/chevron-down2.svg"
          />
        </div>
        </div>

      </div>

    );
  };

export default DropDown;
