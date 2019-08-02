import React,{Component} from "react";
import Classes from "./AddProduct.css";
import Aux from "../../hoc/Aux"
import withClass from "../../hoc/withClass"
class AddProduct extends Component{
    constructor(props){
        super(props);
        if(props.btnName==="Add!"){
            this.state={

                title:"",
                id:"",
                details:"",
                stock:"",
                status:""
            }
        }
        else{
            this.state={

                title:this.props.product.title,
                id:this.props.product.id,
                details:this.props.product.details,
                stock:this.props.product.stock,
                status:this.props.product.status
            }
        }

    }
    
    
    
    handleChange=({target})=>{
        this.setState({
            [target.name]:target.value
        })
    }
    render(){
        return(
            <Aux>
                {this.props.btnName==="Add!"?<input type="text" name="id" placeholder="id" value={this.state.id} onChange={this.handleChange}/>:<input type="text" name="id" placeholder="id" value={this.state.id} onChange={this.handleChange} disabled/>}
                <input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.handleChange}/>
                <input type="text" name="details" placeholder="details" value={this.state.details}onChange={this.handleChange}/>
                <input type="text" name="stock" placeholder="stock" value={this.state.stock}onChange={this.handleChange}/>
                <input type="text" name="status" placeholder="status" value={this.state.status}onChange={this.handleChange}/>
                <button onClick={()=>this.props.added(this.state)}>{this.props.btnName}</button>
            </Aux>
        )
    }
}
export default withClass(AddProduct,Classes.AddProduct);

//<input type="text" name="id" placeholder="id" value={this.state.id} onChange={this.handleChange}/>