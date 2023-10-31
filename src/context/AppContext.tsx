import * as React from "react";
import Compose from "./Compose";
import ThemeContext from "./ThemeContext";
import DataContext from "./DataContext";

function AppContext(props: React.PropsWithChildren<Record<string, unknown>>) {
  const { children } = props;

  return (
    <Compose providers={[ThemeContext, DataContext]} {...props}>
      {children}
    </Compose>
  );
}

export default AppContext;
