import React from "react";
import { useData } from "../../hooks";
import { ComponentTemplate } from "../../schema";
import { useParams } from "react-router-dom";

const CreateContext = React.createContext({
  currentTemplate: null as ComponentTemplate | null,
  config: null as Record<string, unknown> | null,
  setConfig: (_config: Record<string, unknown>) => {},
  isDrawerOpen: false,
  setIsDrawerOpen: (_isDrawerOpen: boolean) => {},
});

export default function CreateProvider(
  props: React.PropsWithChildren<Record<string, unknown>>
) {
  const { children } = props;

  const { getTemplate } = useData();

  const [currentTemplate, setCurrentTemplate] =
    React.useState<ComponentTemplate | null>(null);

  const [config, setConfig] = React.useState<Record<string, unknown> | null>(
    null
  );

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const { templateId } = useParams();

  React.useEffect(() => {
    if (templateId) {
      setCurrentTemplate(getTemplate(templateId) || null);
    }
  }, [templateId]);

  return (
    <CreateContext.Provider
      value={{
        currentTemplate,
        config,
        setConfig,
        isDrawerOpen,
        setIsDrawerOpen,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
}

export function useCreateContext() {
  return React.useContext(CreateContext);
}
