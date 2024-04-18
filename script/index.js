const dataJsEls = JSON.parse(data);
const contentEl = document.querySelector('.content');

const contentImagesEl = document.createElement('div');
contentImagesEl.classList.add('content__image');

contentEl.appendChild(contentImagesEl);
let dataJsElsLength = 1;

addImages();

const buttonsEl = document.createElement('div');
buttonsEl.classList.add('buttons');
const btnBackEl = document.createElement('button');
btnBackEl.classList.add('btn');
btnBackEl.classList.add('back');
btnBackEl.textContent = "Back";
const btnNextEl = document.createElement('button');
btnNextEl.classList.add('btn');
btnNextEl.classList.add('next');
btnNextEl.textContent = "Next";

const btnPrevLabelEl = document.createElement('button');
btnPrevLabelEl.classList.add('prev-button');
btnPrevLabelEl.type = 'button';
btnPrevLabelEl.textContent = "<";
btnPrevLabelEl.ariaLabel = "Посмотреть предыдущий слайд";

const btnNextLabelEl = document.createElement('button');
btnNextLabelEl.classList.add('next-button');
btnNextLabelEl.type = 'button';
btnNextLabelEl.textContent = ">";
btnNextLabelEl.ariaLabel = "Посмотреть следующий слайд";

buttonsEl.appendChild(btnBackEl);
buttonsEl.appendChild(btnNextEl);
contentEl.appendChild(buttonsEl);

contentEl.appendChild(btnPrevLabelEl);
contentEl.appendChild(btnNextLabelEl);

const allImages = Array.from(contentImagesEl.querySelectorAll('img'));

btnBackEl.addEventListener('click', ({ target }) => {
    prevStep();
});
btnNextEl.addEventListener('click', (target) => {
    nextStep();
});
btnPrevLabelEl.addEventListener('click', ({ target }) => {
    prevStep();
});
btnNextLabelEl.addEventListener('click', (target) => {
    nextStep();
});

function addImages() {
    dataJsEls.forEach(data => {

        const imageEl = document.createElement('img');
        imageEl.classList.add('image');

        contentImagesEl.appendChild(imageEl);

        imageEl.src = data.image;
        imageEl.setAttribute('alt', data.alt);
        if (dataJsElsLength === 1) {
            imageEl.classList.add('active');
        } else {
            imageEl.classList.add('hidden');
        }
        dataJsElsLength += 1;
    });
};
function prevStep() {
    for (let i = 0; i < allImages.length; i++) {
        if (allImages[i].classList.contains('active')) {
            allImages[i].classList.remove('active');
            allImages[i].classList.add('hidden');
            if (allImages[i - 1]) {
                allImages[i - 1].classList.remove('hidden');
                allImages[i - 1].classList.add('active');
                break;
            } else {
                allImages[allImages.length - 1].classList.remove('hidden');
                allImages[allImages.length - 1].classList.add('active');
                break;
            }
        }

    }
};
function nextStep() {
    for (const image of allImages) {
        if (image.classList.contains('active')) {
            image.classList.remove('active');
            image.classList.add('hidden');
            if (image.nextElementSibling) {
                image.nextElementSibling.classList.remove('hidden');
                image.nextElementSibling.classList.add('active');
                break;
            } else {
                allImages[0].classList.remove('hidden');
                allImages[0].classList.add('active');
                break;
            }
        }
    }
};