document.addEventListener("DOMContentLoaded", () => {
    const navbarContainer = document.getElementById('navbar-container');
    
    fetch('components/navbar-top.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            navbarContainer.innerHTML = html;
        })
        .catch(error => {
            console.error('Error:', error);
            navbarContainer.innerHTML = `
                <div class="alert alert-danger mt-3">
                    Error cargando la navegación: ${error.message}
                </div>
            `;
        });
});