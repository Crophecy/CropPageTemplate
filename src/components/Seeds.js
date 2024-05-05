import React, { useState } from "react";
import SectionHeaders from "./SectionHeaders";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, quantity) {
  return { name, quantity};
}

const rows = [
  createData("Trichoderma","5-10 gm"),
  createData("Chlorpyriphos","5 ml"),
  
];

const Seeds = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="info-container max-w-4xl mx-auto p-4">
      <div className="text-center">
        {" "}
        <SectionHeaders subHeader="Seed" mainHeader="Information" />
      </div>
      <div className="sowing-details">
        <div className="time-of-sowing">
          <p>
            <div className="points">
              <span className="subheads">Seed Rate</span> 8kg seeds are
              sufficient for planting in one acre land.
            </div>
            <div className="points">
              <span className="subheads">Seed Preparation</span> Before sowing,
              soak them in 10 Ltr water containing, Carbendazim@20gm+
              Streptocycline@1gm for 8 to 10 hour before sowing. After then dry
              seeds in shade. And then use for sowing.
            </div>
          </p>
        </div>
        {showMore && (
          <>
            <div>
              <div className="points">
                Also you can use below mention fungicides to protect crop from
                root rot disease. Use chemical fungicides first then treat seed
                with Trichoderma.
                <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell align="center">Fungicide/Insecticide name</TableCell>
                <TableCell align="center">Quantity (Dosage per kg of seeds)</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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

export default Seeds;
