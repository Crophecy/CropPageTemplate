import React, { useState } from "react";
import SectionHeaders from "./SectionHeaders";

const Nursery = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="info-container max-w-4xl mx-auto p-4">
      <div className="text-center">
        {" "}
        <SectionHeaders
          subHeader="Nursery"
          mainHeader="Management & Transplanting"
        />
      </div>
      <div className="sowing-details">
        <div className="time-of-sowing">
          <p>
            <div className="points">
              Before sowing, soak them in 10 Ltr water containing,
              Carbendazim@20gm+ Streptocycline@1gm for 8 to 10 hour before
              sowing. After then dry seeds in shade. And then use for sowing.
            </div>
          </p>
        </div>
        {showMore && (
          <>
            <div>
              <div className="points">
                <span className="subheads">Nursery Preparation:</span> 15th to
                30th May is the optimum time for nursery preparation.
              </div>
              <div className="points">
                <span className="subheads">Wet bed nursery:</span> It is done in
                region having adequate water availability. Nursery area is about
                1/10 of the area to be transplanted. Broadcast Pre-germinated
                seeds on puddled and levelled soil. Keep the beds moist for the
                first few days. Do not flood the beds. When the seedlings are
                about 2 cm high, keep the beds submerged in a shallow layer of
                water. Apply dose of 26 kg/acre Urea about a fortnight after
                sowing. For transplantation use seedlings of 15-21 days or when
                seedlings are 25-30 cm long. Regularly irrigated the nursery.
              </div>
              <div className="points">
                <span className="subheads">Dry Bed:</span> It is prepared in dry
                soil condition. Total seed bed area is about 1/10 of the area to
                be transplanted. Make seed bed of convenient dimensions with the
                soil raised at height of 6-10 cm. Spread half burned rice husk
                on these beds for easy uprooting. Irrigation should be done
                properly because less moisture can damage seedling. Incorporate
                basal fertilizer for proper nutrients.
              </div>
              <div className="points">
                <span className="subheads">Modified Mat nursery</span> This is
                the modified method of nursery making which require less space
                and less quantity of seeds. It can be cultivated at any place
                having flat surface and assured water supply. The area needed is
                about 1% of the transplantable land. Establishing seedlings in 4
                cm layer of soil mix, arranged on a firm surface. Make 1 meter
                wide and 20-30 meter long plot and spread plastic sheet or
                banana leaves on it. Place a wooden frame with 4 cm deep and
                then fill the frame with soil mixture. Sow pre-germinated seed
                in it and cover the seed with dry soil. Immediately sprinkle
                water on it. Irrigate frame as and when needed and keep it
                moist. Seedlings are ready for transplanting within 11 to 14
                days of sowing. Transport seedling mat to field and separate
                them and transplant 1-2 seedlings at 20x20 cm or 25x25 cm
                spacing.
              </div>
                <div className="points">
                    <span className="subheads">Depth of planting</span>
                    The seedlings should be transplanted at 2 to 3 cm depth. Shallow planting gives better yields.
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

export default Nursery;
