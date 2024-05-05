import DashboardHeader from "../components/headers/DashboardHeader";
import Dashboardlayout from "../components/layouts/Dashboardlayout";
import DashboardFirst from "../components/sections/dashboard/DashboardFirst";

const DashboardHome = (): JSX.Element => {
  return (
    <section className="dashboard__home">
      <Dashboardlayout>
        <div className="home-content">
          <DashboardHeader />
          <DashboardFirst />
        </div>
      </Dashboardlayout>
    </section>
  );
};

export default DashboardHome;
