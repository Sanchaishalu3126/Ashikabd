document.addEventListener("DOMContentLoaded", () => {


    // =========================================
    // PASSWORD
    // =========================================

    const CORRECT_PASSWORD = "2011";

    let enteredPassword = "";


    // =========================================
    // ELEMENTS
    // =========================================

    const keys =
        document.querySelectorAll(
            ".key[data-number]"
        );

    const deleteBtn =
        document.getElementById(
            "deleteBtn"
        );

    const passDisplay =
        document.getElementById(
            "passDisplay"
        );

    const dots =
        passDisplay.querySelectorAll(
            "span"
        );


    // =========================================
    // TAP SOUND
    // =========================================

    let audioContext = null;


    function playTapSound() {

        // Create audio context after
        // the user's first tap

        if (!audioContext) {

            const AudioContext =
                window.AudioContext ||
                window.webkitAudioContext;

            if (!AudioContext) {
                return;
            }

            audioContext =
                new AudioContext();

        }


        // Resume audio if phone suspended it

        if (
            audioContext.state ===
            "suspended"
        ) {

            audioContext.resume();

        }


        // Create short tap sound

        const oscillator =
            audioContext.createOscillator();

        const gainNode =
            audioContext.createGain();


        // Soft electronic tap

        oscillator.type = "sine";


        oscillator.frequency.setValueAtTime(
            750,
            audioContext.currentTime
        );


        oscillator.frequency.exponentialRampToValueAtTime(
            420,
            audioContext.currentTime + 0.055
        );


        // Volume

        gainNode.gain.setValueAtTime(
            0.10,
            audioContext.currentTime
        );


        gainNode.gain.exponentialRampToValueAtTime(
            0.001,
            audioContext.currentTime + 0.07
        );


        // Connect sound

        oscillator.connect(gainNode);

        gainNode.connect(
            audioContext.destination
        );


        // Play

        oscillator.start();

        oscillator.stop(
            audioContext.currentTime + 0.07
        );

    }


    // =========================================
    // UPDATE PASSWORD DISPLAY
    // =========================================

    function updateDisplay() {

        dots.forEach((dot, index) => {

            if (
                index <
                enteredPassword.length
            ) {

                dot.classList.add(
                    "active"
                );

            } else {

                dot.classList.remove(
                    "active"
                );

            }

        });

    }


    // =========================================
    // CHECK PASSWORD
    // =========================================

    function checkPassword() {

        if (
            enteredPassword.length !== 4
        ) {

            return;

        }


        // =====================================
        // CORRECT PASSWORD
        // =====================================

        if (
            enteredPassword ===
            CORRECT_PASSWORD
        ) {

            window.location.href =
                "loading.html";

        }


        // =====================================
        // WRONG PASSWORD
        // =====================================

        else {

            passDisplay.classList.add(
                "error"
            );


            setTimeout(() => {

                passDisplay.classList.remove(
                    "error"
                );

            }, 400);


            enteredPassword = "";

            updateDisplay();

        }

    }


    // =========================================
    // NUMBER KEYS
    // =========================================

    keys.forEach(key => {

        key.addEventListener(
            "click",
            () => {


                // Don't allow more
                // than 4 numbers

                if (
                    enteredPassword.length >= 4
                ) {

                    return;

                }


                // =================================
                // PLAY TAP SOUND
                // =================================

                playTapSound();


                // =================================
                // ADD NUMBER
                // =================================

                enteredPassword +=
                    key.dataset.number;


                // =================================
                // UPDATE DOTS
                // =================================

                updateDisplay();


                // =================================
                // CHECK AFTER 4 DIGITS
                // =================================

                if (
                    enteredPassword.length === 4
                ) {

                    setTimeout(
                        checkPassword,
                        250
                    );

                }

            }
        );

    });


    // =========================================
    // DELETE BUTTON
    // =========================================

    deleteBtn.addEventListener(
        "click",
        () => {


            // Play tap sound

            playTapSound();


            // Remove last digit

            enteredPassword =
                enteredPassword.slice(
                    0,
                    -1
                );


            // Update display

            updateDisplay();

        }
    );


    // =========================================
    // INITIAL DISPLAY
    // =========================================

    updateDisplay();

});
