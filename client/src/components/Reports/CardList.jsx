import React, { useState, useEffect } from "react";
import Card from "../Reports/Card";
import { getAllReports } from "../../api/reports.api.js";
const CardList = (props) => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    async function loadReports() {
      const response = await getAllReports();
      setReports(response.data);
    }

    loadReports();
  }, []);

  const searchValue = props.searchValue;
  const searchFilteredArray = reports.filter(report => {
    return report.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div className="lg:grid grid-cols-2 gap-3 xl:grid-cols-3">
      {searchFilteredArray.map((report) => (
        <Card
          key={report.id}
          id={report.id}
          title={report.title}
          description={report.description}
        />
      ))}
    </div>
  );
};

export default CardList;
