/* ----------------------FORM--------------------------- */
let step = document.getElementsByClassName('step');
let prevBtn = document.getElementById('prev-btn');
let nextBtn = document.getElementById('next-btn');
let submitBtn = document.getElementById('submit-btn');
let form = document.getElementsByTagName('form')[0];
let bodyElement = document.querySelector('body');
let succcessDiv = document.getElementById('success');
let formTitle = document.getElementById('form-title');
let formProgress = document.getElementById('form-progress');
let current_step = 0;
let stepCount = 2;
step[current_step].classList.add('d-block');
if (current_step == 0) {
    prevBtn.classList.add('d-none');
    submitBtn.classList.add('d-none');
    nextBtn.classList.add('d-inline-block')
}
/* progress bar function */
const progress = (value) => {
    document.getElementsByClassName('progress-bar')[0].style.width = `${value}%`;
}

form.onsubmit = () => {
    return false;
}

nextBtn.addEventListener('click', () => {
    current_step++;
    let previous_step = current_step - 1;
    if ((current_step > 0) && (current_step <= stepCount)) {
        prevBtn.classList.remove('d-none');
        prevBtn.classList.add('d-inline-block');
        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block');
        step[previous_step].classList.remove('d-block');
        step[previous_step].classList.add('d-none');
        if (current_step == stepCount) {
            submitBtn.classList.remove('d-none');
            submitBtn.classList.add('d-inline-block');
            nextBtn.classList.remove('d-inline-block');
            nextBtn.classList.add('d-none');
        }
    } else {
        if (current_step > stepCount) {
            form.onsubmit = () => {
                return true
            }
        }
    }
    progress((100 / stepCount) * current_step);
});


prevBtn.addEventListener('click', () => {
    if (current_step > 0) {
        current_step--;
        let previous_step = current_step + 1;
        prevBtn.classList.add('d-none');
        prevBtn.classList.add('d-inline-block');
        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block')
        step[previous_step].classList.remove('d-block');
        step[previous_step].classList.add('d-none');
        if (current_step < stepCount) {
            submitBtn.classList.remove('d-inline-block');
            submitBtn.classList.add('d-none');
            nextBtn.classList.remove('d-none');
            nextBtn.classList.add('d-inline-block');
            prevBtn.classList.remove('d-none');
            prevBtn.classList.add('d-inline-block');
        }
    }

    if (current_step == 0) {
        prevBtn.classList.remove('d-inline-block');
        prevBtn.classList.add('d-none');
    }
    progress((100 / stepCount) * current_step);
});


submitBtn.addEventListener('click', () => {


    const timer = ms => new Promise(res => setTimeout(res, ms));

    timer(1000)
        .then(() => {
            formTitle.classList.add('d-none');
            formProgress.classList.add('d-none');
            step[stepCount].classList.remove('d-block');
            step[stepCount].classList.add('d-none');
            prevBtn.classList.remove('d-inline-block');
            prevBtn.classList.add('d-none');
            submitBtn.classList.remove('d-inline-block');
            submitBtn.classList.add('d-none');
            succcessDiv.classList.remove('d-none');
            succcessDiv.classList.add('d-block');
        })

});

/* ----------------------FORM--------------------------- */

/* ----------------------NAVBAR--------------------------- */
let cstNav = document.getElementById('navbar');

window.onscroll = function () {

    if (this.scrollY >= 10) {
        cstNav.classList.add('shadow');
    }
    else {
        cstNav.classList.remove('shadow');
    }
}
/* ----------------------NAVBAR--------------------------- */
/* ----------------------elements appear on scroll --------------------------- */

window.addEventListener('load', (e) => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
});

let reveals = document.querySelectorAll('.cst-element-fade-hidden');
window.addEventListener('scroll', function () {
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealTop < windowHeight - revealPoint & this.scrollY > 1) {
            // reveals[i].classList.remove('cst-element-fade-hidden');
            reveals[i].classList.add('cst-element-fade-in');
        }
        else {
            reveals[i].classList.remove('cst-element-fade-in');

        }
    }
})

/* ----------------------elements appear on scroll --------------------------- */

/* ----------------------ABOUT US VIDEO--------------------------- */
let videoModal = document.getElementById('abt-video');
let videoParent = document.getElementById('video-parent');


document.addEventListener('DOMContentLoaded', function () {
    aboutUsVideo();
}, false);


function aboutUsVideo() {
    videoModal.addEventListener('shown.bs.modal', function (e) {
        videoParent.innerHTML = `
        <iframe id="cst-abt-video" class="cst-abt-video embed-responsive-item"
                                title="YouTube video player" src="https://www.youtube.com/embed/6CVUm_L2tAI"
                                frameborder="0" allow=" autoplay;" allowfullscreen allowscriptaccess="always"></iframe>
        `
    })

    videoModal.addEventListener('hide.bs.modal', function (e) {
        videoParent.innerHTML = ``
    })
}

/* ----------------------/ABOUT US VIDEO--------------------------- */
