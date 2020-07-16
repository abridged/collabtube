// import AWS from 'aws-sdk/global';
// import S3 from 'aws-sdk/clients/s3';
// AWS.S3 = S3;

import {S3Client} from '@aws-sdk/client-s3-node/S3Client';
import {AmazonCognitoIdentity} from '@aws-sdk/middleware-sdk-cognito-identity';

import { fromCognitoIdentityPool } from"@aws-sdk/credential-provider-cognito-identity";
import { CognitoIdentityClient } from"@aws-sdk/client-cognito-identity";

// import { AmazonCognitoIdentity } from 'amazon-cognito-identity-js';

const albumBucketName = "collabtube-public-east1";
const REGION = "us-east-1";
const IdentityPoolId = "us-east-1:4b27a1a5-db26-4125-bd3d-959c1a594db9";

// AWS.Cognito.config.update({accessKeyId: 'anything', secretAccessKey: 'anything'});

let init = false;
let s3;

// const auth = new AmazonCognitoIdentity();

import { v4 as uuidv4 } from 'uuid';

function makeID() {
    return uuidv4();
}

function setup() {
  if(init) return;
  init = true;
  s3 = new S3Client({
        region: REGION,
        credentials: fromCognitoIdentityPool({
            client: new CognitoIdentityClient({
              region: REGION
            }),
            identityPoolId: IdentityPoolId
          })
    });
  //  s3.middlewareStack.add(auth)

  /* const cred = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  });
  AWS.config.credential = cred;
  AWS.config.update({
    region: REGION,
    credentials: cred
  });
  

  AWS.config.getCredentials(function (err) {
    if (err) console.log(err); // credentials not loaded
    else console.log("Access Key:", AWS.config.credentials.accessKeyId);
  })
  */
}

export function addVideo(files, onProgress) {
    if(!files[0] || !files[0].type) throw new Error('no video file');
    if(files[0].type.indexOf('video')===-1) throw new Error('not a video file');
    if(files[0].size > 1000000 * 60) throw new Error('video file is too large: try a shorter video');
    
    const sizeTotal = files[0].size;

    setup();

    /* var s3 = new AWS.S3({
      apiVersion: "2006-03-01",
      params: { Bucket: albumBucketName }
    }); */

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

    upload.on('httpUploadProgress', function(e) {
      
      const loadedTotal = e.loaded;
      var progress = Math.round(loadedTotal / sizeTotal * 100);
      // console.log('httpUploadProgress', progress);
      if(onProgress) onProgress(progress);
  });
  
    var promise = upload.promise();
  
    return promise.then(
      function(data) {
        // if(onProgress) onProgress(100);
      },
      function(err) {
        console.log('err', err);
        // return alert("There was an error uploading your video: ", err.message);
      }
    );
  }