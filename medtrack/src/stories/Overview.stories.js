import React from "react";
import MedInfoBox from "../comps/MedInfoBox";
import MarkMeds from "../comps/MarkMeds";
import Reminder from "../comps/Reminder";
import MedInfo from "../comps/ListofMeds";
import Info from "../comps/Info";
import OverviewLine from '../comps/OverviewLine';
import OverviewTime from "../comps/OverviewTime";
import OverviewOften from '../comps/OverviewOften';

export default {
  title: "medTrack/OverviewLine",
  component: OverviewLine,
};

export const OverviewList = () => <OverviewLine />;
export const OverviewTimeList = () => <OverviewTime />;
export const OverviewOftenList = () => <OverviewOften />;


