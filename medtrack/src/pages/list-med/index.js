import React, { useState, useEffect } from "react";
import BannerTime from "comps/BannerTime";
import ListMeds from "comps/ListofMeds";

function ListMed() {
  return (
    <div className="addMed">
      <BannerTime />
      <h6 className="addMed_title">Currently Taking</h6>
      <div>
        <ListMeds />
        <ListMeds />
        <ListMeds />
      </div>
    </div>
  );
}

export default ListMed;
