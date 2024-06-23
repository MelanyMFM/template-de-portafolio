let list = document.getElementById('listaseries');
function agregar(){
    let input = document.getElementById('recomendación');
    const inputValue = input.value;

    let rec = document.createElement('li');
    rec.innerHTML = inputValue;
    list.appendChild(rec);

    input.innerText = "";
}