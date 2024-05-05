import React, { useState } from "react";
import SectionHeaders from "./SectionHeaders";

const Variety = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="info-container max-w-4xl mx-auto p-4">
      <div className="text-center">
        {" "}
        <SectionHeaders subHeader="Crop" mainHeader="Varieties" />
      </div>
      <div className="sowing-details">
        <div className="time-of-sowing">
          <p>
            <div className='points'>
              <span className="subheads">PR 128:</span> PR 128 of rice is an
              improved version of PAU 201. It possesses long slender clear
              translucent grains. Its average plant height is 110 cm and matures
              in about 111 days after transplanting. It is resistant to all the
              10 presently prevalent pathotypes of bacterial blight pathogen in
              the Punjab state. Its average paddy yield is 30.5 quintals per
              acre.
            </div>
          </p>
        </div>
        {showMore && (
          <>
            <div>
              <div className='points'>
                <span className="subheads">PR 129:</span> PR 129 of rice is an
                improved version of PAU 201. It possesses long slender clear
                translucent grains. Its average plant height is 105 cm and
                matures in about 108 days after transplanting. It is resistant
                to all the 10 presently prevalent pathotypes of bacterial
                blight pathogen in the Punjab state. Its average paddy yield is
                30.0 quintals per acre.
              </div>
              <div className='points'>
                <span className="subheads">HR 47:</span> HKR 47 is a mid-early
                maturity variety of rice. It takes 104 days to mature after
                transplanting and its average plant height is 117 cm. It is
                susceptible to all the 10 presently prevalent pathotypes of
                bacterial blight pathogen in Punjab and is prone to lodging. Its
                average yield is 29.5 quintals per acre. It is suitable for
                parboiling.
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

export default Variety;
