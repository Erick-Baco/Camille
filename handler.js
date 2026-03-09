// Configuración de la fecha del evento (Año, Mes (0-11), Día, Hora, Minuto)
// Nota: En JS los meses van de 0 (Enero) a 11 (Diciembre), por eso Marzo es 2.
const fechaEvento = new Date(2026, 2, 28, 16, 30, 0).getTime();

// Función para actualizar la cuenta regresiva
function actualizarCuentaRegresiva() {
    const ahora = new Date().getTime();
    const tiempoRestante = fechaEvento - ahora;

    // Si ya pasó la fecha
    if (tiempoRestante < 0) {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        document.querySelector(".countdown-title").innerText = "¡La fiesta ya empezó!";
        return; // Detener la ejecución
    }

    // Cálculos de tiempo
    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    // Formatear para que siempre tenga 2 dígitos (ej: 09 en lugar de 9)
    const formatNum = (num) => num < 10 ? `0${num}` : num;

    // Actualizar el DOM
    document.getElementById("days").innerText = formatNum(dias);
    document.getElementById("hours").innerText = formatNum(horas);
    document.getElementById("minutes").innerText = formatNum(minutos);
    document.getElementById("seconds").innerText = formatNum(segundos);
}

// Ejecutar por primera vez inmediatamente
actualizarCuentaRegresiva();

// Actualizar cada segundo (1000 milisegundos)
setInterval(actualizarCuentaRegresiva, 1000);

// =========================================
// PANTALLA DE CARGA (PRELOADER)
// =========================================

window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');

    // Le damos un pequeño retraso (500ms) para que el efecto se aprecie bien
    setTimeout(() => {
        // Añadimos la clase que levanta el telón hacia arriba
        preloader.classList.add('hidden');

        // Después de que termine la animación (800ms), lo quitamos del
        // para que no estorbe al hacer scroll o tocar botones
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 800);

    }, 1200);
});

// =========================================
// CONFIRMACIÓN POR WHATSAPP
// =========================================

document.getElementById('btn-whatsapp').addEventListener('click', function() {

    // 3. Creamos el enlace seguro y lo abrimos
    const url = `https://tinyurl.com/4ck6f5ad`;

    // Abrir WhatsApp
    window.open(url, '_blank');
});