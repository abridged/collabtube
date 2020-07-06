import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function WallCard() {
  const classes = useStyles();

  function onShare(content) {
    navigator.share({
      title: content,
      text: content,
      url: 'https://collabtube.io/' + content
    });
  }

  return (
    <Card className={classes.root} className="max-w-sm my-8 mx-auto">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="w-full">
        <Button size="small" color="primary">
          3 $TINGLES
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <IconButton onClick={x => onShare('lizard')} aria-label="share" className="align-right float-right">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
