<div align="center">
<h1>PDF to Abstract</h1>
</div>

A web extension to redirect from the pdf page to the abstract page for academic websites.

## Usage

The extensions are currently undergoing review on the Chrome and Firefox extension stores.

To install these locally, run `./release.sh` to build both the Chrome and
Firefox versions, and unzip the version you'd like to use. Then,

**For Chrome:** Go to `chrome://extensions/` and enable developer mode. Then, click "Load unpacked" and select the unzipped `build/pdf2abstract_chrome.zip` folder.

**For Firefox:** Go to `about:debugging#/runtime/this-firefox` and click "Load Temporary Add-on...". Then, select the unzipped `build/pdf2abstract_ff.zip` folder.
