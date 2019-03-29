// make reading easier!!
// by focusing on a sentence at a time.
let sentence = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate metus et nulla elementum faucibus. Suspendisse ultricies lectus odio, eget tincidunt lorem viverra scelerisque. Praesent efficitur consectetur enim, id porttitor massa placerat ut. Nullam ac ante placerat, accumsan dui non, auctor sapien. Praesent commodo facilisis nisl, quis molestie ante tristique et. Suspendisse gravida tincidunt varius. Suspendisse dapibus fringilla porttitor. Integer quis sodales enim. Sed feugiat sapien sit amet risus laoreet porttitor. Aliquam consequat gravida nisl, quis posuere diam. Duis sit amet rutrum dolor. In sollicitudin at enim ut venenatis. Nullam auctor maximus erat. Nulla dolor arcu, hendrerit faucibus placerat et, pretium non diam. Aenean in tempus nisl."

// break the sentence by period and space
let sentenceBreak = sentence.split(".");
let craftTextToHtml = [];
// embed every sentence with spans.
sentenceBreak.forEach(function (sentence) {
  let format = "<span>" + sentence + "</span>";
  craftTextToHtml.push(format);
});


window.addEventListener("keyup", function (ev) {
  highlightCurrentSentence(ev.keyCode);
});

// on left or right arrow key press highlight the
// current sentence.
let displayTextOnDom = document.querySelector("#text");
displayTextOnDom.innerHTML = craftTextToHtml[0];
let sentenceCountDom = document.querySelector('#sentenceCount');
let currentSentenceCounter = 0;
function highlightCurrentSentence (keycode) {
  if (keycode === 39) {
    if (currentSentenceCounter < craftTextToHtml.length - 1) {
      currentSentenceCounter += 1;
      displayTextOnDom.innerHTML = craftTextToHtml[currentSentenceCounter];
    }
  } else if (keycode === 37) {
    if (currentSentenceCounter > 0) {
      currentSentenceCounter -= 1;
      displayTextOnDom.innerHTML = craftTextToHtml[currentSentenceCounter];
    }
  }

  sentenceCountDom.textContent = 'Amount of sentences left: ' + (currentSentenceCounter + 1) + ' / ' + craftTextToHtml.length;
}