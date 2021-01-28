import React, { useState, useEffect } from "react";
import ListMeds from "comps/ListofMeds";
import MedSpecBanner from "comps/MedSpecBanner";
import Info from "comps/Info";
import Button from "comps/Button";

function ListMed() {
  return (
    <div className="addMed">
      <MedSpecBanner />
      <div className="container">
        <Info title="Reminders" />
        <Info title="Instructions" subtext="Take with food"/>
      </div>
      <div className="bigButton">
        <Button text="Edit" />
        <Button text="Delete Med" bgcolor={"#63AAC8"} />
      </div>
    </div>
  );
}

export default ListMed;
