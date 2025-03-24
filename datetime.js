
	// Función para formatear la fecha y hora
	function updateDateTime() {
		const now = new Date(); // Obtiene la fecha y hora actual
		const options = {
			weekday: 'long', // Día de la semana (ej: "lunes")
			year: 'numeric', // Año (ej: "2023")
			month: 'long',   // Mes (ej: "octubre")
			day: 'numeric',  // Día del mes (ej: "23")
			hour: '2-digit', // Hora (ej: "09")
			minute: '2-digit', // Minutos (ej: "45")
			// second: '2-digit', // Segundos (ej: "30")
			hour12: true // Formato de 12 horas (true) o 24 horas (false)
		};
		const formattedDateTime = now.toLocaleDateString('es-ES', options); // Formatea la fecha y hora
		const capitalizedDateTime = formattedDateTime.charAt(0).toUpperCase() + formattedDateTime.slice(1); // Capitaliza la primera letra
		document.getElementById('datetime').textContent = formattedDateTime; // Actualiza el contenido
	}

	// Actualiza la fecha y hora cada segundo
	setInterval(updateDateTime, 1000);

	// Inicializa la fecha y hora al cargar la página
	updateDateTime();

