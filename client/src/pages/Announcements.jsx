import React, { useState, useEffect } from "react";
import Search from "../components/UI/Search";
import Button from "../components/UI/Button";
import CardList from "../components/Announcements/CardList";

export const Announcements = () => {
  const [searchValue, setSearchValue] = useState("");
  
  return (
    <div className="px-10 mt-10">
      <h1>Announcements</h1>
      <h3>
        All the ads that have been published.
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
          link="/announcements/create_announcement"
        />
      </div>
      <CardList searchValue={searchValue}/>
    </div>
  );
};
