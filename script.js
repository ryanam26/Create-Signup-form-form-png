const form = document.getElementById('form');


form.addEventListener('submit', e => {
    e.preventDefault();

    const firstName = form['firstname'].value;
    const lastName = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if (firstName === "") {
        addErrorTo('firstname', 'First Name is required');
    }

    if (lastName === "") {
        addErrorTo('lastname', 'Last Name is required');
    }

    if (email === "") {
        addErrorTo('email', 'Email is required');
    }

    if (isValid(email)) {
        addErrorTo('email', 'email is not valid');
    }

    if (password === '') {
        addErrorTo('password', 'Password is required');
    }
});

function addErrorTo(field, message) {
    const small = form[field].parentNode.querySelector('small')
    small.innerText = message;
    small.style.opacity = '1';
}

function isValid(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
}