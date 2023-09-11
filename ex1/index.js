
const movies = [
    {
        title:"Interstellar",
        description:"A nice movie",
        rating:"5"
    },
    {
        title:"Oppenheimer",
        description:"A nice movie too",
        rating:"4.5"
    },
    {
        title:"Barbie",
        description:"Too much pink",
        rating:"4.5"
    }
]

loadTableData = () => {
    const table = document.querySelector("#movie-table");
    table.innerHTML = "";
    movies.forEach(movie => {
        table.innerHTML += `
            <tr>
                <td>${movie.title}</td>
                <td>${movie.description}</td>
                <td>${movie.rating}</td>
            </tr>
        `
    })
}

addNewMovie = () => {
    //
}


loadTableData();


changeTextColor = () => {
    const text = document.querySelector("#text-to-color");
    const colors = ['red', 'green', 'blue', 'black'];
    let index=0;
    setInterval(()=>{
        text.style.color = colors[(index++) % colors.length]
    }, 1000);
}

changeTextColor();