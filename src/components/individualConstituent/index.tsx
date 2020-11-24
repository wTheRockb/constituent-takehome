import * as React from "react";
import { Constituent } from "../../types";
import "./style.scss";

export const IndividualConstituent: React.FC<Constituent> = (props) => {
  return (
    <div className="individual-constituent__root">
      Constituent:
      <div className="individual-constituent__email">
        <span className="individual-constituent__label">
            email: </span>
        <span className="individual-constituent__value">
            {props.email}</span>
      </div>
      <div className="individual-constituent__firstName">
        <span className="individual-constituent__label">
            firstName: </span>
        <span className="individual-constituent__value">
            {props.firstName}</span>
      </div>
      <div className="individual-constituent__lastName">
        <span className="individual-constituent__label">
            lastName: </span>
        <span className="individual-constituent__value">
            {props.lastName}</span>
      </div>
      <div className="individual-constituent__zipCode">
        <span className="individual-constituent__label">
            zipCode: </span>
        <span className="individual-constituent__value">
            {props.zipCode}</span>
      </div>
    </div>
  );
};
