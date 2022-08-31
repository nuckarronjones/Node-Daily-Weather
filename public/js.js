window.onload = function () {
  let typedResponses = $(".typeWriter");

  //promise for async function. 'await' is now a sync task in typeWriterAnimation and loop waits for promise to resolve before continuing
  let delayTimer = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 80);
    });
  };

  async function typeWriterAnimation() {
    //2d array, one for the classes and another for the data-weather attributes
    for (let i = 0; i < typedResponses.length; i++) {
      let word = $(typedResponses[i]).attr("data-weather");

      for (let j = 0; j < word.length; j++) {
        $(typedResponses[i]).append(word.charAt(j));

        await delayTimer(); //wait until promise resolves with delay, then next loop continues
      }
    }
  }

  typeWriterAnimation();
};
