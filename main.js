gsap.registerPlugin(ScrollTrigger);

let mainWrapper = gsap.utils.toArray(".wrapper");
let cardElements = gsap.utils.toArray(".card");

gsap.set("#greetingHeader1", { opacity: 0 });
gsap.set("#greetingHeader2", { xPercent: -125 });

gsap.set("#workHeader1", { opacity: 0 });
gsap.set("#workHeader2", { opacity: 0 });

gsap.set("#scrollArrow", { opacity: 0 });

mainWrapper.forEach((wrapper) => {
  let wrapperElements = wrapper.querySelectorAll(".wrapper");

  let tl1 = gsap.timeline();

  tl1.to("#greetingHeader1", {
    keyframes: [{ delay: 0.5, autoAlpha: 1 }],
  });
  tl1.to(
    "#greetingHeader2",
    {
      xPercent: 0,
      duration: 0.5,
      delay: 0.5,
    },
    "<"
  );
  tl1.to("#scrollArrow", {
    autoAlpha: 1,
    delay: 0.25,
  });
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".wrapper",
    pin: false,
    markers: false,
    scrub: true,
    start: 100,
    end: 400,
  },
});

tl2.to("#workHeader1", {
  opacity: 1,
});

tl2.to(
  "#workHeaderOverlay",
  {
    opacity: 1,
  },
  "<"
);

tl2.to(
  "#workHeader2",
  {
    opacity: 1,
  },
  "<"
);

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#camera",
    pin: false,
    // markers: true,
    scrub: 2,
    start: "bottom bottom",
    end: "center center",
  },
});

tl3.from("#box1", {
  keyframes: [{ scrub: true }, { x: -485.5 }, { x: -1200 }],
});

tl3.to("#box2", {
  keyframes: [
    {
      x: -1200,
    },
  ],
});

tl3.to("#box3", {
  keyframes: [
    {
      y: -96,
    },
    { x: -1200 },
  ],
});

tl3.to("#box4", {
  keyframes: [
    {
      y: 96,
    },
    { x: 1200 },
  ],
});

tl3.to("#box5", {
  keyframes: [
    {
      x: 1200,
    },
  ],
});

tl3.to("#box6", {
  keyframes: [{ x: 1200 }],
});
