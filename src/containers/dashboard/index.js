import React from 'react';
import {products} from '../../productData';
import CarList from '../../components/carlist';
import {Link} from "react-router-dom";






class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = { 
            search: ''
        }
    }

    updateSearch(event) {
        this.setState({search:event.target.value});
    }

    
    
    render() {

        let filterName = products.filter(
            (list) => {
                return list.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        

        return (
            <>
            <div>
                <h1>Car catalog</h1>
                <Link to="/create">Create New Product</Link>

                <form action="#">
                <input type="text" value={this.state.search}
                onChange={this.updateSearch.bind(this)}
                placeholder="Search for keyword"></input>

                </form>

            </div>
            <div>
                {filterName.map((list) => <CarList
                carData={list}
                link={list.id}
                name={list.name} 
                cost={list.cost} 
                short_description={list.short_description}
                image={list.image}
                />)};

                {/* {filterName.map((list) => <CarList carData={list} link={list.id} name={list.name} />)}; */}
            </div>
            </>
        )
    }
}

export default Dashboard;
