// --- 1. DIBUJO PROGRAMÁTICO DEL LOGO (CANVAS ESTÁTICO) ---
function crearLogo() {
    const canvas = document.getElementById('logoCanvas');
    const ctx = canvas.getContext('2d');

    // Fondo del Logotipo
    ctx.fillStyle = '#ef4444'; // Color rojo vivo
    ctx.fillRect(10, 10, 380, 60);

    // Borde Decorativo de Feria
    ctx.strokeStyle = '#f59e0b'; // Amarillo/Ámbar
    ctx.lineWidth = 4;
    ctx.strokeRect(15, 15, 370, 40);

    // Tipografía y Efecto de Sombra del Texto
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    
    // Sombras (Esto no estaba en el animado)
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    
    // Inyección del texto
    ctx.fillText('FERIA "EL BARATILLO"', 200, 43);
}

window.onload = crearLogo;

// --- 2. GESTIÓN DE INTERACTIVIDAD DEL BLOG ---
function mostrarDetalle(nombre, precio, descripcion) {
    const contenedorInfo = document.getElementById('vista-previa');
    
    contenedorInfo.innerHTML = `
        <h4>${nombre}</h4>
        <p><strong>Precio de Feria:</strong> ${precio}</p>
        <p>${descripcion}</p>
        <button class="btn-producto" style="background:#10b981; width:100%; margin-top:10px;">
            🛒 Apartar Producto
        </button>
    `;
}