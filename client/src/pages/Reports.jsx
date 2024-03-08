import React, { useState } from "react";
import Search from "../components/UI/Search";
import Button from "../components/UI/Button";
import CardList from "../components/Reports/CardList";

export const Reports = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="px-10 mt-10">
      <h1>Reports</h1>
      <h3>
      You can report infrastructure and maintenance problems in the neighborhood.
      </h3>
      <div className="xl:flex">
        <Search
          classNameContainer="w-full mr-2 mb-2 xl:w-11/12"
          className="w-full pl-10"
          placeholder="Search"
          onChangeValue={(event) => {
            setSearchValue(event.target.value);
          }}
        />
        <Button
          name="+ Create"
          type="primary"
          color="purple"
          className="w-fit h-fit"
          link="/reports/create_report"
        />
      </div>
      <CardList searchValue={searchValue}/>
    </div>
  );
};
