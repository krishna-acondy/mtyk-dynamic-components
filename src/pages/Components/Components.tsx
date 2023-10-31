import ComponentCard from "./ComponentCard";
import {
  ButtonBase,
  Card,
  CardContent,
  Container,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { useData } from "../../hooks";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Components() {
  const { componentDefinitions } = useData();
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} sx={{ p: 2 }}>
        {componentDefinitions.map((definition) => (
          <Grid xs={12} sm={6} md={4} lg={3} xl={2} key={definition.id}>
            <ComponentCard definition={definition} />
          </Grid>
        ))}
        <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
          <ButtonBase
            sx={{
              minWidth: 150,
              minHeight: 150,
              width: "100%",
              height: "100%",
            }}
            onClick={() => navigate("/gallery")}
          >
            <Card sx={{ width: "100%", height: "100%" }}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Add fontSize="large" />
              </CardContent>
            </Card>
          </ButtonBase>
        </Grid>
      </Grid>
    </Container>
  );
}
