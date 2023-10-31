import React from "react";
import { Button, Stack, TextField, Toolbar, Typography } from "@mui/material";
import { Dashboard } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { useData, useTheme } from "../../hooks";
import { useCreateContext } from "./CreateContext";

export default function Preview() {
  const { darkMode } = useTheme();
  const { config, currentTemplate, isDrawerOpen } = useCreateContext();
  const { saveComponentDefinition } = useData();
  const navigate = useNavigate();
  const [name, setName] = React.useState("");

  const Component = currentTemplate?.component as any;
  const { props, children, isValid } =
    currentTemplate?.transformProps(currentTemplate, config) || {};
  return (
    <Stack width="100%">
      <Toolbar>
        <TextField
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <Button
          sx={{ marginLeft: "auto" }}
          disabled={!isValid || !name}
          variant="contained"
          onClick={() => {
            saveComponentDefinition({
              id: nanoid(),
              name,
              templateId: currentTemplate!.id,
              config: { props, children },
              createdAt: new Date().toISOString(),
            });
            navigate("/components");
          }}
        >
          Save
        </Button>
      </Toolbar>
      <Stack
        width="100%"
        height={isDrawerOpen ? "50%" : "100%"}
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
    </Stack>
  );
}
