/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, ReactNode } from "react";

interface INavList {
  navSection01: navItem[];
}

type navItem = {
  key: string;
  sectionId?: string;
};

interface INavContext {
  openMenu: boolean;
  openOverlay: boolean;
  menuToogle: () => void;
  changeNav: (state: boolean) => void;
}

interface IDefaultNavContext {
  openMenu: false;
  openOverlay: false;
  menuToogle: () => null;
  changeNav: (state: boolean) => null;
}

interface INavProvider {
  children?: ReactNode;
}

type children = {
  children: ReactNode;
};

interface IrouteList {
  url: string;
  component: ComponentType<any>;
}

interface IaboutCard {
  image: string;
  subtitle: string;
  text: string;
  col_indice?: string;
  id?: string;
}
interface IfooterNav {
  title: string;
  links: string[];
}

interface ItarifCard {
  subtitle: string;
  text: string;
  price: number;
  button: string;
  id?: string;
  engagement: string;
}

interface IangelCard {
  image: string;
  name: string;
  description: string;
}
interface IchatProps {
  action: (e: any) => void;
  chats: Ichats[];
  close: () => void;
}

interface Ichats {
  role: string;
  content: string;
}

interface IauthHeader {
  title: string;
}

interface IauthInput {
  label: string;
  placeholder: string;
  name: string;
  type : string
}

interface Ianimation {
  direction: string;
  children: ReactNode;
}

export type {
  INavList,
  navItem,
  INavContext,
  IDefaultNavContext,
  INavProvider,
  children,
  IrouteList,
  IaboutCard,
  ItarifCard,
  IangelCard,
  IauthHeader,
  IauthInput,
  IfooterNav,
  IchatProps,
  Ichats,
  Ianimation,
};
