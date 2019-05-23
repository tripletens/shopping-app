import React from 'react';

import Banner from './productdetails/banner';
import ProductImageArea from './productdetails/productimagearea';
import ProductDescriptionArea from './productdetails/productdescriptionarea';
import MostProductArea from './productdetails/mostproductarea';
function ShopCategory() {
  return (
    <react-fragment>
        <Banner/>
        <ProductImageArea/>
        <ProductDescriptionArea/>
        <MostProductArea/>
    </react-fragment>
  );
}

export default ShopCategory;
