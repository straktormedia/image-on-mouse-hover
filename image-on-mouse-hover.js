const texts = document.querySelectorAll(".text");
const images = document.querySelectorAll(".image");

texts.forEach((text, i) => {
  text.addEventListener("mouseover", (event) => {
    // Show the corresponding image
    images[i].style.opacity = 1;
    // images[i].style.top = "-20%";
    // images[i].style.left = 0;
  });

  text.addEventListener("mouseout", (event) => {
    // Hide the corresponding image when the mouse moves out of the text
    images[i].style.opacity = 0;
  });

  window.addEventListener("mousemove", (event) => {
    // Update the position of the image as the mouse moves

    images[i].style.transform = `translate(${event.pageX - 50}px, ${
      event.pageY - 50
    }px)`;

    // console.log(event.pageX, event.pageY);
  });
});
