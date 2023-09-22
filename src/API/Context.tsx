import { createContext, useState } from "react";
interface ContextInterface {
  bagList: number[];
  setBagList: Function;
}
export const MyContext = createContext<ContextInterface | undefined>(undefined);

export const MyContextProvider = ({ children }: any) => {
  const [bagList, setBagList] = useState([]);

  return (
    <MyContext.Provider value={{ bagList, setBagList }}>
      {children}
    </MyContext.Provider>
  );
};
