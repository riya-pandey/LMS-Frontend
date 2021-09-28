import { Component } from "react";
import axios from 'axios'
class UpdateProduct extends Component {
    state = {
        productName: "",
        productDescription: "",

        id: this.props.match.params.id     
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    componentDidMount() {  
        
        axios.get("http://localhost:90/product/single/" + this.state.id)
            .then((response) => {
                
                console.log(response.data)
                this.setState({
                    productName: response.data.data.productName,
                    productDescription: response.data.data.productDescription,
                    
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    UpdateProduct = (e) => {    
        e.preventDefault();
        axios.put('http://localhost:90/product/update/' + this.state.id, this.state)
            .then((response) => {
                console.log(response)
               alert(response.data.message)  
               window.location.href="/viewproduct"        
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    render() {
        return (
            <form className="pt-7 mb-4 ml-4 shadow" style={{border:'none', borderRadius:'10px', width:'300px', height:'450px'}}>
                <div className="update pt-2 mt-5 mb-3 ml-4">
  <label for="productName"> Name:</label>
  <input type="text" id="fname" value={this.state.productName} onChange={this.changeHandler} name="productName" /><br/>
  <label for="lname">Description:</label>
  <input type="text" id="lname" name="productDescription" value={this.state.productDescription} onChange={this.changeHandler}/><br/>
<br/>
  <button type="submit" name="UpdateProduct" className="btn btn-primary" onClick={this.UpdateProduct}>Update Product</button>
  </div>
</form>

            
        )
    }
}
export default UpdateProduct;