const contactButtonList = document.querySelectorAll('.contact-button');
const messagePopup = document.querySelector('.message-popup');
const messageCloseButton = messagePopup.querySelector('.popup__close-button');
const cvButton = document.querySelector('.cv-button');
const cvLink = document.querySelector('.intro__CV-link');
const cvPDF = cvLink.getAttribute('href');

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function hendleContactButton() {
    openPopup(messagePopup);
}

function closeMessagePopup() {
    closePopup(messagePopup);
}

function hendleCvButton() {
    window.open(cvPDF, '_blank');
    return false;
}

contactButtonList.forEach(contactButton => {
    contactButton.addEventListener('click', hendleContactButton);
});

messageCloseButton.addEventListener('click', closeMessagePopup);
cvButton.addEventListener('click', hendleCvButton);
