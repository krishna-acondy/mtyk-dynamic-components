import React from "react";
import { useLocalStorage } from "react-use";
import { componentTemplates } from "../data";
import { ComponentDefinition } from "../schema";

export const DataContext = React.createContext({
  componentDefinitions: [] as ComponentDefinition[],
  saveComponentDefinition: (_component: ComponentDefinition) => {},
  componentTemplates,
  getTemplate: (id: string) => {
    return componentTemplates.find((component) => component.id === id);
  },
});

export default function DataProvider(
  props: React.PropsWithChildren<Record<string, unknown>>
) {
  const { children } = props;

  const [componentDefinitions, setComponentDefinitions] = useLocalStorage<
    ComponentDefinition[]
  >("componentDefinitions", []);

  const getTemplate = React.useCallback((id: string) => {
    return componentTemplates.find((component) => component.id === id);
  }, []);

  const saveComponentDefinition = React.useCallback(
    (component: ComponentDefinition) => {
      const index = (componentDefinitions || []).findIndex(
        (c) => c.id === component.id
      );
      if (index === -1) {
        setComponentDefinitions([...(componentDefinitions || []), component]);
      } else {
        const updated = [...(componentDefinitions || [])];
        updated[index] = component;
        setComponentDefinitions(updated);
      }
    },
    [componentDefinitions, setComponentDefinitions]
  );

  const value = React.useMemo(
    () => ({
      componentTemplates,
      getTemplate,
      componentDefinitions: componentDefinitions || [],
      saveComponentDefinition,
    }),
    [
      componentTemplates,
      getTemplate,
      componentDefinitions,
      saveComponentDefinition,
    ]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
