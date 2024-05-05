/* eslint-disable react-refresh/only-export-components */
import { NavProvider } from "../../hooks/useNav";
import { children } from "../../utils/interfaces";
import ProviderComposer from "../composer/ProviderComposer";

export type ProviderType<P> = [React.ComponentType<P>, P];

export const provider = <P extends object>(
  Provider: React.ComponentType<P>,
  props: P
): ProviderType<P> => [Provider, props];

const AppLayout = ({ children }: children): JSX.Element => {
  return (
    <ProviderComposer providers={[provider(NavProvider, {})]}>
      {children}
    </ProviderComposer>
  );
};

export default AppLayout;
