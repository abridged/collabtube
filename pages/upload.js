import Page from "../components/Page";
import { TextField, Slider, Typography } from "@material-ui/core";

export default function Other() {
  function valuetext(value) {
    return `${value} $TINGLES`;
  }

  const marks = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 20,
      label: '20',
    },
    {
      value: 100,
      label: '100 $TINGLES',
    },
  ];

  return (
    <>
      <h1>Upload</h1>
      <figure className="bg-white bg-opacity-50 rounded-md m-2 p-4">
        <p>This is the 'upload' page. There's not much here.</p>
        <br />

        <TextField id="title" label="Title"/>
        <br/>
        <TextField id="description" label="Description" multiline/>
        <br/><br/>
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
            <button className="btn">Upload Image Preview</button>
            <input
              type="file"
              name="myfile"
              accept="video/*;capture=camcorder"
            />
          </div>

          <div className="upload-btn-wrapper">
            <button className="btn">Upload video</button>
            <input
              type="file"
              name="myfile"
              accept="video/*;capture=camcorder"
            />
          </div>
        </div>

        <div className="py-2 py-12">
          <button>
            <span className="mdc-button__ripple" />
            Submit
          </button>
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
