
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






