import Factura from './Factura.js';

const factura=new Factura();

document.addEventListener("load",function(){
    let boton=document.getElementById("actualizar");
    boton.addEventListener("click",function(){
        factura.clienteNIF=document.getElementById("clientenif");
        factura.fecha=document.getElementById("fecha");
        factura.hora=document.getElementById("hora");
        factura.pagada=document.getElementById("pagada");
    })
})