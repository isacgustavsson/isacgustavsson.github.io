gsap.registerPlugin(ScrollTrigger);

let heroElements = gsap.utils.toArray(".hero");
let cardElements = gsap.utils.toArray(".card");

gsap.set("#greetingHeader1", { opacity: 0 });
gsap.set("#greetingHeader2", { xPercent: -125 });

gsap.set("#scrollArrow", { opacity: 0 });

heroElements.forEach((hero) => {
  let heroes = hero.querySelectorAll(".hero");

  let tl = gsap.timeline();

  tl.to("#greetingHeader1", {
    keyframes: [{ delay: 0.5, autoAlpha: 1 }],
  });
  tl.to(
    "#greetingHeader2",
    {
      xPercent: 0,
      duration: 0.5,
      delay: 0.5,
    },
    "<"
  );
  tl.to("#scrollArrow", {
    autoAlpha: 1,
    delay: 0.25,
  });
});

cardElements.forEach((card) => {
  let cardBoxes = card.querySelectorAll(".overlaybox");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#card1",
      pin: false,
      // markers: true,
      scrub: true,
      start: 1100,
      end: 1300,
    },
  });

  tl.to("#box1", {
    keyframes: [{ x: -485.5 }, { y: 480 }, { x: -364.5 }],
  });

  tl.to("#box2", {
    keyframes: [
      {
        x: -606.5,
      },
      { y: 480 },
    ],
  });

  tl.to("#box3", {
    keyframes: [
      {
        y: -96,
      },
      { x: -606.5 },
      { y: 288 },
    ],
  });

  tl.to("#box4", {
    keyframes: [
      {
        y: 96,
      },
      { x: 605.5 },
      { y: -385 },
      { x: 486 },
    ],
  });

  tl.to("#box5", {
    keyframes: [
      {
        x: 605.5,
      },
      { y: -480 },
    ],
  });

  tl.to("#box6", {
    keyframes: [{ x: 486.5 }, { y: -386 }],
  });
});
