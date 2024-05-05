import React, { useState } from "react";
import SectionHeaders from "./SectionHeaders";

const Sowing = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="info-container max-w-4xl mx-auto p-4">
      <div className="text-center">
        {" "}
        <SectionHeaders subHeader="Information" mainHeader="Sowing" />
      </div>
      <div className="sowing-details">
        <div className="time-of-sowing">
          <p>
            <div className='points'>
              <span className="subheads">Time of Sowing:</span> 20 may to 5 june is the optimum time for sowing 
            </div>
            <div className='points'>
              <span className="subheads">Spacing:</span> For normal sown crop a spacing of 20 - 22.5 cm between rows is recommended. When sowing is delayed a closer spacing of 15-18 cm should be adopted.
            </div>

          </p>
        </div>
        {showMore && (
          <>
            <div>
              <div className='points'>
                <span className="subheads">Method of sowing:</span> Broadcasting method
              </div>
              <div className='points'>
                <span className="subheads">Sowing depth:</span> The seedlings should be transplanted at 2 to 3 cm depth. Shallow planting gives better yields. 
              </div>
              <div className='points'>
                <span className="subheads">PR 113:</span> It is short-statured,
                stiff strewed variety and its leave is erect and dark green in
                color. It matures in 142 days. Grain is bold and heavy. It is
                resistant bacterial leaf blight disease and gives average yield
                of 28 qtl/acre.
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

export default Sowing;