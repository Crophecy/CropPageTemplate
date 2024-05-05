import React, { useState } from "react";

import SectionHeaders from "./SectionHeaders";

const Soil = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="info-container max-w-4xl mx-auto  p-4">
      <div className="text-center p-2">
        {" "}
        <SectionHeaders subHeader="Soil" mainHeader="Details" />
      </div>

      <div className="sowing-details">
        <div className="time-of-sowing">
          <p className="points">
            It can be grown on a variety of soils with low permeability and pH
            varying from 5.0 to 9.5. Sandy loam to loamy sand to silty loam to
            clay loams, silty to clayey loam soils with low permeability, free
            of water logging and sodicity are considered best for paddy
            cultivation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Soil;
