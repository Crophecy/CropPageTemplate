import React, { useState } from 'react';

import SectionHeaders from "./SectionHeaders";



const Soil = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="info-container max-w-4xl mx-auto  p-4">
        <div className='text-center'> <SectionHeaders subHeader="Sowing" mainHeader="Details" /></div>
     
      <div className="sowing-details">
        <div className="time-of-sowing">
          <h3 className="uppercase text-gray-500 font-semibold">Time of sowing</h3>
          <p>
          It can be grown on wide range of soil from sandy loam to black soils. It gives best result when grown under fertile, well-drained soil. It can tolerate slight alkaline soil. Avoid sowing in acidic also waterlogging soil. Ideal pH is around 6.5-8. Crop rotation follows in Punjab, Rice/Maize - Potato-Sunflower, Rice-Toria-Sunflower, Cotton-sunflower, Sugarcane-sugarcane ratoon-sunflower and kharif-fodder - toria-sunflower.
          </p>
        </div>
        {showMore && (
          <>
            <div className="spacing">
              <h3 className="uppercase text-gray-500 font-semibold">Spacing</h3>
              <p>Use spacing of 60 cm between the rows while keep plant to plant distance of 30 cm.</p>
            </div>
            <div className="sowing-depth">
              <h3 className="uppercase text-gray-500 font-semibold">Sowing Depth</h3>
              <p>Sow the seeds at depth of 4-5 cm.</p>
            </div>
            <div className="method-of-sowing">
              <h3 className="uppercase text-gray-500 font-semibold">Method of sowing</h3>
              <p>
                For sowing dibbling method used. Also placing seeds on flat bed or ridge with help of row crop planter is used for
                sunflower sowing.
              </p>
              <p>
                Use transplanting method in case of delay sowing. 30 sq.m of nursery is suitable for transplanting one acre land. Use
                seed rate of 1.5 kg. Prepared nursery 30 days before transplanting. For preparing seed bed, mix 0.5 kg Urea and 1.5
                kg Single superphosphate. Cover seed bed with transparent polythene sheet and prepared tunnel. Remove
                polythene sheet after seedling emergence. When seedling are at 4 leaf stage, they are ready for transplanting.
                Irrigate nursery before uprooting crop for transplanting.
              </p>
            </div>
          </>
        )}
        <button onClick={toggleShowMore}>{showMore ? 'Show Less' : 'Show More'}</button>
      </div>
    </div>
  );
};

export default Soil;