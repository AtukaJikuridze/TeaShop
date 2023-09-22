import { createContext, useState } from "react";
interface ContextInterface {
  bagList: number[];
  setBagList: Function;
  setIsCartActive: Function;
  isCartActive: boolean;
}
export const MyContext = createContext<ContextInterface | undefined>(undefined);

export const MyContextProvider = ({ children }: any) => {
  const [bagList, setBagList] = useState([]);
  const [isCartActive, setIsCartActive] = useState(false);

  return (
    <MyContext.Provider
      value={{ bagList, setBagList, isCartActive, setIsCartActive }}
    >
      {children}
    </MyContext.Provider>
  );
};
