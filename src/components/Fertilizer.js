import React, { useState } from "react";
import SectionHeaders from "./SectionHeaders";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Fertilizer = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const rows = [
    { name: "Urea", quantity: 110 },
    { name: "DAP", quantity: 27 },
    { name: "SSP", quantity: 75 },
    { name: "MOP", quantity: 20 },
    { name: "ZINC", quantity: "-" },
  ];

  const rows1 = [
    { name: "Nitrogen", quantity: 110 },
    { name: "PHOSPHORUS", quantity: 27 },
    { name: "POTASH", quantity: 75 },
  ];

  return (
    <div className="info-container max-w-4xl mx-auto p-4">
      <div className="text-center">
        {" "}
        <SectionHeaders subHeader="Usage" mainHeader="Fertilizer" />
      </div>
      <div className="sowing-details">
        <div className="time-of-sowing">
          <p>
            <div className="points">
              <span className="subheads">Fertilizer Requirement (kg/acre)</span>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {rows.map((row) => (
                        <TableCell align="center">{row.name}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      {rows.map((row) => (
                        <TableCell align="center">{row.quantity}</TableCell>
                      ))}
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </p>
        </div>
        {showMore && (
          <>
            <div>
              <div className="points">
                <span className="subheads">Nutrient Requirement (kg/acre)</span>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        {rows1.map((row) => (
                          <TableCell align="center">{row.name}</TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        {rows1.map((row) => (
                          <TableCell align="center">{row.quantity}</TableCell>
                        ))}
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <div className="points">
                For paddy apply N:P:K@50:12:12 kg/acre in form of Urea @110
                kg/acre, SSP@75 kg/acre and MOP@20 kg/acre. Before fertilizer
                application, carried out soil test and apply fertilizer on the
                basis of soil test result. Apply P and K dose if soil test show
                deficiency of it. If DAP is to be used, apply Urea@100 kg/acre,
                DAP@27 kg/acre and MOP@20 kg/acre Apply 1/3rd dose of Nitrogen
                and whole dose of P and K before last puddling.
              </div>
              <br />{" "}
              <div className="points">
                Apply second dose three week after transplanting and three weeks
                after 2nd dose, apply remaining dose of Nitrogen. Use neem
                coated Urea as it will increased uptake of N. Apply Zinc
                sulphate heptahydrate@25 kg or zinc sulphate monohydrate@16
                kg/acre at puddling to overcome zinc deficiency. Due to water
                scarcity, young leaves give yellow or yellow white appearance
                about three week after transplanting. Apply irrigation
                immediately also spray with ferrous sulphate@1 kg/100 ltr water
                per acre, two-three time with weekly intervals.
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

export default Fertilizer;
