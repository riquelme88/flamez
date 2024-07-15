let title = document.querySelector('.make-budget #title')
let subtitle = document.querySelector('.make-budget #subtitle')
let firstButton = document.querySelector('.budget-button')

function makeBudgetInit() {
    window.onload = (event) => {
        title.classList.remove('opacity-0')
        subtitle.classList.remove('opacity-0')
        firstButton.classList.remove('opacity-0')
    }
}
makeBudgetInit()

let totalSliders = document.querySelectorAll('.slide').length
document.querySelector('.slides').style.width = `calc(100% * ${totalSliders})`

let currentSlider = 0

function goNext() {
    currentSlider++
    if (currentSlider > (totalSliders - 1)) {
        currentSlider = 0
    }

    sliders()
}

function sliders() {
    let widthSlider = document.querySelector('.slide').clientWidth;
    let newMargin = currentSlider * widthSlider
    document.querySelector('.slides').style.marginLeft = ` -${newMargin}px`
}

setInterval(() => {
    goNext()
}, 4000)

setInterval(() => {
    showDivs()
}, 1000)

function showDivs() {
    let firstText = document.querySelector('.first-text')
    let secondText = document.querySelector('.second-text')
    let imgPrinter = document.querySelector('.about-us img')
    let square1 = document.querySelectorAll('.square')[0]
    let square2 = document.querySelectorAll('.square')[1]
    let titleRetangle = document.querySelector('.retangle h1')
    let pRetangle = document.querySelector('.retangle p')
    let linkRetangle = document.querySelector('.retangle a')
    let imgRetangle = document.querySelector('.retangle img')
    if (screen.availWidth > 1900) {
        if (scrollY > 500) {
            imgPrinter.classList.remove('opacity-0')
            firstText.classList.remove('opacity-0')
            secondText.classList.remove('opacity-0')
            setTimeout(() => {
                imgPrinter.style.marginLeft = '1043px'
                firstText.style.marginLeft = '272px'
                secondText.style.marginLeft = '272px'

            }, 100)
        }
        if (scrollY > 1350) {
            square1.classList.remove('opacity-0')
            square2.classList.remove('opacity-0')
            setTimeout(() => {
                square1.style.marginLeft = '0vw'
                square2.style.marginLeft = '0vw'
            }, 100)
        }

        if (scrollY > 3650) {
            titleRetangle.classList.remove('opacity-0')
            pRetangle.classList.remove('opacity-0')
            linkRetangle.classList.remove('opacity-0')
            imgRetangle.classList.remove('opacity-0')
        }
    }
    if (screen.availWidth > 1200 && screen.availWidth < 1500) {
        console.log(scrollY)
        if (scrollY > 700) {
            imgPrinter.classList.remove('opacity-0')
            firstText.classList.remove('opacity-0')
            secondText.classList.remove('opacity-0')
            setTimeout(() => {

                imgPrinter.style.marginLeft = '780px'
                firstText.style.marginLeft = '172px'
                secondText.style.marginLeft = '172px'

            }, 100)
        }
        if (scrollY > 1350) {
            square1.classList.remove('opacity-0')
            square2.classList.remove('opacity-0')
            setTimeout(() => {
                square1.style.marginLeft = '0vw'
                square2.style.marginLeft = '0vw'
            }, 100)
        }
        if (scrollY > 3450) {
            titleRetangle.classList.remove('opacity-0')
            pRetangle.classList.remove('opacity-0')
            linkRetangle.classList.remove('opacity-0')
            imgRetangle.classList.remove('opacity-0')
        }
    }

    if (screen.availWidth > 799 && screen.availWidth < 1025) {
        if (scrollY > 350) {
            imgPrinter.classList.remove('opacity-0')
            firstText.classList.remove('opacity-0')
            secondText.classList.remove('opacity-0')
            setTimeout(() => {

                imgPrinter.style.marginLeft = '500px'
                firstText.style.marginLeft = '72px'
                secondText.style.marginLeft = '72px'

            }, 100)
        }

        if (scrollY > 1450) {
            square1.classList.remove('opacity-0')
            square2.classList.remove('opacity-0')
            setTimeout(() => {
                square1.style.marginLeft = '0vw'
                square2.style.marginLeft = '0vw'
            }, 100)
        }

        if (scrollY > 3350) {
            titleRetangle.classList.remove('opacity-0')
            pRetangle.classList.remove('opacity-0')
            linkRetangle.classList.remove('opacity-0')
            imgRetangle.classList.remove('opacity-0')
        }
    }

    if (screen.availWidth < 798 && screen.availWidth > 500) {
        if (scrollY > 200) {
            imgPrinter.classList.remove('opacity-0')
            firstText.classList.remove('opacity-0')
            secondText.classList.remove('opacity-0')

            setTimeout(() => {

                imgPrinter.style.marginLeft = '500px'
                firstText.style.marginLeft = '72px'
                secondText.style.marginLeft = '72px'

            }, 100)
        }
        if (scrollY > 1000) {
            square1.classList.remove('opacity-0')
            square2.classList.remove('opacity-0')
            setTimeout(() => {
                square1.style.marginLeft = '0vw'
                square2.style.marginLeft = '0vw'
            }, 100)
        }
        if (scrollY > 3950) {
            titleRetangle.classList.remove('opacity-0')
            pRetangle.classList.remove('opacity-0')
            linkRetangle.classList.remove('opacity-0')
            imgRetangle.classList.remove('opacity-0')
        }
    }

    if (screen.availWidth < 500) {
        console.log(scrollY)
        if (scrollY > 100) {
            imgPrinter.classList.remove('opacity-0')
            firstText.classList.remove('opacity-0')
            secondText.classList.remove('opacity-0')

            setTimeout(() => {

                imgPrinter.style.marginLeft = '210px'
                firstText.style.marginLeft = '42px'
                secondText.style.marginLeft = '42px'

            }, 100)
        }
        if (scrollY > 1100) {
            square1.classList.remove('opacity-0')
            square2.classList.remove('opacity-0')
            setTimeout(() => {
                square1.style.marginLeft = '5vw'
                square2.style.marginLeft = '5vw'
            }, 100)
        }
        if (scrollY > 3450) {
            titleRetangle.classList.remove('opacity-0')
            pRetangle.classList.remove('opacity-0')
            linkRetangle.classList.remove('opacity-0')
            imgRetangle.classList.remove('opacity-0')
        }
    }
}





