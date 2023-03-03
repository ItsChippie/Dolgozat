const ul= document.querySelector('#ulElem');
var termekek = ['alma', 'körte' , 'barack' , 'szilva'];

console.log ("müködik")

termekek.forEach((termekek) => {
    //console.log(termekek)
    let li = document.createElement('li')
    li.textContent = termekek
    li.classList = 'list-group-item';
    
    ul.append (li)

});