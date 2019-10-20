const parallax = document.querySelector(".parallax__wrapper");
const layers = parallax.children;

function moveLayersDependsOnScroll(wScroll) {

    Array.from(layers).forEach(layer => {

        const divider = layer.dataset.speed;
        const strafe = wScroll * divider/4;

        layer.style.transform = `translateY(-${strafe}%)`;
    })
}

window.addEventListener("scroll", e =>{
    const wScroll = window.pageYOffset;
    moveLayersDependsOnScroll(wScroll);
})