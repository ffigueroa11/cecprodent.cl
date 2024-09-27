/*  // Configura el temporizador del slider (intervalo de 3000ms = 3 segundos)
 var myCarousel = document.querySelector('#carouselExampleSlidesOnly');
 var carousel = new bootstrap.Carousel(myCarousel, {
     interval: 3000,  // Cambia la imagen cada 3 segundos
     ride: 'carousel' // Inicia automáticamente
 }); */

 // script.js


 document.addEventListener('DOMContentLoaded', function () {
    const myCarousel = document.querySelector('#carouselExampleSlidesOnly');
    const carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000,  // Cambia la imagen cada 3 segundos
        ride: 'carousel'
    });

    const captionElements = document.querySelectorAll('.dynamic-caption');
    const buttonElements = document.querySelectorAll('.dynamic-button');

    // Inicializa el estado visible del botón y caption en el primer slide
    captionElements[0].style.opacity = 1;
    buttonElements[0].style.opacity = 1;

    // Ocultar los elementos al iniciar el cambio de slide
    myCarousel.addEventListener('slide.bs.carousel', function () {
        captionElements.forEach(caption => caption.style.opacity = 0);
        buttonElements.forEach(button => button.style.opacity = 0);
    });

    // Actualizar contenido al finalizar el cambio de slide
    myCarousel.addEventListener('slid.bs.carousel', function (event) {
        const currentElement = event.relatedTarget;  // Slide activo tras el cambio
        const newCaption = currentElement.getAttribute('data-caption');
        const newButtonText = currentElement.getAttribute('data-button');

        // Obtener los índices de los elementos dinámicos
        const currentIndex = Array.from(myCarousel.querySelectorAll('.carousel-item')).indexOf(currentElement);

        // Actualiza el contenido del texto y el botón
        setTimeout(() => {
            captionElements[currentIndex].textContent = newCaption || ""; // Asegura que siempre se actualice
            buttonElements[currentIndex].textContent = newButtonText || ""; // Asegura que siempre se actualice

            // Si no hay texto de botón, ocultarlo
            if (newButtonText) {
                buttonElements[currentIndex].style.display = 'inline-block';
            } else {
                buttonElements[currentIndex].style.display = 'none';
            }

            // Mostrar con efecto de fade-in
            captionElements[currentIndex].style.opacity = 1;
            buttonElements[currentIndex].style.opacity = 1;
        }, 200);  // Ajustar el tiempo según la necesidad del efecto
    });

    const video = document.getElementById('miVideo');

    // Reproducir el video automáticamente
    video.autoplay = true;
    video.loop = false; // No repetir automáticamente
    video.muted = false; // Comenzar sin sonido

    video.addEventListener('ended', () => {
        // Al finalizar la reproducción, ocultar controles de reproducción
        video.controls = true; // Permitir controles
        video.muted = false; // Desmutear
    });

    // Controlar los controles del video
    video.controls = true; // Mostrar controles

    // Esconder controles adicionales
    video.addEventListener('contextmenu', (e) => {
        e.preventDefault(); // Deshabilitar clic derecho
    });

});





