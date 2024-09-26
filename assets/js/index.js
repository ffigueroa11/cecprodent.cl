 // Configura el temporizador del slider (intervalo de 3000ms = 3 segundos)
 var myCarousel = document.querySelector('#carouselExampleSlidesOnly');
 var carousel = new bootstrap.Carousel(myCarousel, {
     interval: 3000,  // Cambia la imagen cada 3 segundos
     ride: 'carousel' // Inicia automáticamente
 });