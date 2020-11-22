document.addEventListener('DOMContentLoaded', () => {
    console.log('JS loaded');

    const form = document.querySelector('#new-pedal-form');
    form.addEventListener('submit', handleSubmit);

    const deleteAll = document.querySelector('#delete-button');
    deleteAll.addEventListener('click', handleDeleteAll);

})

const handleSubmit = function(event){
    event.preventDefault();

    const pedalCollectionItem = createPedalCollectionItem(event.target);
    const pedalCollection = document.querySelector('#pedal-collection');    
    pedalCollection.appendChild(pedalCollectionItem)

    event.target.reset();
}

const createPedalCollectionItem = function(form){
    const pedalCollectionItem = document.createElement('li');
    pedalCollectionItem.classList.add('individual-pedal');

    const pedalName = document.createElement('h2');
    pedalName.textContent = form.name.value;
    pedalCollectionItem.appendChild(pedalName)

    const manufacturer = document.createElement('h3');
    manufacturer.textContent = form.manufacturer.value;
    pedalCollectionItem.appendChild(manufacturer);

    const type = document.createElement('p');
    type.textContent = form.type.value;
    pedalCollectionItem.appendChild(type)

    const priority = document.createElement('p');
    priority.innerText = form.priority.value;
    pedalCollectionItem.appendChild(priority);

    return pedalCollectionItem;
}

const handleDeleteAll = function(event){
    const pedalCollection = document.querySelector('#pedal-collection');
    pedalCollection.innerHTML = '';
}


