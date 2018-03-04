import React, { Component } from "react";
import "./SearchListingsPage.css";
import api from "../../api";
import listings from "./listings.json";
import { connect } from "react-redux";
import house from "../../assets/img/house-stock.jpg";
/* <------------ACTIONS------------> */
import { loading } from "../../actions/app";

class SearchListingsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: { item: [] }
    };
  }

  componentDidMount = () => {
    this.props.loading(true);
    api.listings.getListings().then(res => {
      this.setState({ listings: res.data }, () => {
        this.props.loading(false);
      });
      console.log(res.data);
    });
  };

  render() {
    console.log(listings);
    let listingsJSX = this.state.listings.item.map((e, i, a) => {
      return (
        <div className="SLP-Result">
          <img className="SLP-Image" src={house} />
          <h4>{e.PropertyDetails.Address.AddressLine1}</h4>
          <p>{"Total Bedrooms: " + e.PropertyDetails.Building.BedroomsTotal}</p>
          <p>
            {"Total Bathrooms: " + e.PropertyDetails.Building.BathroomTotal}
          </p>
        </div>
      );
    });
    return (
      <div className="Page-Wrapper">
        <div className="SLP-Results-Wrapper">{listingsJSX}</div>
      </div>
    );
  }
}

export default connect(null, { loading })(SearchListingsPage);
