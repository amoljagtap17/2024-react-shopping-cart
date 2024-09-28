import { Drawer } from "@mui/material";
import {
  cloneElement,
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type IDrawerContextType = [
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
];

const DrawerContext = createContext<IDrawerContextType | null>(null);

export function DrawerContextProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DrawerContext.Provider value={[isOpen, setIsOpen]}>
      {children}
    </DrawerContext.Provider>
  );
}

export function DrawerClose({ children }: { children: ReactElement }) {
  const [, setIsOpen] = useContext(DrawerContext) as IDrawerContextType;

  return cloneElement(children, { onClick: () => setIsOpen(false) });
}

export function DrawerTrigger({ children }: { children: ReactElement }) {
  const [, setIsOpen] = useContext(DrawerContext) as IDrawerContextType;

  return cloneElement(children, { onClick: () => setIsOpen(true) });
}

export function DrawerContents({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useContext(DrawerContext) as IDrawerContextType;

  return (
    <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
      {children}
    </Drawer>
  );
}
