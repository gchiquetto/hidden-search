const button = document.querySelector('.search--button');
const searchbar = document.querySelector('.search--text');


button.addEventListener('click', ()=>{
    if(searchbar.classList.contains('search--text-hidden')){
        searchbar.classList.remove('search--text-hidden');
        button.classList.add('search--button-clicked');
    }
    else{
        searchbar.classList.add('search--text-hidden');
        button.classList.remove('search--button-clicked');
    }
});