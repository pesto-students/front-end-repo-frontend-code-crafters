import React , {useState}from 'react';

const Service = () => {
  const servicesData = [
    {
      class: 'rounded-[4981px] flex flex-col items-start justify-start p-[16px] bg-cover bg-no-repeat bg-top icon3',
      class2: 'relative w-10 h-10 overflow-hidden flex-shrink-0',
      img: '/deliverytruck-1.svg',
      name: 'Free Shipping',
      headline: 'Free shipping with discount',
    },
    {
      class: 'rounded-[4981px] flex flex-col items-start justify-start p-[16px] bg-cover bg-no-repeat bg-top icon5',
      class2: 'relative w-10 h-10 overflow-hidden flex-shrink-0',
      img: '/shoppingbag.svg',
      name: '100% Secure Payment',
      headline: 'We ensure your money is safe',
    },
    {
      class: 'rounded-[4981px] flex flex-col items-start justify-start p-[16px] bg-cover bg-no-repeat bg-top icon6',
      class2: 'relative w-10 h-10 overflow-hidden flex-shrink-0',
      img: '/package.svg',
      name: 'Money-Back Guarantee',
      headline: '30 days money-back',
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex justify-center items-end min-h-screen mt-300">
      <div className=" top-[700px] absolute  overflow-hidden text-gray-scale-white">
      <div className="flex flex-col items-center">
        <div className="feature8 bg-gray-100 shadow-inner flex items-start justify-start gap-20 text-center">
          {servicesData.map((service, index) => (
            <div
              className="feature9 flex flex-col items-center"
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`${
                  service.class
                } rounded-full ${
                  hoveredIndex === index ? 'bg-gray-300' : 'bg-green-200'
                } p-2`}
              >
                <img
                  className={service.class2}
                  alt=""
                  src={service.img}
                  style={{ borderRadius: '50%', width: '40px', height: '40px' }}
                />
              </div>
              <div className="info41">
                <div className="free-shipping text-gray-900 font-semibold">
                  {service.name}
                </div>
                <div className="free-shipping-with text-gray-400 text-sm">
                  {service.headline}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      </div>
    
  );
};

export default Service;