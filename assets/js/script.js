window.addEventListener("scroll", function () {
    AOS.refresh();
});

AOS.init({
    duration: 800,
    once: false,
    offset: 100,
    anchorPlacement: "top-bottom", 
    easing: "ease-in-out",
    disable: "mobile", 
});

// Typing Animation
new Typed("#typed-text", {
    strings: ["Achmad Ryan Maulana", "Web Developer", "UI/UX Designer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});