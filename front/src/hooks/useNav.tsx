/* eslint-disable react-refresh/only-export-components */
import {
  INavProvider,
  IDefaultNavContext,
  INavContext,
} from "../utils/interfaces";
import React, { createContext, useContext, useState } from "react";

const NavContext = createContext<INavContext | IDefaultNavContext | null>(null);

export const NavProvider: React.FC<INavProvider> = ({
  children,
}): JSX.Element => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openOverlay, setOpenOverlay] = useState<boolean>(false);

  //toogle function
  const menuToogle = () => {
    setOpenMenu(!openMenu);
    setOpenOverlay(!openOverlay);
  };

  const changeNav = (state: boolean) => {
    setOpenMenu(state);
    setOpenOverlay(false);
  };

  return (
    <NavContext.Provider
      value={{
        openMenu,
        openOverlay,
        menuToogle,
        changeNav,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

//hooks exportation
export const useNav = () => {
  const context = useContext(NavContext);

  if (!context) {
    throw new Error("hook must be used within an Provider");
  }
  return context;
};
