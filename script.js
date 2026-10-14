var textarea = document.getElementById("message");
var counter = document.getElementById("counter");
var warning = document.getElementById("warning");

var maxCharacters = 200;

    textarea.addEventListener("input", function () {
      var typed = textarea.value.length;
      var remaining = maxCharacters - typed;

      counter.textContent =
        `${typed}/${maxCharacters} characters (${remaining} remaining)`;

      if (typed >= maxCharacters) {
        warning.style.display = "block";
      } else {
        warning.style.display = "none";
      }
    });