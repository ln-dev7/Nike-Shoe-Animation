import "./style.scss";
import gsap from "gsap";

const images = document.querySelectorAll('img');

const timeline = gsap.timeline({ repeat: -1 });

images.forEach((image, index) => {
  timeline.to(image, { display: "block", duration: 0, onComplete: () => {
    images.forEach((img, i) => {
      if (i !== index) {
        gsap.set(img, { display: "none" });
      }
    });
  }})
  .to(image, { display: "none", duration: 0.05 }, "+=0.05");
});

timeline.play();