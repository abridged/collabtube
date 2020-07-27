import React, { useState } from "react";
import Page from "../components/Page";
import { TextField, Slider, Typography, Button } from "@material-ui/core";
import { addVideo } from "../utils/CTS3";
import { Alert, AlertTitle } from "@material-ui/lab";
// import { createGif } from "../utils/GifUtil";
import LoadingOverlay from '../components/LoadingOverlay';

export default function Other() {
  const [state, setState] = useState({ progress: 0 });
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
      addVideo(_files.files, onProgress).then(x => {
        // if() setState((x) => ({ ...x, progress: 99 }));
        setTimeout(_ => {
          setState((x) => ({ ...x, loading: false }))
          alert('Video uploaded! After processing completes in a few minutes it will be publically available.');
        }, 100);

      }).catch(e => {
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


  const hiddenFileInput = React.useRef(null);

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };

  return (
    <>
      {state.loading && <LoadingOverlay open={state.loading} progress={state.progress} />}
      <figure className="bg-white bg-opacity-50 rounded-md m-2 p-4">
        {state.error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {state.error}
          </Alert>
        )}
        {state.gif && <img src={state.gif} width="200" height="200" />}

        <div class="flex justify-center">
          <hr className="bg-gray-400 h-1 border-transparent w-1/2"></hr>
        </div>

        <div class="my-2">
          <input class="text-xl shadow appearance-none border-2 rounded w-full py-2 px-3 placeholder-black font-extrabold leading-tight focus:outline-none focus:shadow-outline m-1"
            id="videoTitle"
            type="text"
            placeholder="Video Title">
          </input>
        </div>

        <textarea
          name="description"
          placeholder="Add a video description"
          cols="40"
          rows="5"
          class="my-2 shadow appearance-none border-2 rounded w-full py-2 px-3 placeholder-gray-600 font-normal leading-tight focus:outline-none focus:shadow-outline m-1">
        </textarea>

        <div>
          {/*<div className="upload-btn-wrapper">*/}
          <button onClick={handleClick} class="my-1 bg-white hover:bg-gray-400 text-black font-semibold w-full py-2 px-4 border-2 border-gray-400 rounded shadow m-1">
            <i class="las la-photo-video"></i>
            <span>Choose a video</span>
          </button>
          <input
            style={{
              display: "none"
            }}
            id="videoupload"
            type="file"
            name="myfile"
            accept="video/*;capture=camcorder"
            ref={hiddenFileInput}
            onChange={handleChange}
          />
        </div>
        {/*</div>*/}

        {/*<div className="flex mt-8">
            <div className="upload-btn-wrapper">*/}
        <button class="my-1 bg-black hover:bg-gray-700 text-white font-semibold w-full py-2 px-4 border-2 border-gray-400 rounded shadow m-1">
          Set Ticket Price</button>
        {/*</div>
          </div>*/}
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