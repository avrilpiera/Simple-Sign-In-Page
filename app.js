function signIn() {
    var username = document.getElementById('username');
    var password = document.getElementById('password');

    if (password.value == '1234') {
        document.querySelector('.signin-container').remove()
    }
    else {
        if (document.querySelector('.form-container').children.length <= 4) {
            var p = document.createElement('p')
            p.style.color = 'red';
            p.innerText = 'Incorrect password. The password is 1234.'
            document.querySelector('.form-container').append(p)
        }
    }
}