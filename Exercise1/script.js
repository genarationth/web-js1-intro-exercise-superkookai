function ChangeName(){
    const yourName = prompt('What is your name?');
    document.getElementById('inputName').innerHTML = 'Hello ' + yourName;
}