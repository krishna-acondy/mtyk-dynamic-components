import { BrowserRouter as Router } from "react-router-dom";
import { Box } from "@mui/material";
import { AppContext } from "./context";
import Header from "./Header";
import Routes from "./Routes";

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <AppContext>
        <Header />
        <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
          <Routes />
        </Box>
      </AppContext>
    </Router>
  );
}
