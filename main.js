gsap.registerPlugin(ScrollTrigger);

function initFolioHeroSmoothScroll() {
  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.1,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

function initFolioHero() {
  const section = document.querySelector(".folio-hero");
  const topTitle = document.querySelector(".folio-hero__top-title");
  const compactNav = document.querySelector(".folio-hero__compact-nav");
  const midline = document.querySelector(".folio-hero__midline");
  const folioTitle = document.querySelector(".folio-hero__folio-title");
  const bottomCopy = document.querySelector(".folio-hero__bottom-copy");
  const cubeWrap = document.querySelector(".folio-hero__cube-wrap");
  const cube = document.querySelector(".folio-hero__cube");
  const light = document.querySelector(".folio-hero__light");
  const watermark = document.querySelector(".folio-hero__watermark");
  const workIntro = document.querySelector(".folio-hero__work-intro");

  if (!section || !topTitle || !cubeWrap || !cube) return;

  // const getCubeScaleToReferenceSize = () => {
  //   const cubeHeight = cubeWrap.offsetHeight || 120;
  //   return (window.innerHeight * 0.86) / cubeHeight;
  // };

  const getCubeScaleToReferenceSize = () => {
    const cubeHeight = cubeWrap.offsetHeight || 120;
    const isMobile = window.innerWidth <= 640;

    if (isMobile) {
      return (window.innerWidth * 0.82) / cubeHeight;
    }

    return (window.innerHeight * 0.86) / cubeHeight;
  };

  const getTitleTargetX = () => {
    const rect = topTitle.getBoundingClientRect();
    return -rect.left + 24;
  };

  const getTitleTargetY = () => {
    const rect = topTitle.getBoundingClientRect();
    return -rect.top + 24;
  };

  gsap.set(compactNav, {
    opacity: 0,
    y: -4,
  });

  gsap.set(cubeWrap, {
    opacity: 0,
    scale: 0.35,
    xPercent: -50,
    yPercent: -50,
    x: 0,
    y: 0,
    z: 0,
  });

  gsap.set(cube, {
    rotateX: -20,
    rotateY: 34,
    rotateZ: 8,
  });

  const tl = gsap.timeline({
    defaults: {
      ease: "none",
    },
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });

  tl.to(
    midline,
    {
      yPercent: -120,
      duration: 0.12,
    },
    0.04,
  );

  tl.to(
    folioTitle,
    {
      yPercent: -120,
      duration: 0.16,
    },
    0.08,
  );

  tl.to(
    topTitle,
    {
      scale: 0.19,
      x: getTitleTargetX,
      y: getTitleTargetY,
      duration: 0.22,
    },
    0.18,
  );

  tl.to(
    compactNav,
    {
      opacity: 1,
      y: 0,
      duration: 0.06,
    },
    0.3,
  );

  tl.to(
    cubeWrap,
    {
      opacity: 1,
      scale: 1,
      duration: 0.08,
    },
    0.24,
  );

  tl.to(
    cube,
    {
      rotateX: 185,
      rotateY: -240,
      rotateZ: 28,
      duration: 0.24,
    },
    0.24,
  );

  tl.to(
    light,
    {
      yPercent: -100,
      duration: 0.18,
    },
    0.45,
  );

  tl.to(
    topTitle,
    {
      color: "#050505",
      duration: 0.01,
    },
    0.5,
  );

  tl.to(
    compactNav,
    {
      color: "#050505",
      duration: 0.01,
    },
    0.5,
  );

  tl.to(
    bottomCopy,
    {
      color: "#050505",
      duration: 0.01,
    },
    0.5,
  );

  tl.to(
    watermark,
    {
      opacity: 1,
      x: "-54vw",
      duration: 0.2,
    },
    0.5,
  );

  tl.to(
    cubeWrap,
    {
      scale: getCubeScaleToReferenceSize,
      x: 0,
      y: 0,
      z: 0,
      duration: 0.22,
    },
    0.52,
  );

  tl.to(
    cube,
    {
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      duration: 0.22,
    },
    0.52,
  );

  // tl.to(
  //   cube,
  //   {
  //     rotateX: 0,
  //     rotateY: -2160,
  //     rotateZ: 0,
  //     duration: 1.55,
  //   },
  //   0.76,
  // );

  // tl.to(
  //   cubeWrap,
  //   {
  //     y: "-32vh",
  //     duration: 0.18,
  //   },
  //   1.25,
  // );

  // tl.to(
  //   cube,
  //   {
  //     rotateX: 0,
  //     rotateY: -2160,
  //     rotateZ: 0,
  //     duration: 0.18,
  //   },
  //   1.25,
  // );

  tl.to(
    cube,
    {
      rotateX: 0,
      rotateY: -360,
      rotateZ: 0,
      duration: 0.7,
    },
    0.76,
  );

  tl.to(
    cubeWrap,
    {
      y: "-32vh",
      duration: 0.18,
    },
    1.46,
  );

  tl.to(
    workIntro,
    {
      opacity: 1,
      yPercent: -10,
      duration: 0.1,
    },
    1.08,
  );

  tl.to(
    watermark,
    {
      opacity: 0.38,
      x: "-86vw",
      duration: 0.18,
    },
    1.06,
  );
}

function initProjectsReel() {
  const section = document.querySelector(".projects-reel");
  const pin = document.querySelector(".projects-reel__pin");
  const introText = document.querySelector(".projects-reel__intro-text");
  const cross = document.querySelector(".projects-reel__cross");
  const title = document.querySelector(".projects-reel__title");
  const titleLetters = gsap.utils.toArray(".projects-reel__letter");
  const cards = gsap.utils.toArray(".projects-reel__card");
  const skills = document.querySelector(".projects-reel__skills");
  const skillItems = gsap.utils.toArray(".projects-reel__skill");
  const projectCubeWrap = document.querySelector(".projects-reel__cube-wrap");
  const projectCube = document.querySelector(".projects-reel__cube");

  if (!section || !pin || !cards.length || !title || !titleLetters.length)
    return;

  gsap.set(cards, {
    xPercent: -50,
    yPercent: -50,
    transformOrigin: "50% 86%",
  });

  gsap.set(titleLetters, {
    yPercent: 0,
  });

  if (skills) {
    gsap.set(skills, {
      autoAlpha: 0,
    });
  }

  if (projectCubeWrap && projectCube) {
    gsap.set(projectCubeWrap, {
      autoAlpha: 0,
      xPercent: -50,
      yPercent: 0,
      scale: 1,
    });

    // gsap.set(projectCube, {
    //   rotateX: -18,
    //   rotateY: 26,
    //   rotateZ: 0,
    // });

    gsap.set(projectCube, {
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    });
  }

  if (skills && skillItems.length && projectCube) {
    skillItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const rotateX = Number(item.dataset.cubeX || 0);
        const rotateY = Number(item.dataset.cubeY || 0);
        const rotateZ = Number(item.dataset.cubeZ || 0);

        skills.classList.add("is-hovering");

        skillItems.forEach((skill) => {
          skill.classList.toggle("is-active", skill === item);
        });

        gsap.to(projectCube, {
          rotateX,
          rotateY,
          rotateZ,
          duration: 0.65,
          ease: "power3.out",
        });
      });

      item.addEventListener("mouseleave", () => {
        skills.classList.remove("is-hovering");

        skillItems.forEach((skill) => {
          skill.classList.remove("is-active");
        });
      });
    });
  }

  const getCardPath = (index) => {
    const isMobile = window.innerWidth <= 640;
    const isTablet = window.innerWidth <= 980;
    const tabletYOffsets = [-7, 6, 18, -1, 13];
    const desktopYOffsets = [-4, 5, 12, 0, 8];
    const addVh = (value, offset) => `${parseFloat(value) + offset}vh`;

    if (isMobile) {
      return {
        startX: "92vw",
        hitX: "16vw",
        reboundX: "-16vw",
        exitX: "-92vw",
        startY: "10vh",
        hitY: "10vh",
        reboundY: "10vh",
        exitY: "10vh",
        stagger: 0.86,
        hideInactive: true,
      };
    }

    if (isTablet) {
      const yOffset = tabletYOffsets[index % tabletYOffsets.length];

      return {
        startX: "84vw",
        hitX: "20vw",
        reboundX: "-7vw",
        exitX: "-84vw",
        startY: addVh("-2vh", yOffset),
        hitY: addVh("17vh", yOffset),
        reboundY: addVh("3vh", yOffset),
        exitY: addVh("-1vh", yOffset),
        stagger: 0.28,
      };
    }

    const yOffset = desktopYOffsets[index % desktopYOffsets.length];

    return {
      startX: "78vw",
      hitX: "28vw",
      reboundX: "4vw",
      exitX: "-72vw",
      startY: addVh("2vh", yOffset),
      hitY: addVh("22vh", yOffset),
      reboundY: addVh("6vh", yOffset),
      exitY: addVh("2vh", yOffset),
      stagger: 0.22,
    };
  };

  const tl = gsap.timeline({
    defaults: {
      ease: "none",
    },
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });

  let cardsEndAt = 0;

  cards.forEach((card, index) => {
    const path = getCardPath(index);
    const startAt = index * path.stagger;
    const endAt = startAt + 0.8;

    cardsEndAt = Math.max(cardsEndAt, endAt);

    const startRotation = index % 2 === 0 ? 12 : -8;
    const hitRotation = index % 2 === 0 ? -8 : 7;
    const reboundRotation = index % 2 === 0 ? 5 : -5;
    const exitRotation = index % 2 === 0 ? -14 : 13;

    if (path.hideInactive) {
      tl.set(
        card,
        {
          visibility: "hidden",
          opacity: 1,
        },
        startAt - 0.001,
      );

      tl.set(
        card,
        {
          visibility: "visible",
          opacity: 1,
        },
        startAt,
      );

      tl.set(
        card,
        {
          visibility: "hidden",
          opacity: 1,
        },
        endAt,
      );
    }

    tl.fromTo(
      card,
      {
        opacity: 1,
        x: path.startX,
        y: path.startY,
        rotate: startRotation,
      },
      {
        opacity: 1,
        x: path.hitX,
        y: path.hitY,
        rotate: hitRotation,
        duration: 0.28,
      },
      startAt,
    );

    tl.to(
      card,
      {
        opacity: 1,
        x: path.reboundX,
        y: path.reboundY,
        rotate: reboundRotation,
        duration: 0.18,
      },
      startAt + 0.28,
    );

    tl.to(
      card,
      {
        opacity: 1,
        x: path.exitX,
        y: path.exitY,
        rotate: exitRotation,
        duration: 0.34,
      },
      startAt + 0.46,
    );
  });

  const projectShiftStart = cardsEndAt + 0.16;
  const titleClipStart = projectShiftStart + 0.2;
  const titleClipDuration = 0.72;
  const titleClipStagger = 0.065;
  const titleClipEnd =
    titleClipStart +
    titleClipDuration +
    (titleLetters.length - 1) * titleClipStagger;

  const introFadeOutStart = projectShiftStart + 0.5;
  const skillsStart = titleClipEnd + 0.14;

  tl.to(
    pin,
    {
      backgroundColor: "#a6a6a6",
      duration: 0.22,
    },
    projectShiftStart,
  );

  tl.to(
    [introText, cross, title],
    {
      color: "#565656",
      duration: 0.22,
    },
    projectShiftStart,
  );

  tl.to(
    pin,
    {
      backgroundColor: "#4a4a4a",
      duration: 0.26,
    },
    projectShiftStart + 0.24,
  );

  tl.to(
    [introText, cross, title],
    {
      color: "#b7b7b7",
      duration: 0.26,
    },
    projectShiftStart + 0.24,
  );

  tl.to(
    titleLetters,
    {
      yPercent: -120,
      duration: titleClipDuration,
      stagger: titleClipStagger,
    },
    titleClipStart,
  );

  tl.to(
    pin,
    {
      backgroundColor: "#151515",
      duration: 0.32,
    },
    projectShiftStart + 0.54,
  );

  tl.to(
    [introText, cross],
    {
      autoAlpha: 0,
      duration: 0.18,
    },
    introFadeOutStart,
  );

  tl.to(
    pin,
    {
      backgroundColor: "#050505",
      duration: 0.32,
    },
    titleClipEnd - 0.22,
  );

  tl.set(
    title,
    {
      autoAlpha: 0,
    },
    titleClipEnd + 0.01,
  );

  tl.to(
    skills,
    {
      autoAlpha: 1,
      duration: 0.44,
    },
    skillsStart,
  );

  tl.to(
    projectCubeWrap,
    {
      autoAlpha: 1,
      duration: 0.28,
    },
    skillsStart + 0.16,
  );

  tl.to(
    {},
    {
      duration: 0.45,
    },
  );
}

window.addEventListener("load", () => {
  initFolioHeroSmoothScroll();
  initFolioHero();
  initProjectsReel();

  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 300);
});
