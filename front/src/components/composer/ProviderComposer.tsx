/* eslint-disable @typescript-eslint/no-explicit-any */
type ProviderType<P> = [React.ComponentType<P>, P];

type ProvidersType = Array<ProviderType<any>>;

interface ProviderComposerProps {
  providers: ProvidersType;
  children: React.ReactNode;
}
const ProviderComposer: React.FC<ProviderComposerProps> = ({
  providers,
  children,
}) => {
  for (let i = providers.length - 1; i >= 0; --i) {
    const [Provider, props] = providers[i];
    children = <Provider {...props}>{children}</Provider>;
  }

  return <>{children}</>;
};

export default ProviderComposer;
