

function contact(event) {
event.preventDefault();
const loading = document.querySelector('modal__overlay-loading')
const success = document.querySelector('modal__orvelay-success')
loading.classlist += " modal__overlay--visible";
  emailjs
    .sendForm (
        'service_ad79u7v',
        'template_kfosxxs',
       event.target,
        'rlExpB8drf1rgq-Pf'
    ).then(() => {
       loading.classList.remove("modal__overlay--visible")
    success.classList += "modal__overlay--visible";
        console.log('this worked1')
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
        "The email service is temporarily unavailable. PLease contact me directly at michael.perry94387@gmail.com"
        );
    })
}
