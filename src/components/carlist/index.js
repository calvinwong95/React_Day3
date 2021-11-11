import React from 'react';
import classes from "./carlist.module.css";
import {Link} from 'react-router-dom';


class CarList extends React.Component {
    render() {
        return (
            <>
            <div className={classes.car_list_holder}>
            <div className={classes.car_img}>
                <img src={this.props.image} alt="" />
            </div>
            <div>
            <p>{this.props.name}</p>
            <button>
                {/* <Link to={`/dashboard/${this.props.link}`}>{this.props.cost}</Link> */}
                <Link to={{
                    pathname:`/dashboard/${this.props.link}`,
                    state: this.props.carData
                }}>{this.props.cost}</Link>
            </button>
            <p>{this.props.short_description}</p>
            </div>
            </div>
            <div className={classes.border}></div>
            </>
        )
    }
}

export default CarList;
