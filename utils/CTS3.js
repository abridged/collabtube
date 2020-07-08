import AWS from 'aws-sdk';

var albumBucketName = "collabtube-public";
var bucketRegion = "us-east-2";
var IdentityPoolId = "us-east-2:ed15ab27-205e-4582-91c7-56bf29d7bbb3";

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
});

var s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: albumBucketName }
});

export function addVideo(files) {
    const albumName = '';
    // var files = document.getElementById("photoupload").files;
    if (!files.length) {
      return alert("Please choose a file to upload first.");
    }
    var file = files[0];
    var fileName = file.name;
    var albumPhotosKey = encodeURIComponent(albumName) + "/";
  
    var photoKey = albumPhotosKey + fileName;
  
    // Use S3 ManagedUpload class as it supports multipart uploads
    var upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: albumBucketName,
        Key: photoKey,
        Body: file,
        ACL: "public-read"
      }
    });
  
    var promise = upload.promise();
  
    return promise.then(
      function(data) {
        alert("Successfully uploaded photo.");
        // viewAlbum(albumName);
      },
      function(err) {
        return alert("There was an error uploading your photo: ", err.message);
      }
    );
  }