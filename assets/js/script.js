let totalSliders = document.querySelectorAll('.slider-item').length
document.querySelector('.slider-width').style.width = `calc (1360px * ${totalSliders})`

let currentSlider = 0


function goNext() {
    currentSlider++
    if (currentSlider > (totalSliders - 1)) {
        currentSlider = 0
    }

    sliders()
}

function sliders() {
    let widthSlider = document.querySelector('.slider-item').clientWidth
    let newMargin = currentSlider * widthSlider
    document.querySelector('.slider-width').style.marginLeft = `${newMargin}px`
}

setInterval((=> {
    goNext()
}, 4000)

