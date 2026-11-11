

function contact(event) {
event.preventDefault();
const loading = document.querySelector('.modal__overlay-loading')
const success = document.querySelector('.modal__overlay-success')
loading.classList .add("modal__overlay--visible");
  emailjs
    .sendForm (
        'service_ad79u7v',
        'template_kfosxxs',
       event.target,
        'rlExpB8drf1rgq-Pf'
    )
    .then(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList.add("modal__overlay--visible");
    })
    .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
        "The email service is temporarily unavailable. Please contact me directly at michael.perry94387@gmail.com"
        );
    });
}
