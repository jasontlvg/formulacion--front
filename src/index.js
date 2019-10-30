const fontawesome= require('./scss/fontawesome/css/all.scss');
const semantic= require('./scss/semantic/semantic.scss');
const x= require('./scss/index.scss');
const semanticjs=require('./js/semantic');

let h= document.getElementById('casa');

h.addEventListener('click', function(){
    $('.ui.modal').modal('show');
});