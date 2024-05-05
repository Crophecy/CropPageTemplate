import React, { useState } from "react";
import SectionHeaders from "./SectionHeaders";

const Weed = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="info-container max-w-4xl mx-auto p-4">
      <div className="text-center">
        {" "}
        <SectionHeaders subHeader="Weed" mainHeader="Control" />
      </div>
      <div className="sowing-details">
        <div className="time-of-sowing">
          <p>
            <div className='points'>
            Use Butachlor 50 EC @ 1200 ml/acre or Thiobencarb 50 EC @ 1200 ml or Pendimethalin 30 EC @ 1000 ml or Pretilachlor 50 EC @ 600 ml per acre as pre-emergence herbicides, 2 to 3 days after transplanting. Mix any one of these herbicides in 60 kg of sand per acre and broadcast uniformly in 4-5 cm deep standing water.
            </div>
          </p>
        </div>
        {showMore && (
          <>
            <div>
              <div className='points'>
              For broadleaf weed control, apply Metsulfuron 20 WP @ 30 gm/acre in 150 Ltr water as post emergence, 20-25 days after transplanting. Before spray, drained out the standing water from the field and apply irrigation one day after spray.
              </div>
            </div>
          </>
        )}
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded"
            onClick={toggleShowMore}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Weed;
