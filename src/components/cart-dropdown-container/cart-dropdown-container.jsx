import React from 'react';

import Button from '../button/button.component';

const CartDropdown = () => (
  <div className='absolute w-64 h-96 flex flex-col p-5 border border-black bg-white top-24 right-10 z-50'>
    <div className='overflow-y-auto'>
      <div className='h-64 flex flex-col' />
    </div>
    <Button className='mt-auto'>GO TO CHECKOUT</Button>
  </div>
);

export default CartDropdown;
