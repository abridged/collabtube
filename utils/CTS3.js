const AWS = require('aws-sdk/global');
const S3 = require('aws-sdk/clients/s3');
AWS.S3 = S3;
// import { AmazonCognitoIdentity } from 'amazon-cognito-identity-js';

const albumBucketName = "collabtube-public";
const bucketRegion = "us-east-2";
const IdentityPoolId = "us-east-2:ed15ab27-205e-4582-91c7-56bf29d7bbb3";

// AWS.Cognito.config.update({accessKeyId: 'anything', secretAccessKey: 'anything'});

let init = false;
function setup() {
  if(init) return;
  init = true;

  const cred = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  });
  AWS.config.credential = cred;
  AWS.config.update({
    region: bucketRegion,
    credentials: cred
  });

  AWS.config.getCredentials(function (err) {
    if (err) console.log(err); // credentials not loaded
    else console.log("Access Key:", AWS.config.credentials.accessKeyId);
  })
}

export function addVideo(files) {
    setup();
    var s3 = new AWS.S3({
      apiVersion: "2006-03-01",
      params: { Bucket: albumBucketName }
    });

    const albumName = '';
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
        Body: file
        // ACL: "public-read"
      }
    });
  
    var promise = upload.promise();
  
    return promise.then(
      function(data) {
        alert("Successfully uploaded photo.");
        // viewAlbum(albumName);
      },
      function(err) {
        console.log('err', err);
        return alert("There was an error uploading your photo: ", err.message);
      }
    );
  }