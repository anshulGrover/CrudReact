import React,{Component} from "react";
import Classes from "./Product.css";
import Aux from "../../../hoc/Aux"
import withClass from "../../../hoc/withClass"
class Product extends Component{
    render(){
        return(<Aux>
            <h2>{this.props.title}</h2>
            <p>Details : {this.props.details}</p>
            <p>Stock: {this.props.stock}</p>
            <p>Status : {this.props.status}</p>
            <button onClick={this.props.delete} className={Classes.red}>Delete</button>
            <button onClick={this.props.update} className={Classes.update}>Update</button>
            <button onClick={this.props.cart} className={Classes.cart}>Add to cart</button>
            </Aux>
        )
    }
}
export default withClass(Product,Classes.Product);