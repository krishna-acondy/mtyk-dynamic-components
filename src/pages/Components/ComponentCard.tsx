import { ComponentDefinition } from "../../schema";
import {
  ButtonBase,
  Card,
  CardHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { formatDistanceToNow, parseISO } from "date-fns";
import React from "react";
import { useData } from "../../hooks";

type ComponentCardProps = {
  definition: ComponentDefinition;
};
export default function ComponentCard({ definition }: ComponentCardProps) {
  const [open, setOpen] = React.useState(false);
  const { getTemplate } = useData();
  const template = getTemplate(definition.templateId);

  return (
    <>
      <ButtonBase
        sx={{ minWidth: 150, minHeight: 150, width: "100%", height: "100%" }}
        onClick={() => setOpen(true)}
      >
        <Card sx={{ width: "100%", height: "100%" }}>
          <CardHeader
            title={definition.name}
            subheader={`Created ${formatDistanceToNow(
              parseISO(definition.createdAt),
              { addSuffix: true }
            )}`}
            titleTypographyProps={{ variant: "h6" }}
          ></CardHeader>
        </Card>
      </ButtonBase>
      {!!template && (
        <Dialog
          sx={{ maxHeight: "80vh", top: "10vh" }}
          open={open}
          onClose={() => setOpen(false)}
        >
          <DialogTitle>
            <Stack>
              <Typography variant="h5"> {definition.name}</Typography>
              <Typography variant="caption">{`Created ${formatDistanceToNow(
                parseISO(definition.createdAt),
                { addSuffix: true }
              )}`}</Typography>
            </Stack>
          </DialogTitle>

          <DialogContent>
            <Stack
              width="100%"
              height="100%"
              justifyContent="center"
              alignItems="center"
            >
              {React.createElement(
                template.component as any,
                definition.config.props,
                definition.config.children
              )}
            </Stack>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
