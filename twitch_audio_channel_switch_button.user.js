// ==UserScript==
// @name        twitch audio channel switch button
// @namespace   makitaaaaa
// @description twitch.tvに音声チャネルをモノラル、左チャネル、右チャネルのみに変更できるボタンを追加します
// @include     http*://*.twitch.tv/*
// @noframes
// @version     1.0.0
// @run-at      document-end
// @grant       none
// ==/UserScript==

const SVG_BUTTON = `<svg id="twitch-mono-svg-stereo" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="-50 -30 150 150" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4" class="MuteVideoButton-icon"><path d="M80.394531 11.347656A4 4 0 0 0 77.5 12.5L76 14l-.5.699219h-.099609v.101562a4 4 0 0 0-.09961 3.59961v.298828a4 4 0 0 0 .59961.800781 35 35 0 0 1 2 1.800781L78 21.5h.099609a44 44 0 0 1 1 1l.09961.199219C85.899219 29.799219 90 39.4 90 50l-.300781 4.5v.300781a39.3 39.3 0 0 1-4.398438 14L85.199219 69v.099609a40 40 0 0 1-9 11.09961A4 4 0 0 0 76 86a75 75 0 0 0 1.5 1.400391 4 4 0 0 0 5.400391.199218 49.9 49.9 0 0 0 0-75.298828 4 4 0 0 0-2.50586-.953125zM66.048828 25.537109a4 4 0 0 0-2.849609 1.263672l-1 1L62 28a4 4 0 0 0 .199219 6.199219A20 20 0 0 1 70 50a20 20 0 0 1-7.900391 15.800781 4 4 0 0 0-1 5L61.199219 71a4 4 0 0 0 .601562.800781l.5.5.898438 1c.9.7 1.9 1.09961 3 1.09961a4 4 0 0 0 2.201172-.701172v-.09961a30 30 0 0 0 2.699218-45l-2.5-2.199218a4 4 0 0 0-2.550781-.863282zM19.710799 11.348062a4 4 0 0 1 2.89453 1.152343l1.5 1.5.5.699219h.0996v.101562a4 4 0 0 1 .0996 3.59961v.298828a4 4 0 0 1-.59961.800781 35 35 0 0 0-2 1.800782l-.0996.199219h-.0996a44 44 0 0 0-1 1l-.0996.199219c-6.7 7.1-10.80078 16.700781-10.80078 27.300781l.30078 4.5v.300781a39.3 39.3 0 0 0 4.39844 14l.10156.199219v.09961a40 40 0 0 0 9 11.09961 4 4 0 0 1 .19922 5.80078 75 75 0 0 1-1.5 1.400391 4 4 0 0 1-5.40039.199218 49.9 49.9 0 0 1 0-75.298829 4 4 0 0 1 2.50586-.953124zM34.0565 25.537515a4 4 0 0 1 2.849609 1.263672l1 1 .199219.199219a4 4 0 0 1-.199219 6.199219 20 20 0 0 0-7.800781 15.800781 20 20 0 0 0 7.900391 15.800781 4 4 0 0 1 1 5l-.09961.199219a4 4 0 0 1-.601562.800781l-.5.5-.898438 1c-.9.7-1.9 1.09961-3 1.09961a4 4 0 0 1-2.201172-.701172v-.09961a30 30 0 0 1-2.699218-45l2.5-2.199218a4 4 0 0 1 2.550781-.863282z"/></svg><svg id="twitch-mono-svg-monoral" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="-50 -30 150 150" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4" class="MuteVideoButton-icon"><path d="M80.278293 11.347656A4 4 0 0 1 83.172824 12.5l1.5 1.5.5.699219h.09961v.101562a4 4 0 0 1 .09961 3.59961v.298828a4 4 0 0 1-.599611.800781 35 35 0 0 0-2 1.800781L82.672824 21.5h-.09961a44 44 0 0 0-1 1l-.09961.199219C74.773605 29.799219 70.672824 39.4 70.672824 50l.300781 4.5v.300781a39.3 39.3 0 0 0 4.398438 14L75.473605 69v.09961a40 40 0 0 0 9 11.09961A4 4 0 0 1 84.672824 86a75 75 0 0 1-1.5 1.400391 4 4 0 0 1-5.400391.199218 49.9 49.9 0 0 1 0-75.298828 4 4 0 0 1 2.50586-.953125zm14.345703 14.189453a4 4 0 0 1 2.849609 1.263672l1 1L98.672824 28a4 4 0 0 1-.199219 6.199219A20 20 0 0 0 90.672824 50a20 20 0 0 0 7.900391 15.800781 4 4 0 0 1 1 5L99.473605 71a4 4 0 0 1-.601562.800781l-.5.5-.898438 1c-.9.7-1.9 1.09961-3 1.09961a4 4 0 0 1-2.201172-.701172v-.09961a30 30 0 0 1-2.699218-45l2.5-2.199218a4 4 0 0 1 2.550781-.863282zM19.827044 11.348062a4 4 0 0 0-2.89453 1.152343l-1.5 1.5-.5.699219h-.0996v.101562a4 4 0 0 0-.0996 3.59961v.298828a4 4 0 0 0 .59961.800781 35 35 0 0 1 2 1.800782l.0996.199219h.0996a44 44 0 0 1 1 1l.0996.199219c6.7 7.1 10.80078 16.700781 10.80078 27.300781l-.30078 4.5v.300781a39.3 39.3 0 0 1-4.39844 14l-.10156.199219v.09961a40 40 0 0 1-9 11.09961 4 4 0 0 0-.19922 5.80078 75 75 0 0 0 1.5 1.400391 4 4 0 0 0 5.40039.199218 49.9 49.9 0 0 0 0-75.298829 4 4 0 0 0-2.50586-.953124zM5.4813434 25.537515a4 4 0 0 0-2.849609 1.263672l-1 1-.199219.199219a4 4 0 0 0 .199219 6.199219 20 20 0 0 1 7.800781 15.800781 20 20 0 0 1-7.900391 15.800781 4 4 0 0 0-.99999997 5l.09961.199219a4 4 0 0 0 .60156197.800781l.5.5.898438 1c.9.7 1.9 1.09961 3 1.09961a4 4 0 0 0 2.201172-.701172v-.09961a30 30 0 0 0 2.6992176-45l-2.4999996-2.199218a4 4 0 0 0-2.550781-.863282z"/></svg>`;

