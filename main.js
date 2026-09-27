
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


const starSounds = {
    a: {
    sound: "sounds/a_snap.mp3",
    star: "star-a"
    },

    b: {
    sound: "sounds/b_balloon.mp3",
    star: "star-b"
    },

    c: {
    sound: "sounds/c_chime.mp3",
    star: "star-c"
    },

    e: {
    sound: "sounds/e_elephant.mp3",
    star: "star-e"
    }
};

document.addEventListener("keydown", (event) => {

    const key = event.key.toLowerCase();

    if (!starSounds[key]) return;

    // play sound
    const audio = new Audio(starSounds[key].sound);
    audio.play();

    // finding the star
    const star = document.getElementById(starSounds[key].star);

    // flashing star
    star.classList.add("star-active");

    setTimeout(() => {
    star.classList.remove("star-active");
    }, 500);

});


// two different areas for imporvement, 1. the aesthetic & visuals 2. randomness.
// create 3 branches for each improvement, meaning total 6 branches.


const starMap = {
a: document.getElementById("star-a"),
b: document.getElementById("star-b"),
c: document.getElementById("star-c"),
e: document.getElementById("star-e"),
m: document.getElementById("star-m"),
o: document.getElementById("star-o"),
p: document.getElementById("star-p"),
s: document.getElementById("star-s")
};



