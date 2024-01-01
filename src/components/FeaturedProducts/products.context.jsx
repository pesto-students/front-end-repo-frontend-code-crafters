import {createContext, useState} from 'react'

import PRODUCTS from './FeaturedProducts.json'

export const ProductContext = createContext({
    products: [],
});

export const FeaturedProductsProvider = ({children}) => {
    const [products , setProducts] = useState(PRODUCTS);
    const value = {products};
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}