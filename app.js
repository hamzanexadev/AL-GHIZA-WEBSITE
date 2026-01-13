const slidesContainer = document.getElementById("slides-container");
const nextButton = document.getElementById("slide-arrow-next");
const prevButton = document.getElementById("slide-arrow-prev");

nextButton.addEventListener("click", () => {
    const slideWidth = slidesContainer.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
    const slideWidth = slidesContainer.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});
