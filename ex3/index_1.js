var res;
var currentSide = 0;

async function initialFetch () {
    res = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())

    var user = res[0];
    console.log(res);
    document.querySelector("#name").innerHTML = user.name;
    document.querySelector("#username").innerHTML = user.username;
    document.querySelector("#email").innerHTML = user.email;
    document.querySelector("#street").innerHTML = user.address.street;
    document.querySelector("#city").innerHTML = user.address.city;
}

initialFetch();

function flipCard() {
    if (currentSide % 2) {
        document.querySelector("#side-1").style.display="none";
        document.querySelector("#side-2").style.display="block";
    } else {
        document.querySelector("#side-1").style.display="block";
        document.querySelector("#side-2").style.display="none";
    }
    currentSide++;
}
