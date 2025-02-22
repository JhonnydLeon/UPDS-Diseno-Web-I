document.addEventListener("DOMContentLoaded", () => {
    const navbarContainer = document.getElementById('navbar-container');
    
    // Calcular ruta base según ubicación actual
    const currentPath = window.location.pathname;
    const basePath = currentPath.includes('UPDS-Diseno-Web-I/tiendas/') ? '../' : './';
    const basePath2 = currentPath.includes('UPDS-Diseno-Web-I/tiendas/') ? '../' : './';
    
    
    //para var tiendas
    fetch(`${basePath}components/navbar-top.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            navbarContainer.innerHTML = html;
            console.log('Navbar cargado desde:', `${basePath}components/navbar-top.html`);
        })
        .catch(error => {
            console.error('Error:', error);
            navbarContainer.innerHTML = `
                <div class="alert alert-danger mt-3">
                    Error cargando la navegación: ${error.message}
                    <div>Intenta recargar la página</div>
                </div>
            `;
        });



        //para el var de contactos
        fetch(`${basePath2}components/navbar-top.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            navbarContainer.innerHTML = html;
            console.log('Navbar cargado desde:', `${basePath2}components/navbar-top.html`);
        })
        .catch(error => {
            console.error('Error:', error);
            navbarContainer.innerHTML = `
                <div class="alert alert-danger mt-3">
                    Error cargando la navegación: ${error.message}
                    <div>Intenta recargar la página</div>
                </div>
            `;
        });
});