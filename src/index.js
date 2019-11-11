const fontawesome= require('./scss/fontawesome/css/all.scss');
const semantic= require('./scss/semantic/semantic.scss');
const x= require('./scss/index.scss');
const semanticjs=require('./js/semantic');

let h= document.getElementById('casa');

h.addEventListener('click', function(){
    $('.ui.modal').modal('show');
});

// console.log(matchMedia('(min-width: 500px)').matches);
// 

// console.log(Math.PI);
window.pi=Math.PI;

// let f= function(){}

window.lolo= function(grados, longitud){
    let position= document.getElementById("position");
    let base= 10;
    let desktopSize= matchMedia('(min-width: 500px)').matches;
    let width=0;
    let height=0;
    let radianes=0;
    let horizontal=0;
    let vertical=0;
    let longitudY=0;
    if(desktopSize){

    }else{
        width=145; 
        height=130;
        longitudY= (longitud*height)/base;
        longitud= (longitud*width)/base;
        radianes= ((grados*pi)/(180));
        horizontal= (longitudY)*(Math.cos(radianes));
        vertical= (longitud)*(Math.sin(radianes));
        // console.log(horizontal);
        // console.log(vertical);
        position.style.top= height-(vertical) + "px";
        position.style.left= width+(horizontal) + "px";
        return vertical;

    }

    console.log()

}