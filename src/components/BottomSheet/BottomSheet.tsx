import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Divider, Stack, Typography } from "@mui/material";

const drawerBleeding = 56;

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

interface BottomSheetProps {
  open?: boolean;
  onToggle?: (open: boolean) => any;
  title: React.ReactNode;
  footer?: React.ReactNode;
}

export default function BottomSheet({
  title,
  children,
  footer,
  open: openProp,
  onToggle,
}: React.PropsWithChildren<BottomSheetProps>) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
    onToggle && onToggle(newOpen);
  };

  React.useEffect(() => {
    setOpen(!!openProp);
  }, [openProp]);

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      swipeAreaWidth={drawerBleeding}
      disableSwipeToOpen={false}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      ModalProps={{
        keepMounted: true,
      }}
      PaperProps={{
        sx: {
          height: `calc(50% - ${drawerBleeding}px)`,
          overflow: "visible",
        },
      }}
    >
      <StyledBox
        sx={{
          position: "absolute",
          top: -drawerBleeding,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          borderTop: `1px solid ${theme.palette.divider}`,
          visibility: "visible",
          right: 0,
          left: 0,
        }}
      >
        <Puller />
        {open ? title : <Typography sx={{ p: 2 }}>Swipe up to open</Typography>}
      </StyledBox>
      <Stack
        sx={{
          px: 2,
          height: "calc(100% - 56px)",
          overflowY: "hidden",
        }}
      >
        {children}
      </Stack>
      {!!footer && (
        <Stack
          sx={{
            marginTop: "auto",
          }}
        >
          <Divider />
          {footer}
        </Stack>
      )}
    </SwipeableDrawer>
  );
}
