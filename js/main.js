const btn = document.getElementById('btn');

function fetchDadJokes() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => getJoke(data.joke))
}

function getJoke(jokes) {
    const text = document.getElementById('joke');
    text.innerHTML = `${jokes}`
}

btn.addEventListener('click', fetchDadJokes);
document.addEventListener('DOMContentLoaded', fetchDadJokes)