const viewportHeight = (n) => (n * Math.max(document.documentElement.clientHeight, window.innerHeight || 0)) / 100;

const playAudio = () => {
    const tl = gsap.timeline();
    tl.call(() => new Audio("./assets/audio.mp3").play());
    return tl;
};

const animatePeople = () => {
    const parentWidth = document.getElementById("app").clientWidth;
    const tl = gsap.timeline();
    console.log(parentWidth);
    tl.fromTo("#person-1", { x: 0 }, { duration: 3, ease: "circ.out", x: parentWidth + viewportHeight(150), y: viewportHeight(2.5) });
    tl.fromTo("#person-2", { x: 0 }, { duration: 3, ease: "circ.out", x: parentWidth + viewportHeight(150), y: -viewportHeight(2.5) }, 0.5);
    tl.fromTo("#person-3", { x: 0 }, { duration: 3, ease: "circ.out", x: parentWidth + viewportHeight(150), y: viewportHeight(2.5) }, 0.9);
    return tl;
};

const animateText = () => {
    const tl = gsap.timeline();

    tl.to("#text", { duration: 0, opacity: 1 });

    tl.fromTo("#text-line-1", { x: -viewportHeight(100) }, { duration: 0.9, ease: "circ.out", x: 10 });
    tl.fromTo("#text-line-2", { x: -viewportHeight(100) }, { duration: 0.8, ease: "circ.out", x: 10 }, 0.1);
    tl.fromTo("#text-line-3", { x: -viewportHeight(100) }, { duration: 0.7, ease: "circ.out", x: 10 }, 0.2);
    tl.fromTo("#text-line-4", { x: -viewportHeight(100) }, { duration: 0.6, ease: "circ.out", x: 10 }, 0.3);

    tl.to("#text-line-2", { duration: 0, fontSize: viewportHeight(4), x: 20, y: 20 }, 2);
    tl.to("#text-line-1", { duration: 0, opacity: 0 }, 2.1);
    tl.to("#text-line-3", { duration: 0, x: 45 }, 2.15);
    tl.to("#text-line-2", { duration: 0, opacity: 0 }, 2.2);
    tl.to("#text-line-3", { duration: 0, fontSize: viewportHeight(8), x: viewportHeight(8), y: -viewportHeight(18) }, 2.25);
    tl.to("#text-line-4", { duration: 0, fontSize: viewportHeight(7), scaleX: 0.9, x: viewportHeight(6), y: -viewportHeight(18) }, 2.3);

    return tl;
};

const animateBlocks = () => {
    const tl = gsap.timeline();
    tl.to("#top-block", { duration: 1, height: viewportHeight(10), y: -viewportHeight(10) });
    tl.to("#bottom-block", { duration: 1, height: viewportHeight(10), y: -viewportHeight(10) });
    return tl;
};

const animate = () => {
    const tl = gsap.timeline();
    tl.add(playAudio()).add(animatePeople()).add(animateText(), "-=2.5").add(animateBlocks());
    return tl;
};

document.getElementById("play-icon").onclick = () => {
    document.getElementById("play-icon").style.display = "none";
    animate();
};
