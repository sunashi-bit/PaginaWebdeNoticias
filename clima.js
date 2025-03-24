// ==============================================
// CONSTANTES Y CONFIGURACIÓN
// ==============================================
const API_KEY = "TU_API_KEY"; // Clave de OpenWeatherMap
const CLIMA_INFO_ID = "clima-info"; // ID del elemento HTML donde se mostrará el clima

// ==============================================
// FUNCIONES PRINCIPALES
// ==============================================

/**
 * Inicializa el módulo de clima, obteniendo la ubicación y mostrando los datos.
 */
function initClima() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => obtenerClima(position.coords.latitude, position.coords.longitude),
            manejarErrorGeolocalizacion
        );
    } else {
        mostrarError("Tu navegador no soporta geolocalización.");
    }
}

/**
 * Obtiene los datos del clima desde la API.
 * @param {number} lat - Latitud.
 * @param {number} lon - Longitud.
 */
async function obtenerClima(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error en la respuesta de la API");
        const data = await response.json();
        mostrarClima(data);
    } catch (error) {
        mostrarError("Error al cargar el clima. Intenta más tarde.");
        console.error("Error en obtenerClima:", error);
    }
}

// ==============================================
// FUNCIONES DE UTILIDAD (HELPERS)
// ==============================================

/**
 * Muestra los datos del clima en el HTML.
 * @param {Object} data - Datos de la API del clima.
 */
function mostrarClima(data) {
    const climaInfo = document.getElementById(CLIMA_INFO_ID);
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    climaInfo.innerHTML = `
        <img src="${iconUrl}" alt="${data.weather[0].description}">
        <p>${data.name}: ${data.main.temp}°C, ${data.weather[0].description}</p>
    `;
}

/**
 * Maneja errores de geolocalización.
 * @param {Object} error - Objeto de error.
 */
function manejarErrorGeolocalizacion(error) {
    let mensaje = "No se pudo obtener la ubicación.";
    switch (error.code) {
        case error.PERMISSION_DENIED:
            mensaje = "Permiso de ubicación denegado.";
            break;
        case error.TIMEOUT:
            mensaje = "Tiempo de espera agotado.";
            break;
    }
    mostrarError(mensaje);
}

/**
 * Muestra un mensaje de error en el HTML.
 * @param {string} mensaje - Mensaje de error.
 */
function mostrarError(mensaje) {
    document.getElementById(CLIMA_INFO_ID).innerHTML = `<p>${mensaje}</p>`;
}

// ==============================================
// EXPORTACIÓN DE FUNCIONES (SI ES MÓDULO)
// ==============================================
// Si usas módulos ES6 (import/export), descomenta:
// export { initClima };