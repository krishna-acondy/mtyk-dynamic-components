import TemplateCard from "./TemplateCard";
import { Container, Unstable_Grid2 as Grid } from "@mui/material";
import { useData } from "../../hooks";

export default function Gallery() {
  const { componentTemplates } = useData();
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} sx={{ p: 2 }}>
        {componentTemplates.map((template) => (
          <Grid xs={12} sm={6} md={4} lg={3} xl={2} key={template.id}>
            <TemplateCard template={template} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
