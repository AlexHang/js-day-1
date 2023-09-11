
const loadUserData = async () => {
    const response = 
        await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json());
    console.log(response);
}

loadUserData();