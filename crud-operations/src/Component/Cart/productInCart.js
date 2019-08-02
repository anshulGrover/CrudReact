import React,{Component} from "react";
import withClass from "../../hoc/withClass"
import Aux from "../../hoc/Aux"
import Classes from "../Cart/productInCart.css"
class ProductsInCart extends Component{
    render(){
        return(
            <Aux>
                <h4>{this.props.title}</h4>
                <p>{this.props.details}</p>
                <button onClick={this.props.removeCart} >X</button>
            </Aux>
        );
    }
}
export default withClass(ProductsInCart,Classes.productInCart);