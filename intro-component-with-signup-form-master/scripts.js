const rawInputs = document.getElementsByTagName('input');
const inputs = Array.from(rawInputs);

const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    inputs.forEach((element) => {
        if (element.validity.valid) {
            element.classList.remove('input_error')
            element.nextElementSibling.innerHTML = '';
        } else {
            element.classList.add('input_error');
            element === rawInputs.email ? element.nextElementSibling.innerHTML = "Looks like this is not an email" :
            element.nextElementSibling.innerHTML = `${element.placeholder} cannot be empty`;
            event.preventDefault()
        }
    })
  });