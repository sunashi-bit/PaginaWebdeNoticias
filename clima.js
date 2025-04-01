document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo: Actualizar datos del clima desde una API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Puebla&appid=cd6f1c86c9496ba20d50c54b36916669&units=metric&lang=es`)
    .then(response => response.json())
    .then(data => {
    document.querySelector('.current-temp').textContent = data.current.temp_c + '°';
    document.querySelector('.conditions').textContent = data.current.condition.text;
     });
    
    // Por ahora usamos datos estáticos como en la imagen
    console.log('Widget del clima cargado');
});