// content.js
fetch(chrome.runtime.getURL("overlay.html"))
  .then((response) => response.text())
  .then((data) => {
    const div = document.createElement("div");
    div.innerHTML = data;
    document.body.appendChild(div);
    const cssLink = document.createElement("link");
    cssLink.href = chrome.runtime.getURL("overlay.css");
    cssLink.rel = "stylesheet";
    document.head.appendChild(cssLink);
  })
  .catch((err) => console.log(err));
