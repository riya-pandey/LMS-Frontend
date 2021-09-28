import { Component } from 'react';

import axios from 'axios'
import { Link } from 'react-router-dom'
import { FaRegTrashAlt, FaFileSignature } from 'react-icons/fa'
import {Tab, Tabs} from 'react-bootstrap'


class Dashboard extends Component {

    state =
        {
            items: []
        }
    //load initially with the load of webpage
    componentDidMount() {
        axios.get('http://localhost:90/product/all')
            .then((alldata) => {
                console.log(alldata)
                this.setState({
                    items: alldata.data.productData
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    btnaddCart = (id) => {
        //prevents from reloading page
        const data = new FormData()
        data.append("productName", this.state.productName)
        data.append("productImage", this.state.productImage)
        data.append("consumerID", this.state.consumerID)


        // prevents from reloading page
        axios.post("http://localhost:90/addtocart/insert/" + id, data, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(
            (response) => {
                console.log(response)
                alert(response.data.message)
                window.location.href = '/mycart'
            }
        )
            .catch(
                (err) => {
                    alert(err)
                }
            )

    }

    deleteProduct = (id) => {
        axios.delete("http://localhost:90/product/delete/" + id)
            .then((response) => {
                console.log(response)
                alert(response.data.message)
                window.location.reload()

            })
            .catch((error) => {
                console.log(error.response)
            })
    }
    render() {
        if (localStorage.getItem('token') && localStorage.getItem('userType') === 'Admin') {

            var subscribe =

                <div className="container">
                    <div className="row">


                        {
                            this.state.items.map((item) => {
                                return (

                                    

                                    <div className="card" style={{ width: '30rem', height: 'auto', marginLeft: '18px', marginTop: '10px', marginBottom: '10px' }}>
                                        <h5 className="card-header" style={{ backgroundColor: 'lightgrey', color: 'black' }}> <b>{item.productName}</b></h5>
                                        <div className="card-body">
                                            <img className="card-img-top img-fluid" src={"http://localhost:90/" + item.productImage.replace("\\", "/")} alt="image" style={{ width: 'auto', height: '150px' }} /><br />

                                            <label><b>Description: </b> </label> {item.productDescription} <br />

                                            <Link to={'/updateproduct/' + item._id}><button type="button" className="btn btn-success btn-sm"><FaFileSignature /></button></Link>
                                            <button type="button" className="btn btn-danger btn-sm" onClick={this.deleteProduct.bind(this, item._id)}><FaRegTrashAlt /></button>
                                        </div>
                                    </div>




                                )
                            })
                        }

                    </div>
                </div>


        }
        return (

            <div>
                <div className="container-fluid" style={{ outline: '0.5px solid gray', marginTop: '15px', marginBottom:'60px' }}>
              <h3> Welcome</h3> <p>{localStorage.getItem('fullname')}</p>
             
              <button type="button" class="btn btn-primary">Customize this page</button>
 

                </div>
               
               
            
                <div className="container-fluid" style={{ outline: '1px solid black', marginTop: '15px', marginBottom:'10px' }}>
                   <h2>Courses Overview</h2>
                   <div style={{ outline: '0.5px solid grey'}}>
                    <Tabs
                        defaultActiveKey="home"
                        transition={false}
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="In progress" title="In progress">
                        {subscribe}
                        </Tab>
                        <Tab eventKey="Future" title="Future">
                       No content to show.
                        </Tab>
                        <Tab eventKey="Past" title="Past" >
                        No content to show.
                        </Tab>
                    </Tabs>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Dashboard;