import React, { useEffect } from "react";
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
import Head from "next/head";
import ReactPlayer from 'react-player'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function WallCard({ file }) {
  const classes = useStyles();

  const title = file ? file.file : "lizard";
  const url = file
    ? `https://collabtube-encoded-east1.s3.amazonaws.com/${file.file}.gif`
    : "/contemplative-reptile.jpg";

  const vurl = file
    ? `https://collabtube-encoded-east1.s3.amazonaws.com/${file.file}.m3u8`
    : null;

  console.log("vurl", vurl);
  const desc = `Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica`;

  function onShare(content) {
    navigator.share({
      title: content,
      text: content,
      url: "https://collabtube.io/" + content,
    });
  }



  return (
    <>
      <Card className={classes.root} className="max-w-sm my-8 mx-auto">
        <Head>
          <title>Gallery</title>

        </Head>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={title}
            height="140"
            image={url}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {desc}
            </Typography>
          </CardContent>

  {vurl && <ReactPlayer width="100%" className="w-full" controls={true} url={vurl} /> }
        </CardActionArea>
        <CardActions className="w-full">
          <Button size="small" color="primary">
            3 $TINGLES
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
          <IconButton
            onClick={(x) => onShare("lizard")}
            aria-label="share"
            className="align-right float-right"
          >
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      
    </>
  );
}

/*
          <link
            href="//vjs.zencdn.net/7.3.0/video-js.min.css"
            rel="stylesheet"
          />
          <script src="//vjs.zencdn.net/7.3.0/video.min.js"></script>
          
  useEffect((x) => {
    return;
    if (!window || !window.videojs) return;
    var player = videojs("example-video");
    player.play();
  }, []);

{vurl && false && (
        <div className="mx-auto text-center w-full h-32">
          <video
            className="w-full h-32"
            width="100%"
            height="100%"
            id="example-video"
            class="video-js vjs-default-skin"
            controls
          >
            <source src={vurl} type="application/x-mpegURL" />
          </video>
        </div>
      )}
      */