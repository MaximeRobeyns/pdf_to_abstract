<div align="center">
<h1>PDF to Abstract</h1>
</div>

A web extension to redirect from the pdf page to the abstract page for academic websites.

## Installation

### Chrome

The chrome extension is still undergoing review on the Chrome extension store.

For a local chrome installation, run
```sh
./release.sh
cd build && unzip pdf2abstract_chrome.zip
```
then go to `chrome://extensions/`, enable developer mode, click "Load unpacked" and select the build folder.

### Firefox

Install the [Firefox Add-on](https://addons.mozilla.org/en-GB/firefox/addon/pdf-to-abstract-redirection/) from the store.

For a local installation for development, run
```sh
./release.sh
cd build && unzip pdf2abstract_ff.zip
```
then go to `about:debugging#/runtime/this-firefox`, click "Load Temporary
Add-on..." and select any file from the unzipped `build/pdf2abstract_ff.zip`
file.

