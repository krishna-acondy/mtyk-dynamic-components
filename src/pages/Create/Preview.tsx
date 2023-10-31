import { Stack, Typography } from "@mui/material";
import { useTheme } from "../../hooks";
import { useCreateContext } from "./CreateContext";
import React from "react";
import { Dashboard } from "@mui/icons-material";

export default function Preview() {
  const { darkMode } = useTheme();
  const { config, currentTemplate } = useCreateContext();
  const Component = currentTemplate?.component as any;
  const { props, children, isValid } =
    currentTemplate?.transformProps(currentTemplate, config) || {};
  return (
    <Stack
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: (theme) => theme.palette.grey[darkMode ? 800 : 200],
      }}
    >
      {props && Component ? (
        isValid ? (
          React.createElement(Component, props, children)
        ) : (
          <>
            <Dashboard sx={{ fontSize: 80 }} />
            <Typography variant="body2">
              Please fill in all required fields to see a preview
            </Typography>
          </>
        )
      ) : null}
    </Stack>
  );
}
