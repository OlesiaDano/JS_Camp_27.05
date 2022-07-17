window.addEventListener("load", () => {

    let nextSlide = 0;

    const change = () => {
        let slides = document.querySelectorAll(".slide-img");
        for (let i=0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        nextSlide++;

        if (nextSlide > slides.length) {
            nextSlide = 1;
        }

        slides[nextSlide - 1].style.display = "block";

        setTimeout(change, 3000);
    };
    
    change();
});