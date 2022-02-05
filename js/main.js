let BaseUrl = 'https://www.omdbapi.com/';

let apiKey = 'e1c3fb39'
let userList = document.querySelector('#userlList')
let nextBtn = document.querySelector('.next-btn')
let searchMovie = 'Car'
let page = 1

let  loader = document.querySelector('#loader')

function getData(searchMovie, page) {
    fetch(BaseUrl + `?s=${searchMovie}&page=${page}&apikey=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
            userList.innerHTML = null
            renderData(data)
        })
        .catch((err) => console.log(err));
}


function renderData(data) {
    data.Search.forEach((user) => {
        loader.style.display = 'none'
        let elListItem = document.createElement('li');
        elListItem.setAttribute("class", "li")
        elListItem.textContent = user.Title;

        userList.append(elListItem)
        console.log(elListItem);
    });
}

function handleClick(params) {
    loader.style.display = 'block'
    getData(searchMovie, ++page)
}

nextBtn.addEventListener('click', handleClick)

getData(searchMovie, page)