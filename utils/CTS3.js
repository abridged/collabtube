const AWS = require("aws-sdk/global");
const S3 = require("aws-sdk/clients/s3");
AWS.S3 = S3;
// import { AmazonCognitoIdentity } from 'amazon-cognito-identity-js';

const albumBucketName = "collabtube-public-east1";
const bucketRegion = "us-east-1";
const IdentityPoolId = "us-east-1:4b27a1a5-db26-4125-bd3d-959c1a594db9";

// AWS.Cognito.config.update({accessKeyId: 'anything', secretAccessKey: 'anything'});

let init = false;
async function setup() {
  if (init) return;
  init = true;

  const cred = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId,
  });
  AWS.config.credential = cred;
  AWS.config.update({
    region: bucketRegion,
    credentials: cred,
  });

  await new Promise((r) =>
    AWS.config.getCredentials(function (err) {
      if (err) {
        console.log(err);
        return;
      }
      r();
      console.log("Access Key:", AWS.config.credentials.accessKeyId);
    })
  );
}

export async function getVideo(id) {
  return _getVideo(id);
}

function _getVideo(id) {
  return {
    gif: `https://collabtube-encoded-east1.s3.amazonaws.com/g_${id}.gif`,
    video: `https://collabtube-encoded-east1.s3.amazonaws.com/v_${id}.m3u8`,
    id: id,
    title: id,
    tags: [id],
  };
}

export async function getVideos(onVideos) {
  await setup();

  const cred = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId,
  });

  const BUCKET_VIDS = "collabtube-encoded-east1";

  var s3 = new AWS.S3({
    apiVersion: "2006-03-01",
    params: { Bucket: BUCKET_VIDS },
    region: bucketRegion,
  });

  var params = {
    Bucket: BUCKET_VIDS,
    MaxKeys: 100,
    Prefix: "g_",
  };

  let videos = [];
  s3.listObjectsV2(params, function (err, data) {
    if (err) {
      throw new Error(err);
      return;
    }
    // console.log(data.Contents);

    videos = data.Contents.map((x) => {
      const id = x.Key.replace(".gif", "").replace("g_", "");
      return _getVideo(id);
    });
    onVideos(videos);
  });
}

export function addVideo(files, onProgress) {
  if (!files[0] || !files[0].type) throw new Error("no video file");
  if (files[0].type.indexOf("video") === -1)
    throw new Error("not a video file");
  if (files[0].size > 1000000 * 60)
    throw new Error("video file is too large: try a shorter video");

  const sizeTotal = files[0].size;

  setup();

  var s3 = new AWS.S3({
    apiVersion: "2006-03-01",
    params: { Bucket: albumBucketName },
  });

  const albumName = "";
  // var files = document.getElementById("photoupload").files;
  if (!files.length) {
    return alert("Please choose a file to upload first.");
  }
  var file = files[0];
  var fileName = file.name;
  var albumPhotosKey = encodeURIComponent(albumName) + "/";

  var photoKey = fileName; // albumPhotosKey +

  // Use S3 ManagedUpload class as it supports multipart uploads
  var upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: albumBucketName,
      Key: photoKey,
      Body: file,
      // ACL: "public-read"
    },
  });

  upload.on("httpUploadProgress", function (e) {
    const loadedTotal = e.loaded;
    var progress = Math.round((loadedTotal / sizeTotal) * 100);
    // console.log('httpUploadProgress', progress);
    if (onProgress) onProgress(progress);
  });

  var promise = upload.promise();

  return promise.then(
    function (data) {
      // if(onProgress) onProgress(100);
    },
    function (err) {
      console.log("err", err);
      // return alert("There was an error uploading your video: ", err.message);
    }
  );
}
