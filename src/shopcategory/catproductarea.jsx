import React , {Component} from 'react';


class CatProductArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    "id": "1",
                    "img": "img/product/feature-product/f-p-1.jpg",
                    "name": "Long Sleeve TShirt",
                    "price": "$150.00"
                },
                {
                    "id": "2",
                    "img": "img/product/feature-product/f-p-2.jpg",
                    "name": "Long Sleeve TShirt",
                    "price": "$150.00"
                },
                {
                    "id": "3",
                    "img": "img/product/feature-product/f-p-3.jpg",
                    "name": "Long Sleeve TShirt",
                    "price": "$150.00"
                },
                {
                    "id": "4",
                    "img": "img/product/feature-product/f-p-4.jpg",
                    "name": "Long Sleeve TShirt",
                    "price": "$150.00"
                },
                {
                    "id": "5",
                    "img": "img/product/feature-product/f-p-5.jpg",
                    "name": "Long Sleeve TShirt",
                    "price": "$150.00"
                },
                {
                    "id": "6",
                    "img": "img/product/feature-product/f-p-6.jpg",
                    "name": "Long Sleeve TShirt",
                    "price": "$150.00"
                }
            ],
            testarray: ['1', '2', '3', '4', '5'],
            testjson: {
                "name": "nonso"
            },
            cart : ['cart1']
        }
        this.addcart = this.addcart.bind(this);
    }

    addcart = (id) =>{
        // this.setState({ cart : this.state.cart.});
        console.log("items in cart : " + this.state.cart);
        console.log("Item with this index added : " + id);
        // j
    }
    render() {
         
        return ( 
            <react-fragment>
                
                <section class="cat_product_area p_120">
                    <div class="container">
                        <div class="row flex-row-reverse">
                            <div class="col-lg-9">
                                <div class="product_top_bar">
                                    <div class="left_dorp">
                                        <select class="sorting" style={{ display: "none" }}>
                                            <option value="1">Default sorting</option>
                                            <option value="2">Default sorting 01</option>
                                            <option value="4">Default sorting 02</option>
                                        </select>
                                        <div class="nice-select sorting" tabindex="0"><span class="current">Default sorting</span>
                                            <ul class="list">
                                                <li data-value="1" class="option selected">Default sorting</li>
                                                <li data-value="2" class="option">Default sorting 01</li>
                                                <li data-value="4" class="option">Default sorting 02</li>
                                            </ul>
                                        </div>
                                        <select class="show" style={{ display: "none" }}>
                                            <option value="1">Show 12</option>
                                            <option value="2">Show 14</option>
                                            <option value="4">Show 16</option>
                                        </select>
                                        <div class="nice-select show" tabindex="0"><span class="current">Show 12</span>
                                            <ul class="list">
                                                <li data-value="1" class="option selected">Show 12</li>
                                                <li data-value="2" class="option">Show 14</li>
                                                <li data-value="4" class="option">Show 16</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="right_page ml-auto">
                                        <nav class="cat_page" aria-label="Page navigation example">
                                            <ul class="pagination">
                                                <li class="page-item"><a class="page-link" href="#"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></a></li>
                                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                <li class="page-item blank"><a class="page-link" href="#">...</a></li>
                                                <li class="page-item"><a class="page-link" href="#">6</a></li>
                                                <li class="page-item"><a class="page-link" href="#"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div class="latest_product_inner row">
                                   {this.state.products.map(item =>
                                       <div key={item.id} id={item.id} value={item.name} class="col-lg-4 col-md-4 col-sm-6">
                                           <div class="f_p_item"  >
                                               <div class="f_p_img">
                                                   <img class="img-fluid" src={item.img} alt="" />
                                                   <div class="p_icon">
                                                       <a href="#"><i class="lnr lnr-heart"></i></a>
                                                       <button class="btn btn-sm" onClick={this.addcart(item.id)}><i class="lnr lnr-cart"></i></button>
                                                   </div>
                                               </div>
                                               <a href="#"><h4>{item.name}</h4></a>
                                               <h5>{item.price}</h5>
                                           </div>
                                       </div>
                                    )}                                 
                                    
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="left_sidebar_area">
                                    <aside class="left_widgets cat_widgets">
                                        <div class="l_w_title">
                                            <h3>Browse Categories</h3>
                                        </div>
                                        <div class="widgets_inner">
                                            <ul class="list">
                                                <li><a href="#">Fruits and Vegetables</a></li>
                                                <li>
                                                    <a href="#">Meat and Fish</a>
                                                    <ul class="list">
                                                        <li><a href="#">Frozen Fish</a></li>
                                                        <li><a href="#">Dried Fish</a></li>
                                                        <li><a href="#">Fresh Fish</a></li>
                                                        <li><a href="#">Meat Alternatives</a></li>
                                                        <li><a href="#">Meat</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Cooking</a>
                                                    <ul class="list">
                                                        <li><a href="#">Frozen Fish</a></li>
                                                        <li><a href="#">Dried Fish</a></li>
                                                        <li><a href="#">Fresh Fish</a></li>
                                                        <li><a href="#">Meat Alternatives</a></li>
                                                        <li><a href="#">Meat</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Beverages</a>
                                                    <ul class="list">
                                                        <li><a href="#">Frozen Fish</a></li>
                                                        <li><a href="#">Dried Fish</a></li>
                                                        <li><a href="#">Fresh Fish</a></li>
                                                        <li><a href="#">Meat Alternatives</a></li>
                                                        <li><a href="#">Meat</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Home and Cleaning</a></li>
                                            </ul>
                                        </div>
                                    </aside>
                                    <aside class="left_widgets p_filter_widgets">
                                        <div class="l_w_title">
                                            <h3>Product Filters</h3>
                                        </div>
                                        <div class="widgets_inner">
                                            <h4>Brand</h4>
                                            <ul class="list">
                                                <li><a href="#">Apple</a></li>
                                                <li><a href="#">Asus</a></li>
                                                <li class="active"><a href="#">Gionee</a></li>
                                                <li><a href="#">Micromax</a></li>
                                                <li><a href="#">Samsung</a></li>
                                            </ul>
                                        </div>
                                        <div class="widgets_inner">
                                            <h4>Color</h4>
                                            <ul class="list">
                                                <li><a href="#">Black</a></li>
                                                <li><a href="#">Black Leather</a></li>
                                                <li class="active"><a href="#">Black with red</a></li>
                                                <li><a href="#">Gold</a></li>
                                                <li><a href="#">Spacegrey</a></li>
                                            </ul>
                                        </div>
                                        <div class="widgets_inner">
                                            <h4>Price</h4>
                                            <div class="range_item">
                                                <div id="slider-range" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                                                    <div class="ui-slider-range ui-corner-all ui-widget-header" style={{ left: "2%", width: "98%" }}></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style={{ left: "2%" }}></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style={{ left: "100%" }}></span></div>
                                                <div class="row m0">
                                                    <label for="amount">Price : </label>
                                                    <input type="text" id="amount" readonly="" />
                                                </div>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </react-fragment>
         );
    }
}
 
export default CatProductArea;
// function CatProductArea() {
    
//   return (
    
//   );
// }

// export default CatProductArea;
