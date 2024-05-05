import React, { useState } from "react";

import SectionHeaders from "./SectionHeaders";

const PostHarvest = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="info-container max-w-4xl mx-auto  p-4">
      <div className="text-center p-2">
        {" "}
        <SectionHeaders subHeader="PostHarvest" mainHeader="Details" />
      </div>

      <div className="sowing-details">
        <div className="time-of-sowing">
          <p className="points">
            The post-harvest method includes some procedures which include the
            interval from harvest to utilization 1) harvesting 2) threshing 3)
            cleaning 4) drying 5) warehouse 6) milling then transport to the
            trade. 
            <br />
            Before the storage of grains to protect harvested stuff from
            pest and disease attack, mix 500 gm Neem seed dust with 10 Kg of
            seed. To protect stored grains from pests attacked Mix Malathion 50
            EC@30 ml/3 Ltr of water. Spray for 1002meter storage area at every
            15 days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostHarvest;
