const submit = document.querySelector('#submit-button');
submit.addEventListener('click', () => {

    const radios = document.querySelectorAll('[type="radio"]');
    const input = document.querySelector('#translator-input');
    let inputValue = input.value; // grabs the value
    const results = document.querySelector('#results');
    let objects = search(inputValue);

    for(const radio of radios) {
        if(radio.checked === true) { 
            if(radio.value === "encode") {
                console.log(radio.value)
                results.innerText = encode(inputValue);

            }else if (radio.value === "translate") {
                console.log(radio.value)
                results.innerText = translate(inputValue);

            }else if (radio.value === "madlib") {
                console.log(radio.value)
                results.innerText = madlib(inputValue);  
            }else if (radio.value === "search") {
                console.log(radio.value)
                console.log(search(inputValue));
                results.innerHTML = '';
                for(const objs of objects) // one object of all objects - this refers to the objects of all the lists
                console.log(objects.symbol); // specifies which part of the object 
                let paragraph = document.createElement('p')
                paragraph.innerText = objects.symbol;
                results.appendChild(paragraph) //now the p is filled with
            }
        } else if (radio.value === "random") {
            console.log(radio.value)
            results.innerHTML = Math.floor(Math.random()* 4).toFixed(0); //random number between 1-4 in whole #s
            if(results.innerText == 0)
                document.getElementById('encode').click();
                document.getElementById('submit-button').click();
            }
            if(results.innerText == 1) {
                document.getElementById('translate').click();
                document.getElementById('submit-button').click();
            }
            if(results.innerText == 2) {
                document.getElementById('madlib').click();
                document.getElementById('submit-button').click();
            }
            if(results.innerText == 3) {
                document.getElementById('search').click();
                document.getElementById('submit-button').click();
            }
            return results;
        }
    }
}
