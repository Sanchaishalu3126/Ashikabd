document.addEventListener("DOMContentLoaded", function () {

    const book = document.getElementById("book");
    const flipPage = document.getElementById("flipPage");
    const flipImage = document.getElementById("flipImage");
    const memoryText = document.getElementById("memoryText");
    const instruction = document.getElementById("instruction");
    const dots = document.querySelectorAll("#pageDots span");
    const nextButton = document.getElementById("nextButton");

    const images = [
        "img/diary1.jpg",
        "img/diary2.jpg",
        "img/diary3.jpg",
        "img/diary4.jpg"
    ];

    let currentPage = 0;
    let startX = 0;
    let isAnimating = false;


    // =================================
    // PRELOAD ALL IMAGES
    // =================================

    images.forEach(function (src) {

        const img = new Image();

        img.src = src;

    });


    // =================================
    // UPDATE DOTS
    // =================================

    function updateDots() {

        dots.forEach(function (dot, index) {

            dot.classList.toggle(
                "active",
                index === currentPage - 1
            );

        });

    }


    // =================================
    // SHOW CURRENT MEMORY
    // =================================

    function showMemory() {

        if (currentPage < 1 || currentPage > 4) {
            return;
        }


        // Set image

        flipImage.src = images[currentPage - 1];


        // Set text

        if (currentPage === 4) {

            memoryText.textContent = "It's Us ❤️";

        } else {

            memoryText.textContent = "It's You ❤️";

        }


        // Make sure image is visible

        flipPage.classList.add("active");

    }


    // =================================
    // TURN PAGE
    // =================================

    function turnPage() {

        if (isAnimating) {
            return;
        }


        // Already on last page

        if (currentPage >= 4) {

            nextButton.classList.add("show");

            instruction.textContent =
                "All our memories are here ❤️ Tap NEXT";

            return;

        }


        isAnimating = true;


        // =================================
        // COVER → FIRST IMAGE
        // =================================

        if (currentPage === 0) {

            currentPage = 1;

            showMemory();

            updateDots();

            instruction.textContent =
                "Swipe left for the next memory ❤️";


            setTimeout(function () {

                flipPage.classList.add("flipping");

            }, 30);


            setTimeout(function () {

                flipPage.classList.remove("flipping");

                isAnimating = false;

            }, 950);

            return;
        }


        // =================================
        // IMAGE → NEXT IMAGE
        // =================================

        currentPage++;


        /*
           Remove old animation first
           so the new page can animate correctly.
        */

        flipPage.classList.remove("flipping");


        /*
           Force browser to reset animation
        */

        void flipPage.offsetWidth;


        /*
           Set the new image BEFORE animation
        */

        showMemory();

        updateDots();


        /*
           Start new flip
        */

        setTimeout(function () {

            flipPage.classList.add("flipping");

        }, 30);


        // =================================
        // INSTRUCTIONS
        // =================================

        if (currentPage === 2) {

            instruction.textContent =
                "Keep going... ✨";

        }

        else if (currentPage === 3) {

            instruction.textContent =
                "One more memory ❤️";

        }

        else if (currentPage === 4) {

            instruction.textContent =
                "All our memories are here ❤️";

            nextButton.classList.add("show");

        }


        // =================================
        // FINISH ANIMATION
        // =================================

        setTimeout(function () {

            flipPage.classList.remove("flipping");

            isAnimating = false;

        }, 950);

    }


    // =================================
    // TOUCH START
    // =================================

    book.addEventListener(
        "touchstart",
        function (event) {

            startX =
                event.touches[0].clientX;

        },
        {
            passive: true
        }
    );


    // =================================
    // TOUCH END
    // =================================

    book.addEventListener(
        "touchend",
        function (event) {

            const endX =
                event.changedTouches[0].clientX;

            const distance =
                startX - endX;


            if (distance > 50) {

                turnPage();

            }

        },
        {
            passive: true
        }
    );


    // =================================
    // MOUSE SUPPORT
    // =================================

    book.addEventListener(
        "mousedown",
        function (event) {

            startX = event.clientX;

        }
    );


    book.addEventListener(
        "mouseup",
        function (event) {

            const endX =
                event.clientX;

            const distance =
                startX - endX;


            if (distance > 50) {

                turnPage();

            }

        }
    );


    // =================================
    // NEXT BUTTON
    // =================================

    nextButton.addEventListener(
        "click",
        function () {

            nextButton.style.transform =
                "scale(0.92)";


            setTimeout(function () {

                window.location.assign(
                    "./note.html"
                );

            }, 250);

        }
    );


    // =================================
    // INITIAL STATE
    // =================================

    updateDots();

});