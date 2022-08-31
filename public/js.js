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
    //2d array, one for the classes and another for the data-weather attributes to be typed in the current class
    for (let i = 0; i < typedResponses.length; i++) {

      let word = $(typedResponses[i]).attr("data-weather"); //data from ejs variables

      let currentChars = "";

      for (let j = 0; j < word.length; j++) {

        currentChars += word.charAt(j);

        $(typedResponses[i]).html(currentChars + "▌"); //the cursor will reset as the loop goes again, as the cursor is not in the currentChars

        await delayTimer(); //wait until promise resolves with delay, then next loop continues
      }

      $(typedResponses[i]).html($(typedResponses[i]).html().slice(0, -1)); //when loop finishes, remove cursor, now it appears to go on the next line
    }
  }

  typeWriterAnimation();
};