// audioChannelMode: 0=raw, 1=mono, 2=only left, 3=only right, 4=boost left, 5=boost right
let previousVideoSource = null;
let videoContextMap = new WeakMap();

const changeAudioChannel = () => {
  let el = document.querySelector(".player-video > video");
  if (!el) {
    return;
  }
  let cx = getChannelContext(el);
  if (!cx.ac) {
    // create audio context
    cx.audioChannelMode = 1;
    cx.ac = new(window.AudioContext || window.webkitAudioContext)();
    cx.source = cx.ac.createMediaElementSource(el);
    cx.splitter = cx.ac.createChannelSplitter(2);
    cx.merger = cx.ac.createChannelMerger(2);
    cx.gainl = cx.ac.createGain();
    cx.gainr = cx.ac.createGain();

    cx.source.connect(cx.splitter);
    updateChannelGain(cx, 50);
    cx.splitter.connect(cx.gainl, 0);
    cx.splitter.connect(cx.gainr, 1);

    cx.gainl.connect(cx.merger, 0, 0);
    cx.gainl.connect(cx.merger, 0, 1);
    cx.gainr.connect(cx.merger, 0, 0);
    cx.gainr.connect(cx.merger, 0, 1);

    cx.merger.connect(cx.ac.destination);
    return;
  }
  // change audio channel
  cx.audioChannelMode = (cx.audioChannelMode + 1) % 6;
  if (cx.audioChannelMode === 0) {
    cx.source.disconnect();
    cx.splitter.disconnect();
    cx.merger.disconnect();
    cx.gainl.disconnect();
    cx.gainr.disconnect();
    cx.source.connect(cx.ac.destination);
    return;
  } else if (cx !== null) {
    if (cx.audioChannelMode === 1) {
      updateChannelGain(cx, 50);
    } else if (cx.audioChannelMode === 2) {
      updateChannelGain(cx, 100);
    } else if (cx.audioChannelMode === 3) {
      updateChannelGain(cx, 0);
    } else if (cx.audioChannelMode === 4) {
      updateChannelGain(cx, 80);
    } else if (cx.audioChannelMode === 5) {
      updateChannelGain(cx, 20);
    }

    cx.source.disconnect();
    cx.source.connect(cx.splitter);
    cx.splitter.connect(cx.gainl, 0);
    cx.splitter.connect(cx.gainr, 1);
    cx.gainl.connect(cx.merger, 0, 1);
    cx.gainr.connect(cx.merger, 0, 0);
    cx.gainr.connect(cx.merger, 0, 1);
    cx.gainl.connect(cx.merger, 0, 0);
    cx.merger.connect(cx.ac.destination);
    return;
  }
}


