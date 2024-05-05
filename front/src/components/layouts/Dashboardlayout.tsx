import { Fragment } from "react/jsx-runtime";
import { children } from "../../utils/interfaces";
import DashboardNav from "../navbar/DashboardNav";

const Dashboardlayout = ({ children }: children): JSX.Element => {
  return (
    <Fragment>
      <DashboardNav />
      {children}
    </Fragment>
  );
};

export default Dashboardlayout;
