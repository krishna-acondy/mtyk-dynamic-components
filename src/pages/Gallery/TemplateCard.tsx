import { ComponentTemplate } from "../../schema";
import { useNavigate } from "react-router-dom";
import { ButtonBase, Card, CardHeader } from "@mui/material";

type TemplateCardProps = {
  template: ComponentTemplate;
};
export default function TemplateCard({ template }: TemplateCardProps) {
  const navigate = useNavigate();
  return (
    <ButtonBase
      sx={{ minWidth: 150, minHeight: 150, width: "100%", height: "100%" }}
      onClick={() => navigate(`/templates/${template.id}/create`)}
    >
      <Card sx={{ width: "100%", height: "100%" }}>
        <CardHeader
          title={template.name}
          subheader={template.description}
          titleTypographyProps={{ variant: "h6" }}
        ></CardHeader>
      </Card>
    </ButtonBase>
  );
}