const observerVideoSourceChange = () => {
  let el = document.querySelector(".player-video > video");
  if (!el) {
    setTimeout(observerVideoSourceChange, 3000); // 3sec
    return;
  }
  // exists video
  let isSoureChange = false;

  if (el && el.src !== previousVideoSource) {
    isSoureChange = true;
    previousVideoSource = el.src;
  }
  let btnEllm = document.getElementById("twitch-mono-btn");
  if (btnEllm === null) {
    addPlayerButton();
  }
  if (isSoureChange) {
    updateButtonStyle();
  }

  setTimeout(observerVideoSourceChange, 3000); // 3sec
};

const initialize = () => {
  observerVideoSourceChange();
};


function updateChannelGain(cx, gainLeft) {
  if (cx === null) {
    return;
  }
  cx.gainl.gain.value = gainLeft / 100;
  cx.gainr.gain.value = (100 - gainLeft) / 100;
}



function addPlayerButton() {
  if (document.getElementById("twitch-mono-btn")) {
    return;
  }
  let el = document.querySelector(".player-video > video");
  if (!el) {
    return;
  }
  let buttonContainerElm = document.querySelector("div[class='player-buttons-left']");
  if (!buttonContainerElm) {
    return;
  }
  let cx = getChannelContext(el);
  let btnElm = document.createElement("button");
  let spanRootElm = document.createElement("span");
  let spanTipElm = document.createElement("span");

  btnElm.classList.add("player-button");
  btnElm.type = "button";
  btnElm.id = "twitch-mono-btn";
  spanRootElm.id = "twitch-mono-root";
  spanTipElm.classList.add("player-tip");
  spanTipElm.setAttribute("data-tip", "Raw");
  spanTipElm.id = "twitch-mono-btn-tip";

  buttonContainerElm.appendChild(btnElm);
  btnElm.appendChild(spanRootElm);

  spanRootElm.innerHTML = SVG_BUTTON;
  spanRootElm.appendChild(spanTipElm);

  updateButtonStyle();
  btnElm.addEventListener("click", () => {
    changeAudioChannel();
    updateButtonStyle();
  }, false);
}

function getChannelContext(el) {
  let cx = {};
  if (!videoContextMap.has(el)) {
    videoContextMap.set(el, cx);
    cx.audioChannelMode = 0;
  } else {
    cx = videoContextMap.get(el);
  }
  return cx;
}

function updateButtonStyle() {
  let el = document.querySelector(".player-video > video");
  if (!el) {
    return;
  }
  let buttonContainerElm = document.querySelector("div[class='player-buttons-left']");
  if (!buttonContainerElm) {
    return;
  }  
  let cx = getChannelContext(el);
  let svgElm = null;
  console.log(cx.audioChannelMode);
  if (cx.audioChannelMode === 0 || cx.audioChannelMode === 4 || cx.audioChannelMode === 5) {
    svgElm = document.getElementById("twitch-mono-svg-stereo");
    let hideSvgElm = document.getElementById("twitch-mono-svg-monoral");
    svgElm.style.display = "block";
    hideSvgElm.style.display = "none";
  } else {
    svgElm = document.getElementById("twitch-mono-svg-monoral");
    let hideSvgElm = document.getElementById("twitch-mono-svg-stereo");
    svgElm.style.display = "block";
    hideSvgElm.style.display = "none";
  }
  let spanTipElm = document.getElementById("twitch-mono-btn-tip");
  if (cx.audioChannelMode === 1) {
    spanTipElm.setAttribute("data-tip", "Mono");
    svgElm.setAttribute("viewBox", "0 -30 100 150");
  } else if (cx.audioChannelMode === 2) {
    spanTipElm.setAttribute("data-tip", "Only left");
    svgElm.setAttribute("viewBox", "50 -30 150 150");
  } else if (cx.audioChannelMode === 3) {
    spanTipElm.setAttribute("data-tip", "Only right");
    svgElm.setAttribute("viewBox", "-50 -30 50 150");
  } else if (cx.audioChannelMode === 4) {
    spanTipElm.setAttribute("data-tip", "Boost left");
    svgElm.setAttribute("viewBox", "-9 -30 22 150");
  } else if (cx.audioChannelMode === 5) {
    spanTipElm.setAttribute("data-tip", "Boost right");
    svgElm.setAttribute("viewBox", "48 -30 100 150");
  } else {
    spanTipElm.setAttribute("data-tip", "Raw");
    svgElm.setAttribute("viewBox", "0 -30 100 150");
  }
}

window.addEventListener("load", (evt) => {
  initialize();
}, false);