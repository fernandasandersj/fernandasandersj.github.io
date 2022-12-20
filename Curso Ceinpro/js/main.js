let botonCarro = document.getElementById('carro');
let botonCarro2 = document.getElementById('carro2');
let botonCarro3 = document.getElementById('carro3');
let pelicula1 = document.getElementById('pelicula1');

//EVENTO

botonCarro.addEventListener( "click", function() {

   //alert('hola');
   botonCarro.innerHTML='Pelicula no disponible';

   botonCarro.classList.add('fondoRojo');

});

botonCarro2.addEventListener( "click", function() {

    //alert('hola');
    botonCarro2.innerHTML='Pelicula no disponible';
 
    botonCarro2.classList.add('fondoRojo');
 
 });

 botonCarro3.addEventListener( "click", function() {

    //alert('hola');
    botonCarro3.innerHTML='Pelicula no disponible';
 
    botonCarro3.classList.add('fondoRojo');
 
 });
 