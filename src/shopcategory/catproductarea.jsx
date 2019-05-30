import React , {Component} from 'react';

import Child from './child';
class CatProductArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    "id": "1",
                    "img": "img/product/feature-product/f-p-1.jpg",
                    "name": "Long Sleeve TShirt",
                    "price": "$159.00",
                    "available_quantity": 7,
                    "category": "women",
                    "description": 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
                },
                {
                    "id": "2",
                    "img": "img/product/feature-product/f-p-2.jpg",
                    "name": "Long Sleeve TShirt",
                    "price": "$850.00",
                    "available_quantity": 5,
                    "category": "men",
                    "description": 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
                },
                {
                    "id": "3",
                    "img": "img/product/feature-product/f-p-3.jpg",
                    "name": "Long Sleeve TShirt",
                    "price": "$150.00",
                    "available_quantity": 9,
                    "category": "women",
                    "description": 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
                },
                {
                    "id": "4",
                    "img": "img/product/feature-product/f-p-4.jpg",
                    "name": "Long Sleeve TShirt",
                    "price": "$350.00",
                    "available_quantity": 5,
                    "category": "children",
                    "description": 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'

                },
                {
                    "id": "5",
                    "img": "img/product/feature-product/f-p-5.jpg",
                    "name": "Long Sleeve TShirt",
                    "price": "$450.00",
                    "available_quantity": 5,
                    "category": "men",
                    "description": 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
                },
                {
                    "id": "6",
                    "img": "img/product/feature-product/f-p-6.jpg",
                    "name": "Long Sleeve TShirt",
                    "price": "$150.00",
                    "available_quantity": 8,
                    "category": "children",
                    "description": 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
                },
                {
                    "id": "7",
                    "img": "img/product/feature-product/f-p-1.jpg",
                    "name": "Long Sleeve TShirt",
                    "price": "$159.00",
                    "available_quantity": 4,
                    "category": "women",
                    "description": 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
                },
                {
                    "id": "8",
                    "img": "img/product/feature-product/f-p-2.jpg",
                    "name": "Long Sleeve TShirt",
                    "price": "$150.00",
                    "available_quantity": 15,
                    "category": "women",
                    "description": 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
                },
                {
                    "id": "9",
                    "img": "img/product/feature-product/f-p-3.jpg",
                    "name": "Long Sleeve TShirt",
                    "price": "$150.00",
                    "available_quantity": 5,
                    "category": "children",
                    "description": 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
                },
                {
                    "id": "10",
                    "img": "img/product/feature-product/f-p-4.jpg",
                    "name": "Long Sleeve TShirt",
                    "price": "$150.00",
                    "available_quantity": 5,
                    "category": "children",
                    "description": 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
                },
                {
                    "id": "11",
                    "img": "img/product/feature-product/f-p-5.jpg",
                    "name": "Long Sleeve TShirt",
                    "price": "$150.00",
                    "available_quantity": 5,
                    "category": "men",
                    "description": 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
                },
                {
                    "id": "12",
                    "img": "img/product/feature-product/f-p-6.jpg",
                    "name": "Long Sleeve TShirt",
                    "price": "$150.00",
                    "available_quantity": 5,
                    "category" : "children",
                    "description": 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
                }
            ],
        
            cart : ['cart1'],
            current_page : 1,
            items_per_page : 5,
            current_items : [],
            index_of_first_item:'',
            index_of_last_item:'',
            render_items : []
        }
       
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sort = this.sort.bind(this);
    }
    handleSubmit(e){
    
        this.setState({
            current_page: e.target.name
        });
        console.log( "e.value" + e.target.name );
    }
    sort(e){
        console.log('men them : ' + e.target.name);
        
        const selected = [] ;
        for( var i=0 ; i < this.state.products.length; i++){
            if (this.state.products[i]['category'] === e.target.name){
                selected.push(this.state.products[i]);
            }
        }
        this.setState({
            current_items: selected
        });
        console.log("category selected : " + selected);
        console.log("category current selected : " + this.state.current_items);
    }
    render() {
        let { products, current_page, render_items, current_items, items_per_page, index_of_first_item, index_of_last_item} = this.state;
        //logic for displaying items 
        index_of_last_item = current_page * items_per_page;
        index_of_first_item = index_of_last_item - items_per_page;
        current_items = products.slice(index_of_first_item,index_of_last_item);

        render_items = current_items.map((item)=>{
            // return <li key={item.index}> {item.id} </li>
            return(
            <div key={item.id} id={item.id} value={item.name} class="col-lg-4 col-md-4 col-sm-6">
                <div class="f_p_item"  >
                    <div class="f_p_img">
                        <img class="img-fluid" src={item.img} alt="" />
                        <div class="p_icon">
                            <a href="#"><i class="lnr lnr-heart"></i></a>
                            <button class="btn btn-sm" ><i class="lnr lnr-cart"></i></button>
                        </div>
                    </div>
                    <a href="#"><h4>{item.name}</h4></a>
                    <h5>{item.price}</h5>
                </div>
            </div>
            );
        
        });
        // console.log("current items : " + render_items);
        console.log("last index of item : " + index_of_last_item);
        console.log("first index of item : " + index_of_first_item);
        // Logic for displaying page numbers 
        const page_number = [];
        console.log("no of items : " + render_items.length );
        console.log("no of items for pages : " + items_per_page);
        // const pages = Math.ceil(products.length / items_per_page);
        for (let i = 1 ; i <= Math.ceil(products.length / items_per_page); i++){
            page_number.push(i);
        };
        // console.log("pages_numbers : " + pages_numbers);
        const render_page_numbers = page_number.map((number) =>{
            return (
                <li class="page-item" key={number} id={number}>
                    <button class="page-link" name={number} onClick={this.handleSubmit} href="#">
                        {number}
                    </button>
                </li>
                // <Child list = {this.handleSubmit} no={number}/>
            );
        });
        // render_items = this.state.current_items;
        if(this.state.current_items.length > 0){
            render_items = this.state.current_items; 
        }else{
            render_items = current_items
        }
        // return (
        //     <div>
        //         <ul>
                
        //         </ul>
        //         {/* <ul id="page-numbers"> */}
        //         <button onClick="">{render_page_numbers}</button>
        //         {/* </ul> */}
        //     </div>
        // );
        // this.state.products.map(item =>
        //     <div key={item.id} id={item.id} value={item.name} class="col-lg-4 col-md-4 col-sm-6">
        //         <div class="f_p_item"  >
        //             <div class="f_p_img">
        //                 <img class="img-fluid" src={item.img} alt="" />
        //                 <div class="p_icon">
        //                     <a href="#"><i class="lnr lnr-heart"></i></a>
        //                     <button class="btn btn-sm" onClick={this.addcart(item.id)}><i class="lnr lnr-cart"></i></button>
        //                 </div>
        //             </div>
        //             <a href="#"><h4>{item.name}</h4></a>
        //             <h5>{item.price}</h5>
        //         </div>
        //     </div>
        // );
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
                                                {/* <li class="page-item active"><a class="page-link" href="#">1</a></li> */}
                                                {/* i will add the buttons here  */}
                                                {render_page_numbers}
                                                {/* <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                <li class="page-item blank"><a class="page-link" href="#">...</a></li>
                                                <li class="page-item"><a class="page-link" href="#">6</a></li> */}
                                                <li class="page-item"><a class="page-link" href="#"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div class="latest_product_inner row">
                                    {/* {render_items} */}
                                    {/* {current_items.map((item)=>{
                                    // return <li key={item.index}> {item.id} </li>
                                        
                                        <div key={item.id} id={item.id} value={item.name} class="col-lg-4 col-md-4 col-sm-6">
                                            <div class="f_p_item"  >
                                                <div class="f_p_img">
                                                    <img class="img-fluid" src={item.img} alt="" />
                                                    <div class="p_icon">
                                                        <a href="#"><i class="lnr lnr-heart"></i></a>
                                                        <button class="btn btn-sm" ><i class="lnr lnr-cart"></i></button>
                                                    </div>
                                                </div>
                                                <a href="#"><h4>{item.name}</h4></a>
                                                <h5>{item.price}</h5>
                                            </div>
                                        </div>
                                        );
                                    
                                    })}; */}
                                   {/* //items goes here                                                            */}
                                    {render_items.map(item =>
                                       <div key={item.id} id={item.id} value={item.name} class="col-lg-4 col-md-4 col-sm-6">
                                           <div class="f_p_item"  >
                                               <div class="f_p_img">
                                                   <img class="img-fluid" src={item.img} alt="" />
                                                   <div class="p_icon">
                                                       <a href="#"><i class="lnr lnr-heart"></i></a>
                                                       <button class="btn btn-sm" ><i class="lnr lnr-cart"></i></button>
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
                                                <li><button className="btn btn-block page-link" onClick={this.sort} name="men"> Men </button></li>
                                                <li>
                                                    <button className="btn btn-block page-link" onClick={this.sort} name="women">Women</button>
                                                    
                                                </li>
                                                <li><button className="btn btn-block page-link" onClick={this.sort} name="children">Children</button>
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
                                                        <li><a href="#" >Frozen Fish</a></li>
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
