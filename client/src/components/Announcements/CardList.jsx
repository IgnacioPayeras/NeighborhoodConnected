import React, { useState, useEffect } from "react";
import Card from "./Card";
import { getAllAnnouncements } from "../../api/announcements.api.js";

const CardList = (props) => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    async function loadAnnouncements() {
      const response = await getAllAnnouncements();
      setAnnouncements(response.data);
    }

    loadAnnouncements();
  }, []);
  const searchValue = props.searchValue;
  const searchFilteredArray = announcements.filter(announcement => {
    return announcement.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div className="lg:grid grid-cols-2 gap-3 xl:grid-cols-3">
      {searchFilteredArray.map((announcement) => (
        <Card
          key={announcement.id}
          id={announcement.id}
          title={announcement.title}
          description={announcement.content}
          account={announcement.id_account}
        />
      ))}
    </div>
  );
};

export default CardList;
