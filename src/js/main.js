let buttonOpen = document.querySelector('#buttonOpen');
let buttonClose = document.querySelector('#buttonClose');
let buttonReset = document.querySelector('#resetBtn');

let counterInput = document.querySelector('#InputValue');
let popup = document.querySelector('.popup');

window.onclick = (event) =>{

    if(event.target.className === 'popup_container'){
        popup.classList.remove('active')
        popup.classList.add('hide')
    }
}

buttonOpen.addEventListener('click', (e) => {
    
    let localStorageItem = localStorage.getItem('counter');

    if(localStorageItem === null){

        localStorage.setItem('counter', 1);
        localStorageItem = 1;

    }else{

        localStorageItem = parseInt(localStorageItem);
        localStorage.setItem('counter', localStorageItem + 1)
        localStorageItem = localStorageItem + 1;

        if(localStorageItem >= 5){
            buttonReset.classList.remove('hide')
            buttonReset.classList.add('active')
        }

    }   

    counterInput.innerHTML = localStorageItem;
    
    toggleHideClass();
    
});

buttonClose.addEventListener('click', toggleHideClass);

buttonReset.addEventListener('click', (e) => {
    localStorage.removeItem('counter');
    counterInput.innerHTML = 0;
});

function toggleHideClass(){
    popup.classList.toggle('hide');
}