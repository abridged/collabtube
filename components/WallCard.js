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
// import Head from "next/head";
// import ReactPlayer from 'react-player'
import Router from "next/router";

// Considering replacing with FeedCard.js due to heavy reliance on inflexible MUI components

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

  // console.log("vurl", vurl);
  const desc = `Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica`;

  function onShare(content) {
    navigator.share({
      title: content,
      text: content,
      url: "https://collabtube.io/" + content,
    });
  }

  const onClick = () => {
    Router.push("/post/[slug]", `/post/${file.id}`);
  };

  // Card styles removed

  // className={classes.root}
  // style={{ height: "70vh", width: "70vw" }}

  return (
    <Card className="mx-4">
      <CardActionArea>
        <CardMedia component="img" alt={title} image={url} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="w-full">
        <Button size="small" color="primary" onClick={onClick}>
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
  );
}

/*
  {vurl && <ReactPlayer width="100%" className="w-full" controls={true} url={vurl} /> }

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
