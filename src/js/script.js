let toggleButton= document.getElementById('toggleButton');
let main=document.getElementById('main');
let header=document.getElementById('header');
let main__content=document.getElementById('main__content');

function menuToggle(){
    header.classList.toggle('show');
    main.classList.toggle('show');
}

toggleButton.addEventListener('click', menuToggle);

main__content.addEventListener('click', function(){
    // console.log('Si');
    if(header.classList.contains('show')){
        header.classList.remove('show');
        main.classList.remove('show');
    }
});
