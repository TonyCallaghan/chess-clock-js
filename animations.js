const content = document.getElementsByClassName('content');
const fadeOut = () => {
    TweenMax.to(".myBtn", 1, {
         y: -100,
         opacity: 0,
    });

    TweenMax.to(".screen", 2, {
         y: -400,
         opacity: 0,
         ease: Power2.easeInOut,
         delay: 2,
    });

    TweenMax.from(".overlay", 2, {
         ease: Power2.easeInOut,
    });

    TweenMax.to(".overlay", 2, {
         delay: 2.6,
         top: "-110%",
         ease: Expo.easeInOut,
    });

    TweenMax.to(".overlay-2", 2, {
         delay: 3,
         top: "-110%",
         ease: Expo.easeInOut,
    });

    TweenMax.from(".content", 2, {
         delay: 3.2,
         opacity: 0,
         y: 600,
         ease: Power2.easeInOut,
    });

    TweenMax.to(".content", 2, {
         opacity: 1,
         
         delay: 3.2,
         ease: Power2.easeInOut,
    });

    TweenMax.from(".main", 2, {
         delay: 3.5,
         opacity: 0,
         x: -300,
         ease: Power2.easeInOut,
    });

    TweenMax.to(".main", 2, {
         opacity: 1,
         delay: 3.5,
         ease: Power2.easeInOut,
    });
    content[0].style.zIndex = "2";
};

const changeBG = () => {
    content[0].classList.toggle('dark');
    switcher();
    document.getElementById('toggle').innerText="     ";
};
