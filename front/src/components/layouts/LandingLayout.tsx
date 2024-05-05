import { Fragment } from "react/jsx-runtime";
import { children } from "../../utils/interfaces";
import LandingNavbar from "../navbar/LandingNavbar";

const LandingLayout = ({ children }: children) => {
  return (
    <Fragment>
      <LandingNavbar />
      {children}
    </Fragment>
  );
};

export default LandingLayout;
