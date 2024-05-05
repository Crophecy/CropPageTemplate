import React, { useState } from "react";

import SectionHeaders from "./SectionHeaders";

const Land = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="info-container max-w-4xl mx-auto  p-4">
      <div className="text-center p-2">
        {" "}
        <SectionHeaders subHeader="Land" mainHeader="Preparation" />
      </div>

      <div className="">
        <div className="">
          <p className="points">
            After harvesting of wheat grow dhaincha (seed rate 20 kg/acre) or
            sunhemp @ 20 kg/acre or cowpea @ 12 kg/acre up to first week of May.
            When crop is of 6-8 week old, bury them into the soil one day before
            transplanting of paddy. It will save 25 kg of N per acre. Use laser
            land leveler for land levelling. After then puddle soil and to
            obtained fine well levelled puddle field to reduce water loss
            through percolation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Land;
