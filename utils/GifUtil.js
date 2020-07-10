import gifshot from "gifshot";

export function createGif(video) {
  return new Promise((resolve, err) => {
    const o = {
			gifWidth: 120,
			gifHeight: 120,
			interval: .3,
			numFrames: 15,
			video,
			// delayOnLast: true,
			numWorkers: 2
    };
    gifshot.createGIF(o, function (obj) {
			if(obj.error) {
				console.log('error', obj);
				err(obj.errorMsg);
			}
      else resolve(obj.image);
      // callback object properties
      // --------------------------
      // image - Base 64 image
      // cameraStream - The webRTC MediaStream object
      // error - Boolean that determines if an error occurred
      // errorCode - Helpful error label
      // errorMsg - Helpful error message
      // savedRenderingContexts - An array of canvas image data (will only be set if the saveRenderingContexts option was used)
    });
  });
}
