import * as React from "react";
import { ChangeEvent, useEffect } from "react";
import ConstituentApiClient from "../../api";
import { Constituent } from "../../types";
import { IndividualConstituent } from "../individualConstituent";
import "./style.scss";

export const ConstituentSearch: React.FC = () => {
  const [constituents, setConstituents] = React.useState<Constituent[]>([]);
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await ConstituentApiClient.searchConstituents(searchQuery);
      setConstituents(result);
    };
    fetchData();
  }, [searchQuery]);

  const setSearchQueryFromEvent = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="constituent-search__root">
      <h1>Search constituents by email</h1>
      <div>
        
          <label>
            Email:
            <input type="text" value={searchQuery} onChange={setSearchQueryFromEvent}  />
          </label>
          <input type="submit" value="Submit" />
        
      </div>
      <div className="constituent-search__table">
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
