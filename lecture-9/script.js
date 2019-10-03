let btnSuccess = document.querySelector('.success');
let btnCancel = document.querySelector('.cancel');
let divActions = document.querySelector('.actions');
let formEl = document.querySelector('form');
let buttons = document.querySelectorAll('button');


function cancelHandler() {
    console.log('cancel click');
}

function cancelSubmit(event) {
    console.log('cancel submit');
    event.preventDefault();     // отмена
    event.stopPropagation();    // отмена всплытия
}

divActions.addEventListener('click', (event) => {
    console.log('div.actions click');
    console.log('event', event);
});

btnSuccess.addEventListener('click', (event) => {
    console.log('success click');
});

// btnCancel.removeEventListener('click', cancelHandler);

btnCancel.addEventListener('click', cancelHandler);

formEl.addEventListener('click', cancelSubmit);


// history
// window
// location
// performance


// console.log(buttons);

// ------ Задание -------------------------------------------------------------------------------------------


let link = document.querySelector('.link-wrapper a');
link.addEventListener('click', (e) => {
   e.preventDefault();
   console.log('click');
});

