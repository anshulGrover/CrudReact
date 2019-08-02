import React, { Component } from 'react';
import Classes from './App.css';

import Products from "../Component/Products/Products" 
import AddProduct from '../Component/AddProduct/AddProduct';
import Cart from "../Component/Cart/Cart"

class App extends Component {
  state={
    products:[
      {id:"01",title:"soap",details:"soapDetails",stock:"80",status:"available"},
      {id:"02",title:"fan",details:"fansoapDetails",stock:"60",status:"available"},
      {id:"03",title:"laptop",details:"laptopDetails",stock:"20",status:"available"},
      {id:"04",title:"phone",details:"phoneDetails",stock:"30",status:"available"}
    ],
    showAddForm:false,
    showUpdateForm:false,
    showCart:false,
    productIndex:null,
    cartProducts:[]
  }
  deleteProductHandler=(productIndex)=>{
    const products=[...this.state.products];
    products.splice(productIndex,1);
    this.setState({products:products});
  }
  toggleAddFormHandler=()=>{
    console.log("Toggle CLicked");
    
    const doesShow=this.state.showAddForm;
    this.setState({showAddForm:!doesShow});
  }
  toggleUpdateFormHandler=(index)=>{
    console.log("update Toggle CLicked");
    
    const doesShow=this.state.showUpdateForm;
    this.setState({showUpdateForm:!doesShow});
    this.setState({productIndex:index})
  }
  toggleCartHandler=()=>{
    const doesShow=this.state.showCart;
    this.setState({showCart:!doesShow});
  }
  addProductHandler=(product)=>{
    const products=[...this.state.products];
    products.push(product);
    this.setState({products:products});
    this.toggleAddFormHandler();
    
  }
  updateProductHandler=(product)=>{
    console.log("Updated");
    console.log(product);
    const products=this.state.products;
    const productIndex=products.findIndex(p=>{
      return p.id===product.id
    })
    products.splice(productIndex,1);
    products.push(product);
    this.setState({products:products})
    this.toggleUpdateFormHandler();
    
  }
  
  addToCartHandler=(elem,productIndex)=>{
    const cartProducts=[...this.state.cartProducts];
    cartProducts.push(elem);
    this.setState({cartProducts:cartProducts});
  }
  deleteCartHandler=(index)=>{
    console.log("DeletedFromCart"); 
    const cartProducts=[...this.state.cartProducts];
    cartProducts.splice(index,1);
    this.setState({cartProducts:cartProducts});
  }
  render() {
    return (
      <div className={Classes.App}>
        <h1>Crud Operations</h1>
        <button onClick={this.toggleAddFormHandler} className={Classes.Green}>Add Product</button>
        <button onClick={this.toggleCartHandler} className={Classes.Cart}>Cart</button>
        
        {this.state.showAddForm?<AddProduct
        btnName="Add!"
        added={this.addProductHandler}/>:null}

        <Products products={this.state.products}
        deleted={this.deleteProductHandler}
        updated={this.toggleUpdateFormHandler}
        addToCart={this.addToCartHandler}/>
        
        {this.state.showUpdateForm?<AddProduct
        btnName="Update!"
        product={this.state.products[this.state.productIndex]}
        added={this.updateProductHandler}/>:null}
        
        {this.state.showCart?<Cart
        products={this.state.cartProducts}
        deleteCart={this.deleteCartHandler}/>:null}
      </div>
    );
  }
}

export default App;
