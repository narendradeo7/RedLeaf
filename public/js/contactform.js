// console.log("contact js is running ");



// const scriptURL = 'https://script.google.com/macros/s/AKfycbynDyzbT6D3SIMzUymk0BqYw8Wkhf31xNlFcQaUJLG8RA8-2Q_FQTA8UxMCEfElyjF5yQ/exec'
// const form = document.forms['contact-form']

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   document.querySelector(".enqbtn").innerHTML="Submitting🔃";
//   fetch(scriptURL, {
//     redirect: "follow",
//     method: "POST",
//     body: new FormData(form),
//     headers: {
//       "Content-Type": "text/plain;charset=utf-8",
//     },
//   }).then(response => {console.log('Success!', response); console.log(new FormData(form)); document.querySelector(".enqbtn").innerHTML=""; })
//     .catch(error =>{ console.error('Error! eroor ho gya re baba', error.message) })
// //   fetch(scriptURL, { method: 'POST', body: new FormData(form)})

   
// })



const scriptURL = 'https://script.google.com/macros/s/AKfycbw0-WkWgMLdnNZxpeHd2lM8pEX5aWYsxGP0B6yHEcQ059gFtZt_A1zs1XIxNHi1UlTd/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault();
  document.querySelector(".enqbtn").innerHTML="Submitting🔃";

  fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => {console.log('Success!', response);document.querySelector(".enqbtn").innerHTML="Submitted"; })
    .catch(error =>{ console.log("Oops ! Something Went Wrong <br> Please try to resubmit !!!");console.error('Error! eroor ho gya re baba', error.message);document.querySelector(".enqbtn").innerHTML="Eror"; })

   
})

  