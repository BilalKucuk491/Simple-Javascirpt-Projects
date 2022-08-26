const targets = document.querySelectorAll(".container");
const callback = (entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {

      entry.target.querySelector(".image").style.transform = "translateX(" + -(100-(entry.intersectionRatio*100)) + "%)";
      entry.target.querySelector(".image").style.opacity = entry.intersectionRatio;


      entry.target.querySelector(".text").style.transform = "scale(" + entry.intersectionRatio + ")";
      entry.target.querySelector(".text").style.opacity = entry.intersectionRatio;
    }
  }

};

let keys = [...Array(100).keys()].map((key) => "0." + (key < 10 ? "0" + key : key));

const options = {
  threshold: keys,
}
const observer = new IntersectionObserver(callback, options);
targets.forEach((box) => observer.observe(box));