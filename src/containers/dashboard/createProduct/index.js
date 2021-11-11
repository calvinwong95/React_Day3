import React from 'react';
import {products} from "../../../productData";
import './createproduct.module.css';

 class CreateProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            name:'',
            description: '',
            cost: 0,
        }
    }

    submitForm() {

        if (this.state.id === "" || this.state.name === "" || this.state.description === "" || this.state.cost ==="") {
            alert("All Fields Must Be Filled Up");
            return;
        }
       
        for(var i = 0; i < products.length ; i++) {
            if (this.state.id === products[i].id) {  
                alert("Product has already exists");
            return;
            }
           
        }


        products.push(this.state);
        console.log("Products",products);

        this.id = "";
        this.name = "";
        this.description = "";
        this.cost = "";

        
        

       
    }

    

    render() {
        return (

            <form action="#">
                <label htmlFor='id'>ID</label>
                <input  id="id" type="text"  
                onChange={(idval)=>{
                    this.setState({id: idval.target.value});
                    }}></input>

                <label htmlFor="name">Name</label>
                <input  id="name" type="text" 
                onChange={(nameval)=>{
                    this.setState({name: nameval.target.value});
                }}></input>

                <label  htmlFor="desc">Description</label>
                <input  id="desc" type="text" 
                onChange={(descvalue)=>{
                    this.setState({description: descvalue.target.value});
                }}></input>

                <label htmlFor="cost">Cost</label>
                <input  id="cost" type="text" 
                onChange={(costval)=>{
                    this.setState({cost: costval.target.value})
                }}></input>

                <button onClick={()=>{this.submitForm()}}>Submit</button>
            </form>
        )
    }
}

export default CreateProduct;
