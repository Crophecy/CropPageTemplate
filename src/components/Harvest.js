import React, { useState } from "react";

import SectionHeaders from "./SectionHeaders";

const Harvest = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="info-container max-w-4xl mx-auto  p-4">
      <div className="text-center p-2">
        {" "}
        <SectionHeaders subHeader="Harvest" mainHeader="Method" />
      </div>

      <div className="sowing-details">
        <div className="time-of-sowing">
          <p className="points">
            Reap the yield once the panicles are developing fully as well as the
            crops get changed significantly yellow. The yield is generally
            harvested manually by sickles or by blend harvester. The harvested
            crops, tied up into compact bundles, strike it against really hard
            surface to split the grains from straw, accompanied by winnowing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Harvest;
