export function setupShare(navigator) {
  if (navigator.share) {
    navigator
      .share({
        title: "CollabTube",
        text: "Check out CollabTube.",
        url: "https://collabtube.io",
      })
      .then(() => console.log("Successful share"))
      .catch((error) => console.log("Error sharing", error));
  }
}
