import React, { useState } from "react";
import Page from "../components/Page";
import { TextField, Slider, Typography, Button } from "@material-ui/core";
import { addVideo } from "../utils/CTS3";
import { Alert, AlertTitle } from "@material-ui/lab";
// import { createGif } from "../utils/GifUtil";
import LoadingOverlay from '../components/LoadingOverlay';

export default function Other() {
  const [state, setState] = useState({progress:0});
  function valuetext(value) {
    return `${value} $TINGLES`;
  }

  async function onSubmit() {
    const _files = document.getElementById("videoupload");
    if (!_files.files) {
      alert("Please add a video");
      return;
    }
    console.log(_files.files);

    // const gif = await createGif(_files.files[0]);
    // console.log("gif finished", gif);
    // setState(gif);

    const onProgress = p => {
      setState((x) => ({ ...x, progress: p || 0 }));
    }

    try {
      setState((x) => ({ ...x, loading: true, progress: 0 }));
      addVideo(_files.files, onProgress).then(x=> {
        // if() setState((x) => ({ ...x, progress: 99 }));
        setTimeout(_=>{
          setState((x) => ({ ...x, loading: false }))
          alert('Video uploaded! After processing completes in a few minutes it will be publically available.');
        }, 100);

      }).catch(e=>{
        throw new Error(e);
      });
    } catch (e) {
      //window.alert(e);
      setState((x) => ({ ...x, error: e.toString(), loading: false }));
      return;
    }
  }

  const marks = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 20,
      label: "20",
    },
    {
      value: 100,
      label: "100 $TINGLES",
    },
  ];

  return (
    <>
      <h1>Upload</h1>
      {state.loading && <LoadingOverlay open={state.loading} progress={state.progress} />}
      <figure className="bg-white bg-opacity-50 rounded-md m-2 p-4">
        <p>This is the 'upload' page. There's not much here.</p>
        <br />

        {state.error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {state.error}
          </Alert>
        )}
        {state.gif && <img src={state.gif} width="200" height="200" />}

        <TextField id="title" label="Title" />
        <br />
        <TextField id="description" label="Description" multiline />
        <br />
        <br />
        <Typography id="discrete-slider-custom" gutterBottom>
          Token Price
        </Typography>
        <Slider
          defaultValue={1}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-custom"
          step={1}
          valueLabelDisplay="auto"
          className="max-w-sm"
          marks={marks}
        />

        <div className="flex mt-8">
          <div className="upload-btn-wrapper">
            <button className="btn">Upload Video</button>
            <input
              id="videoupload"
              type="file"
              name="myfile"
              accept="video/*;capture=camcorder"
            />
          </div>
        </div>

        <div className="py-2 py-12">
          <Button
            onClick={onSubmit}
            label=""
            variant="contained"
            className="text-3xl"
            color="primary"
            size="large"
          >
            submit
          </Button>
        </div>
      </figure>
      <style jsx>{`
        .upload-btn-wrapper {
          position: relative;
          overflow: hidden;
          display: inline-block;
          margin-right: 1rem;
        }

        .btn {
          border: 2px solid gray;
          color: gray;
          background-color: white;
          padding: 8px 20px;
          border-radius: 8px;
          font-size: 20px;
          font-weight: bold;
        }

        .upload-btn-wrapper input[type="file"] {
          font-size: 100px;
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0;
        }
      `}</style>
    </>
  );
}
