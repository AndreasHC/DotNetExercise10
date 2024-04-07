function getApi() {
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
        .then(res => res.json())
        .then(data => {
            let imageUrl = data.cards[0].image;
            let imageElement = document.createElement('img');
            imageElement.setAttribute('src', imageUrl);
            let outputDiv = document.getElementById('output');
            outputDiv.innerHTML = null;
            outputDiv.appendChild(imageElement);
        })
        .catch(err => console.log(err))
}
document.getElementById('button').addEventListener('click', getApi);