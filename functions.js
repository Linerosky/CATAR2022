function config() {
    var fechaini = "0";
    var horaini = "0";
    var fechafin = "0";
    var horafin = "0";

    $.ajax({
        url: 'config.php',
        type: 'post',
        data: {
            fechaini: fechaini,
            fechafin: fechafin,
            horaini: horaini,
            horafin: horafin
        }

    }).done(function (res) {
        data = JSON.parse(res);
    })
}

function online() {
    var fechaini = "0";
    var horaini = "0";
    var fechafin = "0";
    var horafin = "0";

    $.ajax({
        url: 'on-line.php',
        type: 'post',
        data: {
            fechaini: fechaini,
            fechafin: fechafin,
            horaini: horaini,
            horafin: horafin
        }

    }).done(function (res) {
        data = JSON.parse(res);
    })
}

function program() {
    var fechaini = "0";
    var horaini = "0";
    var fechafin = "0";
    var horafin = "0";

    $.ajax({
        url: 'program.php',
        type: 'post',
        data: {
            fechaini: fechaini,
            fechafin: fechafin,
            horaini: horaini,
            horafin: horafin
        }

    }).done(function (res) {
        data = JSON.parse(res);
    })
}

function visorweb() {
    var fechaini = "0";
    var horaini = "0";
    var fechafin = "0";
    var horafin = "0";

    $.ajax({
        url: 'visor-web.php',
        type: 'post',
        data: {
            fechaini: fechaini,
            fechafin: fechafin,
            horaini: horaini,
            horafin: horafin
        }

    }).done(function (res) {
        data = JSON.parse(res);
    })
}