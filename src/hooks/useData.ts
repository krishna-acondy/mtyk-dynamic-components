import React from "react";
import { DataContext } from "../context";

export function useData() {
  const context = React.useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
