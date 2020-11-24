import * as React from "react";
import { useEffect } from "react";
import ConstituentApiClient from "../../api";
import { Constituent } from "../../types";
import { IndividualConstituent } from "../individualConstituent";
import "./style.scss";

export const ConstituentList: React.FC = () => {
  const [constituents, setConstituents] = React.useState<Constituent[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await ConstituentApiClient.getAllConstituents();
      setConstituents(result);
    };
    fetchData();
  }, []);

  return (
    <div className="constituent-list__root">
      <h1>All constituents</h1>
      <div className="constituent-list__table">
        {constituents.map((constituent: Constituent) => {
          return (
            <IndividualConstituent
              key={constituent.email}
              email={constituent.email}
              firstName={constituent.firstName}
              lastName={constituent.lastName}
              zipCode={constituent.zipCode}
            />
          );
        })}
      </div>
    </div>
  );
};
