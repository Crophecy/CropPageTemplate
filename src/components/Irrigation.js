import React, { useState } from "react";

import SectionHeaders from "./SectionHeaders";

const Irrigation = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="info-container max-w-4xl mx-auto  p-4">
      <div className="text-center p-2">
        {" "}
        <SectionHeaders subHeader="Irrigation" mainHeader="Details" />
      </div>

      <div className="sowing-details">
        <div className="time-of-sowing">
          <p className="points">
            Keep field flooded up to two weeks after transplanting. When all
            water gets infiltrated two day after apply irrigation in field.
            Depth of standing water should not exceed 10 cm. While doing
            intercultural and weeding operation, drain out excess water from
            field and irrigate field after completion of this operations. Stop
            irrigation about a fortnight before maturity to facilitate easy
            harvesting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Irrigation;
