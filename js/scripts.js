// Smooth scrolling for anchor links in the navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
//zoom in zoom out
function zoomIn(card) {
    card.style.transform = "scale(1.1)";
    card.style.backgroundColor = "#29b884";
}
function zoomOut(card) {
    card.style.transform = "scale(1)";
    card.style.backgroundColor = "";
}
// zoom in out kal
function In(card) {
    card.style.transform = "scale(1.1)";
}
function Out(card) {
    card.style.transform = "scale(1)";
}
// Slider product
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
