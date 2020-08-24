import React from 'react';
import { connect } from "react-redux";
import { addFeature } from "../actions";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
        className="button"
        onClick={ () => {
          props.addFeature(props.feature)
        }}
      >
        Add
      </button>
      <div>
      {props.feature.name} (+{props.feature.price})
      </div>
      
    </li>
  );
};

const mapStateToProps = (state) => {
  return {car: state.car, addtionalFeatures: state.additionalFeatures}
};

export default connect(mapStateToProps, {addFeature})(AdditionalFeature);
