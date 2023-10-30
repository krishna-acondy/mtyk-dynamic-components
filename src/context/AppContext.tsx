import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Compose from "./Compose";
import ThemeContext from "./ThemeContext";

function AppContext(props: React.PropsWithChildren<Record<string, unknown>>) {
  const { children } = props;

  return (
    <Compose providers={[Router, ThemeContext]} {...props}>
      {children}
    </Compose>
  );
}

export default AppContext;
