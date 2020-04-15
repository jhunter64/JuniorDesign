function login(email, password) {
    users = {
        'ellen': 'duan',
        'will': 'hunter'
    }
    email = document.getElementById(email).value;
    password = document.getElementById(password).value;
    console.log(email);
    console.log(password);
    if (users[email] == password) {
        alert('Logging in...');
    } else {
        alert('Incorrect login information');
    }
}