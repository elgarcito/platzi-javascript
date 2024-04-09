
//Capacidad que tienen las funciones al igual que otros objetos

//1. Pasar funciones como argumentos -> callback

function a() {}
function b(a) {}
b(a)

// Retornar funciones
function r() {
    function b(){}
    return b
}

//Asignar funciones a variables-> expresion de funcion

const t =function(){}

const c =function(){}

//Tener propiedades y metodos

function s (){}
const obj={}
s.call(obj)

//Anidar funciones -> nested functions

function w() {
    function b(){
        function c(){
        }
        c()
    }
    b()
}

//Es posible almacenar funciones en objetos 

const rocket={
    name:'falcon 9',
    launchMessage: function launchMessage(){
        console.log("fire")
    }
}

rocket.launchMessage()
console.log('dfasfdasfdasf');