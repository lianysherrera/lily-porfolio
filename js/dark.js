document.addEventListener("DOMContentLoaded", () => {
    const switchElement = document.querySelector(".switch");
    const logoImage = document.querySelector(".logo img");
    const StarImage = document.querySelectorAll(".star.img-containerd");
    const ordenador = document.querySelectorAll(".d-flex img");

    
    switchElement.addEventListener("click", () => {
        switchElement.classList.toggle("active");
        document.body.classList.toggle("active");

        if (switchElement.classList.contains("active")) {
            logoImage.src = "/images/logoo.png";
        } else {
            logoImage.src = "/images/logo.png";
        }
        StarImage.forEach((starImage) => {
            if (switchElement.classList.contains("active")) {
                starImage.src = "images/estrella_blanca.png";
            } else {
                starImage.src = "images/estrellanegra.png";
            }
        });
        ordenador.forEach((ordenadorr) => {
            if (switchElement.classList.contains("active")) {
                ordenadorr.src = "images/ordenadormorado.png";
            } else {
                ordenadorr.src = "images/ordenador.png";
            }
        });
    });
});


