document.getElementById('page-search-field-id').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.querySelector('.search-switcher-label').click(); // Simula un clic en el icono de búsqueda
        
    }
        // Cambiar tema claro/oscuro
		const themeIcon = document.getElementById('theme-icon');
        const body = document.body;
        const logo = document.getElementById('logo'); // Obtén el elemento del logo

        themeIcon.addEventListener('click', () => {
            body.classList.toggle('dark');
            updateTheme();
        });

        function updateTheme() {
            logo.style.opacity = 0; // Oculta la imagen
            setTimeout(() => {
                if (body.classList.contains('dark')) {
                    themeIcon.src = 'img/icons8-sun.svg'; // Cambia a luna
                    logo.src = 'IMG/Logo-Withe-M-Exclusivas-MX.png'; // Cambia al logo oscuro
                } else {
                    themeIcon.src = '/img/icons8-moon-30.png'; // Cambia a sol
                    logo.src = 'IMG/Logo-black-M-Exclusivas-MX.png'; // Cambia al logo claro
                }
                logo.style.opacity = 1; // Muestra la imagen
            }) 
		}

        // Inicializar el tema al cargar la página
        updateTheme()
    