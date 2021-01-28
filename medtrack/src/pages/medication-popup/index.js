import React, { useState, useEffect } from "react";
import Button from "comps/Button";
import BannerCancel from "comps/BannerCancel";
import Info from "comps/Info";

function MedicationPop() {
  return (
    <div className="addMed">
      <BannerCancel />
      <div className="container">
        <Info
          leftimgurl={"/file-text.png"}
          rightimgurl={""}
          title="Donepezil"
        />
      </div>
      <h6 className="addMed_title">med info</h6>
      <div>
        <Info leftimgurl={"/symptom-blu.png"} />
        <Info leftimgurl={"/pill-blu.png"} />
        <Info leftimgurl={"/calandarcheck.png"} />
        <Info leftimgurl={"/food.png"} />
        <Info leftimgurl={"/time-blu.png"} />
        <Info leftimgurl={"/appearance.png"} />
      </div>
      <div className="bigButton">
        <Button text="Update" />
      </div>
    </div>
  );
}

export default MedicationPop;
