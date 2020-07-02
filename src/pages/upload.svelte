<script>
  import { metatags } from "@sveltech/routify";

  metatags.title = "upload";
</script>

<style>
  .inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .inputfile + label {
    font-size: 1.25em;
    font-weight: 700;
    color: white;
    background-color: #6f43c4;
    display: inline-block;
    cursor: pointer; /* "hand" cursor */
    margin: 0.2rem;
    padding: 0.2rem 1rem;
    width: 12em;
    text-align: center;
  }

  .inputfile:focus + label,
  .inputfile + label:hover {
    background-color: #552da3;
  }

  .inputfile:focus + label {
    outline: 1px dotted #000;
    outline: -webkit-focus-ring-color auto 5px;
  }

  .inputfile + label * {
    pointer-events: none;
  }
</style>

<h1>Upload</h1>

<figure class="bg-white bg-opacity-50 rounded-md m-2 p-4">
  <p>This is the 'upload' page. There's not much here.</p>
  <br />

  <h6 class="mb-3 mt-6">Title</h6>
  <input label="Test label" />

  <h6 class="mb-3 mt-6">Description</h6>
  <input label="Test label" textarea="true" />

  <h6 class="mb-3 mt-6">Token cost</h6>
  <input label="Test label" />

  <div class="flex">
    <input
      type="file"
      accept="image/*;capture=camera"
      name="uploadImg"
      class="inputfile float-initial" />
    <label for="uploadImg">Upload Image Preview</label>
    <br />

    <input
      type="file"
      accept="video/*;capture=camcorder"
      name="uploadVid"
      class="inputfile float-initial" />
    <label for="uploadImg">Record video</label>

  </div>

  <div class="py-2 py-12">
    <button
      class="mdc-button mdc-button--raised mdc-card__action
      mdc-card__action--button">
      <span class="mdc-button__ripple" />
      Submit
    </button>
  </div>
</figure>
