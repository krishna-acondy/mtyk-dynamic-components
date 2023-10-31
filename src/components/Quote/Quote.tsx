import { Card, CardContent, Typography } from "@mui/material";

type QuoteProps = {
  text: string;
  author?: string;
};

export default function Quote(props: QuoteProps) {
  const { text = "", author = "" } = props;
  const quotedText =
    text.startsWith('"') && text.endsWith('"') ? text : `“${text}”`;

  return (
    <Card sx={{ minWidth: 240, maxWidth: 480 }}>
      <CardContent>
        <blockquote>
          <Typography variant="h6" gutterBottom>
            {quotedText}
          </Typography>
        </blockquote>
        <Typography color="text.secondary">{author}</Typography>
      </CardContent>
    </Card>
  );
}
