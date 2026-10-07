
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


document.addEventListener("keydown", function(event) {

    const key = event.key.toLowerCase();

// ------ RANDOM SIZE --------
const sizes = [80, 150, 300];
const randomSize = sizes[Math.floor(Math.random() * sizes.length)];

// ------ AUDIO --------

    let audio;

    if (key === "a") {
        audio = new Audio("sounds/a_snap.mp3");
    }

        if (key === "b") {
        audio = new Audio("sounds/b_balloon.mp3");
    }

        if (key === "e") {
        audio = new Audio("sounds/e_elephant.mp3");
    }

        if (key === "m") {
        audio = new Audio("sounds/m_moo.mp3");
    }

        if (key === "o") {
        audio = new Audio("sounds/o_owl.mp3");
    }

        if (key === "p") {
        audio = new Audio("sounds/p_pop.mp3");
    }

        if (key === "s") {
        audio = new Audio("sounds/s_shake.mp3");
    }

    // ---------- PITCH ----------
if (audio) {

    if (randomSize <= 80) {
        audio.playbackRate = 1.5; // high pitch
    } 
    
    else if (randomSize <= 150) {
        audio.playbackRate = 1; // normal pitch
    } 
    
    else {
        audio.playbackRate = 0.7; // low pitch
    }

    audio.play();
}

//---------- COLOUR CHANGING ---------

    if (keyColours[key]) {
        document.body.style.backgroundColor = keyColours[key];
    }

//--------- IMAGE APPEARING -------
    if (keyImages[key]) {

        const image = document.createElement("img");
        image.src = keyImages[key].src;

// SIZE
        image.style.width = randomSize + "px";
        image.classList.add("pop-image");


// RANDOM POSITION
        image.style.left = Math.random() * 80 + 10 + "vw";
        image.style.top = Math.random() * 60 + 20 + "vh";

        document.body.appendChild(image);


// FADE OUT
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
    p: "#99e6ff",
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
    p: { src: "img/p.png", size: "230px" },
    s: { src: "img/s.png", size: "250px" },
};

