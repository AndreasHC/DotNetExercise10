function getApi() {
    let name = document.getElementById('input').value;
    let fullUri = `https://www.swapi.tech/api/people/?name=${name}`;
    console.log(fullUri);
    fetch(fullUri)
        .then(res => res.json())
        .then(data => {
            let output = document.getElementById('output');
            if (data.result != undefined && data.result.length == 1) {
                character = data.result[0];
                console.log(character);
                let height = character.properties.height;
                let mass = character.properties.mass;
                let gender = character.properties.gender;
                let hairColor = character.properties.hair_color;
                output.value = `Height: ${height}\nMass: ${mass}\nGender: ${gender}\nHair color: ${hairColor}`;
            }
            else
                output.value = 'No!';
        })
        .catch(err => console.log(err))
}


document.getElementById('button').addEventListener('click', getApi);