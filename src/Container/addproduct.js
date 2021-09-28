import {Component} from 'react'

import {FaPlusCircle} from 'react-icons/fa'
import axios from 'axios'


class AddProduct extends Component {

    state = {

        productName: "",
        productImage: '',
        productDescription: "",

        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },

        

    }
    fileHandler = (e) => {
        this.setState({
            productImage: e.target.files[0]
        })
    }
        changeHandler = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
    }
    submitDetails = (e) => {
        e.preventDefault(); //prevents from reloading page
        const data = new FormData()
        data.append("productName", this.state.productName)

        data.append("productImage", this.state.productImage)
        data.append("productDescription", this.state.productDescription)

         // prevents from reloading page
        axios.post("http://localhost:90/product/insert", data)
            .then(
                (response) => {
                    console.log(response)
                    alert(response.data.message)
                    window.location.href='/viewproduct'
                }
            )
            .catch(
                (err) => {
                    alert(err)
                }
            )

    }




    render() {
        if (localStorage.getItem('token') && localStorage.getItem('userType') === 'Admin') {

            var addproduct =
            
                <div className="container-fluid">
                    <div className="row">
                        
                        <div className="col">
                            <div className="card" style={{marginTop:'10px', marginBottom:'10px'}}>

                                <div className="card-body">
                                    <h2 className="card-title">Please fill your product details here</h2>

                                    <form>
                                        <div className="form-group">
                                            <label>Module Name</label>
                                            <input type="text" className="form-control" name="productName" value={this.state.productName} onChange={this.changeHandler} required />

                                        </div>

                                       

                                        <div className="form-group">
                                            <label for="img">Module Image</label>
                                            <input type="file" name="productImage" className="form-control" onChange={this.fileHandler} accept="image/*" required />

                                        </div>

                                        <div className="form-group">
                                            <label>Module Description</label>
                                            <input type="text" className="form-control" name="productDescription" value={this.state.productDescription} onChange={this.changeHandler} required />

                                        </div>
 
                                        <button type="submit" onClick={this.submitDetails} className="btn btn-primary"><FaPlusCircle/> Add Product</button>
                                    </form>



                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            
        }

        return (
            
<div>{addproduct}</div>

        )
    }
}
export default AddProduct


















