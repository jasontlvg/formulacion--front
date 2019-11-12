const fontawesome= require('./scss/fontawesome/css/all.scss');
const semantic= require('./scss/semantic/semantic.scss');
const x= require('./scss/index.scss');
const semanticjs=require('./js/semantic');
// const sio= require('./socket.io/socket.io.js');


// let io= function(){
//         return {
//             emit: function(x,y){
//                 return 'Hola';
//             }
//         }
//     }
// const socket= io();

// const socket= io()

window.pi=Math.PI;
import Vue from './js/vue';
window.Vue = Vue;
window.card= null;
import { vueControl } from './js/vueControl';
vueControl()

// window.lolo= function(grados, longitud){
//     let position= document.getElementById("position");
//     let base= 10;
//     let desktopSize= matchMedia('(min-width: 500px)').matches;
//     let width=0;
//     let height=0;
//     let radianes=0;
//     let horizontal=0;
//     let vertical=0;
//     let longitudY=0;
//     if(desktopSize){

//     }else{
//         width=145;
//         height=130;
//         longitudY= (longitud*height)/base;
//         longitud= (longitud*width)/base;
//         radianes= ((grados*pi)/(180));
//         horizontal= (longitud)*(Math.cos(radianes));
//         vertical= (longitudY)*(Math.sin(radianes))
//         position.style.top= height-(vertical) + "px";
//         position.style.left= width+(horizontal) + "px";
//         return horizontal;
// }