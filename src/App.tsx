import { Box } from "@mui/material";
import { AppContext } from "./context";
import Header from "./Header";

export default function App() {
  return (
    <AppContext>
      <Header />
      <Box sx={{ display: "flex", width: "100%", height: "100%" }}></Box>
    </AppContext>
  );
}
