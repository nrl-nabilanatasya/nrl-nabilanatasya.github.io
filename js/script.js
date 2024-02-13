$(document).ready(function() {
    // call to function change color
    changeColor();

    // call to function text animation
    textAnimation();
});

// function change color
function changeColor() {
  var o = [
    {"--main-color-one": "#6a7d73", "--main-color-two": "#bfa07a", "--main-color-three": "#465454"},
    {"--main-color-one": "#5d576b", "--main-color-two": "#d496a7", "--main-color-three": "#f1dede"},
    {"--main-color-one": "#708c8e", "--main-color-two": "#bfa07a", "--main-color-three": "#4d5656"}
  ],
      n = 0,
      e = document.documentElement;
  $("#color").on("click", (function() {
      var c = o[n];
      Object.keys(c).forEach((function(o) {
          e.style.setProperty(o, c[o])
      })), n = n + 1 === o.length ? 0 : n + 1
  }))
}

function textAnimation() {
  "use strict";
  let t = document.querySelectorAll(".word");
  t.forEach((t => {
      let e = t.textContent.split("");
      t.textContent = "", e.forEach((e => {
          let l = document.createElement("span");
          l.textContent = e, l.className = "letter", t.append(l)
      }))
  }));
  let e = 0,
      l = t.length - 1;
  t[e].style.opacity = "1";
  let r = () => {
      let r = t[e],
          a = e === l ? t[0] : t[e + 1];
      Array.from(r.children).forEach(((t, e) => {
          setTimeout((() => {
              t.className = "letter out"
          }), 80 * e)
      })), a.style.opacity = "1", Array.from(a.children).forEach(((t, e) => {
          t.className = "letter behind", setTimeout((() => {
              t.className = "letter in"
          }), 340 + 80 * e)
      })), e = e === l ? 0 : e + 1
  };
  r(), setInterval(r, 4e3)
}