import React from "react";
import { componentTemplates } from "../data";

export const DataContext = React.createContext({
  componentTemplates,
  getTemplate: (id: string) => {
    return componentTemplates.find((component) => component.id === id);
  },
});

export default function DataProvider(
  props: React.PropsWithChildren<Record<string, unknown>>
) {
  const { children } = props;

  const getTemplate = React.useCallback((id: string) => {
    return componentTemplates.find((component) => component.id === id);
  }, []);

  return (
    <DataContext.Provider value={{ componentTemplates, getTemplate }}>
      {children}
    </DataContext.Provider>
  );
}
