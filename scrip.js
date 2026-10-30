console.log("Script funcionando");

// Esta función se ejecuta sola en cuanto la página termina de cargar por completo
window.onload = function() {
    
    // Verifica si la librería de confeti está cargada en el HTML
    if (typeof confetti === "function") {
        
        confetti({
            particleCount: 300,  /* Cantidad de papelitos */
            spread: 150,         /* Qué tanto se abren hacia los lados */
            startVelocity: 50,   /* La fuerza con la que salen disparados */
            origin: { y: 0.6 }   /* Altura desde donde salen (0.6 es un poco abajo del centro) */
        });
        
    } else {
        console.log("Error: La librería de confetti no está enlazada en el HTML.");
    }
};
