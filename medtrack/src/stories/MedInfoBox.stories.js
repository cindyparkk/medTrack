import React from "react";
import MedInfoBox from "../comps/MedInfoBox";
import MarkMeds from "../comps/MarkMeds";
import Reminder from "../comps/Reminder";
import MedInfo from "../comps/ListofMeds";
import Info from "../comps/Info";

export default {
  title: "medTrack/MedInfo",
  component: MedInfoBox,
};

export const HomeInfoBox = () => <MedInfoBox />;
export const MarkMedsBox = () => <MarkMeds />;
export const ReminderBox = () => <Reminder />;
export const MedInfo14 = () => <MedInfo />;
export const MedInfo16 = () => (
  <Info leftimgurl={"/stopwatch.png"} rightimgurl={"/right.png"} />
);
