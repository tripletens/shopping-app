import React from 'react';

function ProductImageArea() {
  return (
    <react-fragment> 
        <div class="product_image_area">
            <div class="container">
                <div class="row s_product_inner">
                    <div class="col-lg-6">
                        <div class="s_product_img">
                            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="">
                                        <img src="img/product/single-product/s-product-s-2.jpg" alt=""/>
                                    </li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1" class="">
                                        <img src="img/product/single-product/s-product-s-3.jpg" alt=""/>
                                    </li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2" class="active">
                                        <img src="img/product/single-product/s-product-s-4.jpg" alt=""/>
                                    </li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="img/product/single-product/s-product-1.jpg" alt="First slide"/>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="img/product/single-product/s-product-1.jpg" alt="Second slide"/>
                                    </div>
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src="img/product/single-product/s-product-1.jpg" alt="Third slide"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 offset-lg-1">
                        <div class="s_product_text">
                            <h3>Faded SkyBlu Denim Jeans</h3>
                            <h2>$149.99</h2>
                            <ul class="list">
                                <li><a class="active" href="#"><span>Category</span> : Household</a></li>
                                <li><a href="#"><span>Availibility</span> : In Stock</a></li>
                            </ul>
                            <p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter.</p>
                            <div class="product_count">
                                <label for="qty">Quantity:</label>
                                <input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:" class="input-text qty"/>
                                <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;" class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
                                <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;" class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
                            </div>
                            <div class="card_area">
                                <a class="main_btn" href="#">Add to Cart</a>
                                <a class="icon_btn" href="#"><i class="lnr lnr lnr-diamond"></i></a>
                                <a class="icon_btn" href="#"><i class="lnr lnr lnr-heart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </react-fragment>
  );
}

export default ProductImageArea;
