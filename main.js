
// find my test button              const testButton = document.getElementById("test-button");
// find my key test button          const key = document.getElementById("key-test");



// find our intro modal
const introModal = document.getElementById("intro-modal");
// console.log(introModal);

// find modal close button
const introModalCloseButton = document.getElementById("intro-modal-close");


// show modal on page load
introModal.showModal();

// when OK clicked, modal closes
introModalCloseButton.addEventListener("click", function closeIntroModal(){    
// closes modal     
introModal.close();     
});




// This is the instrument ------------------------ //

// const snapSound = new Audio("sounds/Asnap.mp3");


document.addEventListener("keydown", function(event) {

    // Check if the physical keyboard key pressed is A
    if (event.key.toLowerCase() === "a") {
            
        const snapSound = new Audio("sounds/a_snap.mp3");
        snapSound.play();
    }

    if (event.key.toLowerCase() === "b") {

        const balloonSound = new Audio("sounds/b_balloon.mp3");
        balloonSound.play();
    }

    if (event.key.toLowerCase() === "c") {

        const chimeSound = new Audio("sounds/c_chime.mp3");
        chimeSound.play();
    }

    if (event.key.toLowerCase() === "e") {

        const elephantSound = new Audio("sounds/e_elephant.mp3");
        elephantSound.play();
    }

    if (event.key.toLowerCase() === "m") {

        const mooSound = new Audio("sounds/m_moo.mp3");
        mooSound.play();
    }

        if (event.key.toLowerCase() === "o") {

        const owlSound = new Audio("sounds/o_owl.mp3");
        owlSound.play();
    }

    if (event.key.toLowerCase() === "p") {

        const popSound = new Audio("sounds/p_pop.mp3");
        popSound.play();
    }

            if (event.key.toLowerCase() === "s") {

        const shakeSound = new Audio("sounds/s_shake.mp3");
        shakeSound.play();
    }
});


// two different areas for imporvement, 1. the aesthetic & visuals 2. randomness.
// create 3 branches for each improvement, meaning total 6 branches.

//----------colour change---------

document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();


if (keyColours[key]) {
document.body.style.backgroundColor = keyColours[key];
}

//---- image appearing -------
if (keyImages[key]) {
        const image = document.createElement("img");

        image.src = keyImages[key].src;
        image.style.width = keyImages[key].size;
        image.classList.add("pop-image");

        // adjust the position on screen
        image.style.left = Math.random() * 80 + 10 + "vw";
        image.style.top = Math.random() * 60 + 20 + "vh";

        document.body.appendChild(image);

        // fade after animation
        setTimeout(() => {
            image.remove();
        }, 1500);
    }
});

 const keyColours = {
    a: "#ff9ea1",
    b: "#ffb86c",
    c: "#ffd166",
    d: "#a8e6cf",
    e: "#7dd3fc",
    f: "#a78bfa",
    g: "#c4b5fd",
    h: "#f9a8d4",
    i: "#fca5a5",
    j: "#fdba74",
    k: "#a855f7",
    l: "#818cf8",
    m: "#8fc3ca",
    n: "#86efac",
    o: "#ff8c42",
    p: "#f472b6",
    q: "#facc15",
    r: "#fb7185",
    s: "#b5e48a",
    t: "#34abd3",
    u: "#c084fc",
    v: "#f9a8d4",
    w: "#fde68a",
    x: "#93c5fd",
    y: "#86efac",
    z: "#f0abfc"
};

const keyImages = {
    a: { src: "img/a.png", size: "200px" },
    b: { src: "img/b.png", size: "200px" },
    e: { src: "img/e.png", size: "180px" },
    m: { src: "img/m.png", size: "200px" },
    o: { src: "img/o.png", size: "250px" },
    s: { src: "img/s.png", size: "250px" },
};

