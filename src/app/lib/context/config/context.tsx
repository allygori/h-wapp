"use client";

import type { FC, ReactNode } from "react";
import { createContext, useState } from "react";

type ConfigContextType = {
  header_height: number | string | undefined;
  show_mobile_nav: boolean;
  setShowMobileNav: (val: boolean) => void;
};

const ConfigContext = createContext<ConfigContextType | null>(null);
const ConfigProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [value, setValue] = useState({
    header_height: 64,
    show_mobile_nav: false,
  });

  const setShowMobileNav = (val: boolean) => {
    setValue((prev) => ({ ...prev, show_mobile_nav: val }));
  };

  return (
    <ConfigContext.Provider value={{ ...value, setShowMobileNav }}>
      {children}
    </ConfigContext.Provider>
  );
};

export type { ConfigContextType };
export { ConfigProvider };
export default ConfigContext;
