chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  let currentUrl = tabs[0].url;
  let newUrl = false;

  // ArXiv Rule
  if (currentUrl.includes("arxiv.org/pdf")) {
    newUrl = currentUrl.replace("/pdf/", "/abs/").replace(".pdf", "");
  }
  // NeurIPS Rule
  else if (currentUrl.includes("proceedings.neurips.cc/paper")) {
    newUrl = currentUrl
      .replace("/file", "/hash")
      .replace("-Paper-Conference.pdf", "-Abstract-Conference.html")
      .replace("-Supplemental-Conference.pdf", "-Abstract-Conference.html")
      .replace("-Paper.pdf", "-Abstract.html");
  }
  // ICML/PMLR Rule
  else if (currentUrl.includes("proceedings.mlr.press")) {
    let chunks = currentUrl.split("/");
    chunks.pop();
    newUrl = chunks.join("/") + ".html";
  }
  // ACL Rule
  else if (currentUrl.includes("aclweb.org/anthology")) {
    newUrl = currentUrl.replace(".pdf", "/");
  } else if (currentUrl.includes("aclanthology.org")) {
    newUrl = currentUrl.replace(".pdf", "/");
  }
  // IEEE Xplore Rule
  else if (currentUrl.includes("ieeexplore.ieee.org/stamp")) {
    newUrl = currentUrl.replace(
      "/stamp/stamp.jsp?tp=&arnumber=",
      "/abstract/document/"
    );
  }
  // SpringerLink Rule
  else if (currentUrl.includes("link.springer.com/content/pdf")) {
    newUrl = currentUrl
      .replace("/content/pdf/", "/article/")
      .replace(".pdf", "");
  }
  // JMLR Rule
  else if (currentUrl.includes("www.jmlr.org/papers/volume")) {
    let chunks = currentUrl.split("/");
    let volume = chunks[4].replace("volume", "");
    chunks.splice(4, 2);
    chunks.splice(4, 0, "v" + volume);
    newUrl = chunks.join("/").replace(".pdf", ".html");
  }
  // OpenReview Rule
  else if (currentUrl.includes("openreview.net/pdf")) {
    newUrl = currentUrl.replace("pdf", "forum");
  }

  // Redirect if a rule matched
  if (newUrl) {
    chrome.tabs.update(tabs[0].id, { url: newUrl });
    window.close(); // Close the popup
    return;
  }
  let status = document.getElementById("statusText");
  statusElement.textContent =
    "This site isn't supported or the URL structure has changed.";
  setTimeout(() => {
    window.close();
  }, 4000);
});
