
const emailInput = document.getElementById("inputtext");
const passwordInput = document.getElementById("inputpassword");

function login() {
    document.getElementById('text').innerHTML = '';
    const data = {
        email: emailInput.value,
        password: passwordInput.value
    }
    fetch('https://66ec3ea02b6cf2b89c5dd113.mockapi.io/users', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((users) => {
            let user = users.find((user) => user.email === data.email && user.password === data.password);
            if (user) {
                let name = user.name;
                let surname = user.surname;
                document.getElementById('welcome').innerHTML = `<h1 style="color:white; font-size:40px;">Wlecome ${name} ${surname}</h1>`;
                document.getElementById('welcome').style.display = 'flex';
                setTimeout(() => window.location.href = './main/index.html', 1500);

            }
            else {
                document.getElementById('text').innerHTML = '<p style="color:red">Wrong password or email</p>';
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });





}


