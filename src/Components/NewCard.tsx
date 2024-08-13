
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="src\assets\cons01.jpg"
          alt="-"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            cons.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            text text text text text text text text text text text text
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          
        </Button>
      </CardActions>
    </Card>
  );
}
