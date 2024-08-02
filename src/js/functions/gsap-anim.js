import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

function animatePrimary(bg, title, subTitle, list, button) {
  const elements = [bg, title, subTitle, list, button].filter(Boolean);
  if (elements.every(el => document.querySelector(el))) {
    const tl = gsap.timeline();
    tl.fromTo(bg, 
      { opacity: 0, scale: 0.8, x: 100 }, 
      { opacity: 1, scale: 1, x: 0, duration: 1 }, 0.1
    )
    .fromTo(title, 
      { opacity: 0, y: -50 }, 
      { opacity: 1, y: 0 } 
    )
    .fromTo(subTitle, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0 }
    )
    .fromTo(list, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0 }
    )
    .fromTo(button, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0 }
    )
  }
}

function animateHeader() {
  if (document.querySelector('.header')) {
    const tl = gsap.timeline();
    tl.fromTo('.header', 
      { opacity: 0 },
      { opacity: 1 }, 1
    );
  }
}

function animateColumns(columnsClass, columnClass) {
  const columns = document.querySelector(columnsClass);
  const columnItems = document.querySelectorAll(columnClass);

  if (columns && columnItems.length) {
    gsap.fromTo(columns, 
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.inOut", scrollTrigger: {
          trigger: columns,
          start: "top 80%", 
          toggleActions: "play none none none"
      }
    });

    gsap.fromTo(columnItems, 
      { opacity: 0, y: 100, scale: 0.8 }, 
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "back.out(1.7)", stagger: 0.3, scrollTrigger: {
          trigger: columns,
          start: "top 80%", 
          toggleActions: "play none none none"
      }
    });
  }
}

function animateReviewTitle(body) {
  if (document.querySelector(body)) {
    gsap.fromTo(body, 
      { opacity: 0, y: 100 }, 
      { opacity: 1, y: 0, scrollTrigger: {
          trigger: body,
          start: "top 80%"
      }
    });
  }
}

function animatePartnersTitle(title) {
  if (document.querySelector(title)) {
    gsap.fromTo(title, 
      { opacity: 0, y: 100 }, 
      { opacity: 1, y: 0, scrollTrigger: {
          trigger: title,
          start: "top 80%"
      }
    });
  }
}

function animateHelpBody(body) {
  if (document.querySelector(body)) {
    gsap.fromTo(body, 
      { opacity: 0, y: -200 }, 
      { opacity: 1, y: 0, scrollTrigger: {
          trigger: body,
          start: "top 80%"
      }
    });
  }
}

function animateInviteSection(body, column, image) {
  const elements = [body, column, image].filter(Boolean);
  if (elements.every(el => document.querySelector(el))) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: body,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    tl.fromTo(column, 
      { opacity: 0, x: -200 }, 
      { opacity: 1, x: 0, duration: 1 }
    ).fromTo(image, 
      { opacity: 0, x: 200 }, 
      { opacity: 1, x: 0, duration: 1 }, 
      "<"
    );
  }
}
  
  export {
    animatePrimary,
    animateHeader,
    animateColumns,
    animateReviewTitle,
    animatePartnersTitle,
    animateHelpBody,
    animateInviteSection
  };