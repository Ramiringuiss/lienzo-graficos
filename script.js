const canvas = document.getElementById('pantallaJuego');
const contexto = canvas.getContext('2d');


let puntuacion = 0;

//OBJETOS DEL JUEGO 
const jugador = {
    x: 230,
    y: 180,
    ancho: 25,
    alto: 25,
    velocidad: 5,
    color: '#2563eb'
};

const objetivo = {
    x: Math.random() * (canvas.width - 40) + 10,
    y: Math.random() * (canvas.height - 40) + 10,
    ancho: 15,
    alto: 15,
    color: '#f59e0b' // moneda amarilla media naraja 
};

//Leer teclas
const teclas = {};

//Escuchar las teclas
window.addEventListener('keydown', function(evento) {
    teclas[evento.key] = true;
});

window.addEventListener('keyup', function(evento) {
    teclas[evento.key] = false;
});

//colisiones y lógica
function actualizarLogica() {
    // limites
    if (teclas['ArrowUp'] && jugador.y > 0) {
        jugador.y -= jugador.velocidad;
    }
    if (teclas['ArrowDown'] && jugador.y < canvas.height - jugador.alto) {
        jugador.y += jugador.velocidad;
    }
    if (teclas['ArrowLeft'] && jugador.x > 0) {
        jugador.x -= jugador.velocidad;
    }
    if (teclas['ArrowRight'] && jugador.x < canvas.width - jugador.ancho) {
        jugador.x += jugador.velocidad;
    }

    // Algoritmo basico
    if (jugador.x < objetivo.x + objetivo.ancho &&
        jugador.x + jugador.ancho > objetivo.x &&
        jugador.y < objetivo.y + objetivo.alto &&
        jugador.alto + jugador.y > objetivo.y) {
        
        // Si chocan, sumamos un punto
        puntuacion++;
        
        //Sale otra vez la moneda en un lugar aleatorio
        objetivo.x = Math.random() * (canvas.width - 40) + 10;
        objetivo.y = Math.random() * (canvas.height - 40) + 10;
    }
}

//RENDERIZADO GRÁFICO 
function dibujarGraficos() {
    // 1. Limpiar la pantalla
    contexto.clearRect(0, 0, canvas.width, canvas.height);

    // 2. Dibujar la moneda/objetivo
    contexto.fillStyle = objetivo.color;
    contexto.fillRect(objetivo.x, objetivo.y, objetivo.ancho, objetivo.alto);

    // 3. Dibujar al jugador
    contexto.fillStyle = jugador.color;
    contexto.fillRect(jugador.x, jugador.y, jugador.ancho, jugador.alto);

    // 4. Dibujar la puntuación (Marcador)
    contexto.fillStyle = '#0f172a';
    contexto.font = 'bold 20px Segoe UI';
    contexto.fillText('Puntos: ' + puntuacion, 15, 30);
}

//EL BUCLE PRINCIPAL DEL JUEGO 
function buclePrincipal() {
    actualizarLogica(); 
    dibujarGraficos();  
    
    // Volvemos a llamar al bucle para el siguiente fotograma 
    requestAnimationFrame(buclePrincipal);
}

//Iniciar el juego al cargar
buclePrincipal();