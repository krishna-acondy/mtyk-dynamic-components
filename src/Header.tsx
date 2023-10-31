import { AppBar, Box, Stack, Switch, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useTheme } from "./hooks";

export default function Header() {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <AppBar
      position="sticky"
      sx={{
        zIndex: (theme) => theme.zIndex.tooltip,
        ...(!darkMode && { background: "transparent" }),
      }}
    >
      <Toolbar sx={{ maxHeight: 64 }}>
        <Box sx={{ textDecoration: "none" }} component={Link} to="/">
          <Logo />
        </Box>
        <Stack direction="row" alignItems="center" marginLeft="auto">
          🌞
          <Switch checked={darkMode} onChange={toggleDarkMode} />
          🌛
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
