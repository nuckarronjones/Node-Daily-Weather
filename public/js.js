window.onload = function () {
  let typedResponses = $(".typeWriter");

  let delayTimer = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 80);
    });
  };

  async function typeWriterAnimation() {
    for (let i = 0; i < typedResponses.length; i++) {
      let word = $(typedResponses[i]).attr("data-weather");

      let currentChars = "";

      for (let j = 0; j < word.length; j++) {
        currentChars += word.charAt(j);
        $(typedResponses[i]).html(currentChars + "▌");
        await delayTimer();
      }

      $(typedResponses[i]).html($(typedResponses[i]).html().slice(0, -1));
    }
  }

  typeWriterAnimation();
};