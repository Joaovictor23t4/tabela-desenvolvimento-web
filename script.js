function corMatematica() {
    let matematica = document.getElementsByClassName("matematica");

    for (let i = 0; i < matematica.length; i++) {
        let matematicaElemento = matematica[i];

        matematicaElemento.addEventListener("mouseenter", function () {
            for (let j = 0; j < matematica.length; j++) {
                matematica[j].classList.add("matematica-hover");
            }
        });

        matematicaElemento.addEventListener("mouseleave", function() {
            for (let j = 0; j < matematica.length; j++) {
                matematica[j].classList.remove("matematica-hover");
            }
        });
    }
}
corMatematica();

function corTecnico() {
    let tecnico = document.getElementsByClassName("tecnico");

    for (let i = 0; i < tecnico.length; i++) {
        let tecnicoElemento = tecnico[i];

        tecnicoElemento.addEventListener("mouseenter", function () {
            for (let j = 0; j < tecnico.length; j++) {
                tecnico[j].classList.add("tecnico-hover");
            }
        });

        tecnicoElemento.addEventListener("mouseleave", function () {
            for (let j = 0; j < tecnico.length; j++) {
                tecnico[j].classList.remove("tecnico-hover");
            }
        });
    }
}

corTecnico();

function corPortugues() {
    let portugues = document.getElementsByClassName("lgPort");

    for (i = 0; i < portugues.length; i++) {
        let portuguesElemento = portugues[i];

        portuguesElemento.addEventListener("mouseenter", function () {
            for (j = 0; j < portugues.length; j++) {
                portugues[j].classList.add("portugues-hover");
            }
        });

        portuguesElemento.addEventListener("mouseleave", function () {
            for (j = 0; j < portugues.length; j++) {
                portugues[j].classList.remove("portugues-hover");
            }
        });
    }
}

corPortugues();