"use strict"
const darbas = document.querySelector('#uzduotis');
const svarba = document.querySelector('#priority');
const rezultatams = document.querySelector('tbody');

const forma = document.querySelector('form');
const lentele = document.querySelector('table');

console.log(rezultatams);


const addBtn = document.getElementById('mygtukas');
addBtn.addEventListener('click', function(e){
    e.preventDefault();
    addToDo();
    // labai svarbu eiles tvarka, kada galime isvalyti formos duomenis
    forma.reset();
})

console.log(addBtn);

function addToDo(){
    console.log(darbas.value.length)
    if(darbas.value !== '' && darbas.value.length > 6){
        // pasitikrinimui visada spausdinu i konsole
        console.log(darbas.value);
        console.log(svarba.value);

        // rodau rezultatu lentele
        lentele.className = 'visible table mt-5 ';
        // sukuriu eilute vienai darbu eigai spausdinti
        const eilute = document.createElement('tr');
        // eilute pridedu i sukurta table
        rezultatams.appendChild(eilute);
        // kuriu kiekvienai reiksmei po atskira td elementa
        const uzduotis = document.createElement('td');
        // idedu i td elementa tai, ka vartotojas ivede      
       uzduotis.textContent = darbas.value;        
        // td elementa apendinu eilutei
        eilute.appendChild(uzduotis);

        // kodas prioricio idejimui
        const prioritis = document.createElement('td');
       switch (svarba.value){
            case 'High':
                prioritis.innerHTML = '<p class="btn btn-warning">'+svarba.value+'</p>';
                break;
            case 'Normal':
                prioritis.innerHTML = '<p class="btn btn-success">'+svarba.value+'</p>';
                break;
            case 'Low':
                prioritis.innerHTML = '<p class="btn btn-secondary">'+svarba.value+'</p>';
                break;
       }
       eilute.appendChild(prioritis);

    //    trynimo mygtukas
    const trynimoMygtukas = document.createElement('td');
    trynimoMygtukas.className = 'd-flex justify-content-center';
    trynimoMygtukas.innerHTML = '<button type="button" class="btn btn-danger">Done</button>';
    eilute.appendChild(trynimoMygtukas);

    // trynimo funkcijos iskvietimas
       trynimoMygtukas.addEventListener('click', function(e){
        //    stabdome puslapio persikrovima, kad issaugoti reiksme
           e.preventDefault();
        //    iskvieciame funkcija su parametru, pasakome, kuri konkreciai elementa trinti
        console.log(e.target.parentNode.parentNode);
           deleteTask(e.target.parentNode.parentNode);
       })
    //    trynimo funkcija
    function deleteTask(row){
        rezultatams.removeChild(row);
    }

    } else {
        alert("??veskite nauj?? u??duot??. U??duotis apra??ymas turi b??ti ne ma??iau 6 simboliai")
    }
    

    
}