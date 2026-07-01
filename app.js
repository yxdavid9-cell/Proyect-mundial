const fechaObjetivo = new Date("June 28, 2026 00:00:00").getTime();

const contador = setInterval(() => {

    const ahora = new Date().getTime();

    const diferencia = fechaObjetivo - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const segundos = Math.floor(
        (diferencia % (1000 * 60)) / 1000
    );

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

    if(diferencia < 0){
        clearInterval(contador);

        document.querySelector(".tiempo").innerHTML =
        "<h2>¡Comenzaron los 16avos de final!</h2>";
    }

}, 1000);

