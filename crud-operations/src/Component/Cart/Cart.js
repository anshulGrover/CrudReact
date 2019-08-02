import React,{Component} from "react";
import Classes from "../Cart/Cart.css"
import withClass from "../../hoc/withClass"
import Aux from "../../hoc/Aux"
import ProductInCart from "./productInCart";
class Cart extends Component{
    state={
        cartProducts:[]
    }
    render(){
        return(
            <Aux>
            <h1>Cart</h1>
            {this.props.products.map((elem,index) => {
                return <ProductInCart
                title={elem.title}
                details={elem.details}
                key={elem.id}
                removeCart={()=>{this.props.deleteCart(index)}}
                />
            })}
            </Aux>
        )
    }
}
export default withClass(Cart,Classes.Cart);