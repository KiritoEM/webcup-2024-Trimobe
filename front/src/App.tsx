import AppLayout from "./components/layouts/AppLayout";
import AppRoutes from "./routes/AppRoutes";
import "./configs/i18nConfig";

const App = (): JSX.Element => {
  return (
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  );
};

export default App;
