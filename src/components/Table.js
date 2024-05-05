import React from 'react';

import SectionHeaders from './SectionHeaders';
import { TbTemperatureSun } from "react-icons/tb";
import { IoRainySharp } from "react-icons/io5";
import { PiPlant } from "react-icons/pi";
import { LuWheatOff } from "react-icons/lu";

const Table = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className='text-center'>
        <SectionHeaders subHeader="Our Climate" mainHeader="Weather" />
      </div>
      <div className="table-row">
        <div className="table-cell">
          <div className="icon"><TbTemperatureSun /></div>
          <div className="label">Temperature</div>
          <div className="value">20°C - 25°C</div>
        </div>
        <div className="table-cell">
          <div className="icon"><IoRainySharp /></div>
          <div className="label">Rainfall</div>
          <div className="value">500-700 mm</div>
        </div>
        <div className="table-cell">
          <div className="icon"><PiPlant /></div>
          <div className="label">Sowing Temperature</div>
          <div className="value">20°C - 25°C</div>
        </div>
        <div className="table-cell">
          <div className="icon"><LuWheatOff /></div>
          <div className="label">Harvest Temperature</div>
          <div className="value">35°C - 37°C</div>
        </div>
      </div>
    </div>
  );
};

export default Table;


