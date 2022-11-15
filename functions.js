function sendT() {
    var fechaini = "0";
    var horaini = "0";
    var fechafin = "0";
    var horafin = "0";

    $.ajax({
        url: 'datadb.php',
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

