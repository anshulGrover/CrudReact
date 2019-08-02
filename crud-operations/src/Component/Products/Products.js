import React,{Component} from "react";
import Product from "./Product/Product"
class Products extends Component{
    render(){
        return this.props.products.map((elem,index) => {
            return(
                <Product
                title={elem.title}
                details={elem.details}
                stock={elem.stock}
                key={elem.id}
                delete={()=>this.props.deleted(index)}
                update={()=>this.props.updated(index)}
                cart={()=>this.props.addToCart(elem,index)}
                status={elem.status}/>
            )
        })
    }
}
export default Products;