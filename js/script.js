//**************VALORI DEFAULT*******************


let type;
let inputUser;
let output;
let toConvert;
let converted;

$("#type").val(0);
$("#toConvert").val(1);

//$("input").val("0");

//console.log(toConvert);
//console.log(converted);

/*$("button").click(function() {
    var inputUser = $("input").val();
    var output = inputUser * 3.28084;
    var unit = "feet";
    $("#valConv").val(output);
    //attr("placeholder", output + " " + unit);
    //append("<span>" + output + "</span>");
    console.log(output);
})*/




/*************SELETTORE TIPO CONVERSIONE***************/

$("#type").click(function() {
    type = $("#type").val();
    if (type == 1) {
        $(".userSelect").prop("disabled", false);
        $(".select").html('<option value = "1" >Chilometro</option><option value = "2">Metro</option><option value = "3" >Centimetro</option><option value = "4" >Millimetro</option><option value = "5" >Miglio</option><option value = "6" >Iarda</option><option value = "7" >Piede</option><option value = "8" >Pollice</option><option value = "9" >Miglio Nautico</option>')
        $("#type").html('<option value="1">Lunghezza</option><option value="2">Massa</option><option value="3">Temperatura</option>')
        $(".btn").prop("disabled", false);
        $("#valUser").prop("disabled", false);
        toConvert = 1;
        converted = 2;
        $("#converted").val(converted);
    } else if (type == 2) {
        $(".userSelect").prop("disabled", false);
        $(".select").html('<option value = "1" >Tonnellata</option><option value = "2">Chilogrammo</option><option value = "3" >Grammo</option><option value = "4" >Milligrammo</option><option value = "5" >Libbra</option><option value = "6" >Oncia</option>')
        $("#type").html('<option value="1">Lunghezza</option><option value="2">Massa</option><option value="3">Temperatura</option>')
        $("#type").val(2);
        toConvert = 1;
        converted = 2;
        $("#converted").val(converted);
        $(".btn").prop("disabled", false);
        $("#valUser").prop("disabled", false);
    } else if (type == 3) {
        $(".userSelect").prop("disabled", false);
        $(".select").html('<option value = "1" >Celsius</option><option value = "2">Fahrenheit</option><option value = "3" >Kelvin</option>')
        $("#type").html('<option value="1">Lunghezza</option><option value="2">Massa</option><option value="3">Temperatura</option>')
        $("#type").val(3);
        $(".btn").prop("disabled", false);
        $("#valUser").prop("disabled", false);
        toConvert = 1;
        converted = 2;
        $("#converted").val(converted);
    } else {
        $("#type").val(0);
    }
});


/**********SELEZIONE UNITA'**************/

$("#toConvert").click(function() {
    toConvert = $("#toConvert").val();
    if (toConvert == converted) {
        converted++
        $("#converted").val(converted);
    }
    if (converted > $("#toConvert option").length) {
        converted = 1;
        $("#converted").val(converted);
    }
    console.log("value uguale a " + $("#toConvert option").length);
});

$("#converted").click(function() {
    converted = $("#converted").val();
    if (converted == toConvert) {
        toConvert++
        $("#toConvert").val(toConvert);
    }
    if (toConvert > $("#toConvert option").length) {
        toConvert = 1;
        $("#toConvert").val(toConvert);
    }
    console.log(converted);
});


/************CONVERSIONE************/

$("#btn").click(function() {
    conversione();
});


$('#valUser').keypress(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        //Il tasto INVIO ha ASCII uguale a 13
        conversione();
    }
});

$(".form-select").click(function() {
    $("#valUser").val("");
    $("#valConv").val("");
})


/***********BTN COPY/RESET***********/

new ClipboardJS('#copy');


$("#reset").click(function() {
    $(".simplebar-content").html("");
    $("#valUser").val("");
    $("#valConv").val("");
})

/**********FUNZIONI***********/


function conversione() {
    inputUser = $("input").val();
    if ($.isNumeric(inputUser)) {
        if (type == 1) {
            lunghezza();
        } else if (type == 2) {
            massa();
        } else {
            temperatura();
        }
    } else if (inputUser == "") {
        $("#valConv").val("");
    } else {
        $("body").prepend('<div class="alert alert-warning alert-dismissible fade show text-center" role="alert"><strong>ATTENZIONE!</strong> Valore non valido. Inserire un valore numerico.<button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button></div>');
        $("#valUser").val("");
    }
}



function lunghezza() {
    if (toConvert == 1) {
        if (converted == 2) {
            output = inputUser * 1000;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " km = " + output + " m</p>");
        } else if (converted == 3) {
            output = inputUser * 100000;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " km = " + output + " cm</p>");
        } else if (converted == 4) {
            output = inputUser * 1000000;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " km = " + output + " mm</p>");
        } else if (converted == 5) {
            output = inputUser * 0.6214;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " km = " + output + " mi</p>");
        } else if (converted == 6) {
            output = inputUser * 1094;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " km = " + output + " yd</p>");
        } else if (converted == 7) {
            output = inputUser * 3281;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " km = " + output + " ft</p>");
        } else if (converted == 8) {
            output = inputUser * 39370;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " km = " + output + " in</p>");
        } else if (converted == 9) {
            output = inputUser * 0.54;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " km = " + output + " nmi</p>");
        } else {
            console.log("Qualcosa e' andato storto.");
            console.log(converted);
        }
    }
    if (toConvert == 2) {
        if (converted == 1) {
            output = inputUser * (1 / 1000);
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " m = " + output + " km</p>");
        } else if (converted == 3) {
            output = inputUser * 100;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " m = " + output + " cm</p>");
        } else if (converted == 4) {
            output = inputUser * 1000;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " m = " + output + " mm</p>");
        } else if (converted == 5) {
            output = inputUser * 0.0006214;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " m = " + output + " mi</p>");
        } else if (converted == 6) {
            output = inputUser * 1.094;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " m = " + output + " yd</p>");
        } else if (converted == 7) {
            output = inputUser * 3.281;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " m = " + output + " ft</p>");
        } else if (converted == 8) {
            output = inputUser * 39.370;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " m = " + output + " in</p>");
        } else if (converted == 9) {
            output = inputUser * 0.00054;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " m = " + output + " nmi</p>");
        } else {
            console.log("Qualcosa e' andato storto.");
            console.log(converted);
        }
    }
    if (toConvert == 3) {
        if (converted == 1) {
            output = inputUser * (1 / 100000);
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " cm = " + output + " km</p>");
        } else if (converted == 2) {
            output = inputUser * (1 / 100);
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " cm = " + output + " m</p>");
        } else if (converted == 4) {
            output = inputUser * 10;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " cm = " + output + " mm</p>");
        } else if (converted == 5) {
            output = inputUser * 0.000006214;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " cm = " + output + " mi</p>");
        } else if (converted == 6) {
            output = inputUser * 0.01094;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " cm = " + output + " yd</p>");
        } else if (converted == 7) {
            output = inputUser * 0.03281;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " cm = " + output + " ft</p>");
        } else if (converted == 8) {
            output = inputUser * 0.39370;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " cm = " + output + " in</p>");
        } else if (converted == 9) {
            output = inputUser * 0.0000054;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " cm = " + output + " nmi</p>");
        } else {
            console.log("Qualcosa e' andato storto.");
            console.log(converted);
        }
    }
    if (toConvert == 4) {
        if (converted == 1) {
            output = inputUser * (1 / 1000000);
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " mm = " + output + " km</p>");
        } else if (converted == 2) {
            output = inputUser * (1 / 1000);
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " mm = " + output + " m</p>");
        } else if (converted == 3) {
            output = inputUser * (1 / 10);
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " mm = " + output + " cm</p>");
        } else if (converted == 5) {
            output = inputUser * 0.0000006214;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " mm = " + output + " mi</p>");
        } else if (converted == 6) {
            output = inputUser * 0.001094;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " mm = " + output + " yd</p>");
        } else if (converted == 7) {
            output = inputUser * 0.003281;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " mm = " + output + " ft</p>");
        } else if (converted == 8) {
            output = inputUser * 0.039370;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " mm = " + output + " in</p>");
        } else if (converted == 9) {
            output = inputUser * 0.00000054;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " mm = " + output + " nmi</p>");
        } else {
            console.log("Qualcosa e' andato storto.");
            console.log(converted);
        }
    }
    if (toConvert == 5) {
        if (converted == 1) {
            output = inputUser * 1.609344;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " mi = " + output + " km</p>");
        } else if (converted == 2) {
            output = inputUser * 1609.344;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " mi = " + output + " m</p>");
        } else if (converted == 3) {
            output = inputUser * 160934.4;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " mi = " + output + " cm</p>");
        } else if (converted == 4) {
            output = inputUser * 1609344;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " mi = " + output + " mm</p>");
        } else if (converted == 6) {
            output = inputUser * 1760;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " mi = " + output + " yd</p>");
        } else if (converted == 7) {
            output = inputUser * 5280;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " mi = " + output + " ft</p>");
        } else if (converted == 8) {
            output = inputUser * 63360;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " mi = " + output + " in</p>");
        } else if (converted == 9) {
            output = inputUser * 0.868976;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " mi = " + output + " nmi</p>");
        } else {
            console.log("Qualcosa e' andato storto.");
            console.log(converted);
        }
    }
    if (toConvert == 6) {
        if (converted == 1) {
            output = inputUser * 0.0009144;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " yd = " + output + " km</p>");
        } else if (converted == 2) {
            output = inputUser * 0.9144;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " yd = " + output + " m</p>");
        } else if (converted == 3) {
            output = inputUser * 91.44;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " yd = " + output + " cm</p>");
        } else if (converted == 4) {
            output = inputUser * 914.4;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " yd = " + output + " mm</p>");
        } else if (converted == 5) {
            output = inputUser * 0.000568182;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " yd = " + output + " mi</p>");
        } else if (converted == 7) {
            output = inputUser * 3;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " yd = " + output + " ft</p>");
        } else if (converted == 8) {
            output = inputUser * 36;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " yd = " + output + " in</p>");
        } else if (converted == 9) {
            output = inputUser * 0.000493737;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " yd = " + output + " nmi</p>");
        } else {
            console.log("Qualcosa e' andato storto.");
            console.log(converted);
        }
    }
    if (toConvert == 7) {
        if (converted == 1) {
            output = inputUser * 0.0003048;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " ft = " + output + " km</p>");
        } else if (converted == 2) {
            output = inputUser * 0.3048;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " ft = " + output + " m</p>");
        } else if (converted == 3) {
            output = inputUser * 30.48;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " ft = " + output + " cm</p>");
        } else if (converted == 4) {
            output = inputUser * 304.8;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " ft = " + output + " mm</p>");
        } else if (converted == 5) {
            output = inputUser * 0.000189394;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " ft = " + output + " mi</p>");
        } else if (converted == 6) {
            output = inputUser * 0.333333;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " ft = " + output + " yd</p>");
        } else if (converted == 8) {
            output = inputUser * 12;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " ft = " + output + " in</p>");
        } else if (converted == 9) {
            output = inputUser * 0.000164579;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " ft = " + output + " nmi</p>");
        } else {
            console.log("Qualcosa e' andato storto.");
            console.log(converted);
        }
    }
    if (toConvert == 8) {
        if (converted == 1) {
            output = inputUser * (1 / 39370);
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " in = " + output + " km</p>");
        } else if (converted == 2) {
            output = inputUser * (1 / 39.37);
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " in = " + output + " m</p>");
        } else if (converted == 3) {
            output = inputUser * 2.54;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " in = " + output + " cm</p>");
        } else if (converted == 4) {
            output = inputUser * 25.4;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " in = " + output + " mm</p>");
        } else if (converted == 5) {
            output = inputUser * (1 / 63360);
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " in = " + output + " mi</p>");
        } else if (converted == 6) {
            output = inputUser * (1 / 36);
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " in = " + output + " yd</p>");
        } else if (converted == 7) {
            output = inputUser * (1 / 12);
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " in = " + output + " ft</p>");
        } else if (converted == 9) {
            output = inputUser * (1 / 72913);
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " in = " + output + " nmi</p>");
        } else {
            console.log("Qualcosa e' andato storto.");
            console.log(converted);
        }
    }
    if (toConvert == 9) {
        if (converted == 1) {
            output = inputUser * 1.852;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " nmi = " + output + " km</p>");
        } else if (converted == 2) {
            output = inputUser * 1852;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " nmi = " + output + " m</p>");
        } else if (converted == 3) {
            output = inputUser * 185200;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " nmi = " + output + " cm</p>");
        } else if (converted == 4) {
            output = inputUser * 1852000;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " nmi = " + output + " mm</p>");
        } else if (converted == 5) {
            output = inputUser * 1.15078;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " nmi = " + output + " mi</p>");
        } else if (converted == 6) {
            output = inputUser * 2025.37;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " nmi = " + output + " yd</p>");
        } else if (converted == 7) {
            output = inputUser * 6076.12;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " nmi = " + output + " ft</p>");
        } else if (converted == 8) {
            output = inputUser * 72913.4;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " nmi = " + output + " in</p>");
        } else {
            console.log("Qualcosa e' andato storto.");
            console.log(converted);
        }
    }
}

function massa() {
    if (toConvert == 1) {
        if (converted == 2) {
            output = inputUser * 1000;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " t = " + output + " kg</p>");
        } else if (converted == 3) {
            output = inputUser * 1e+6;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " t = " + output + " g</p>");
        } else if (converted == 4) {
            output = inputUser * 1e+9;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " t = " + output + " mg</p>");
        } else if (converted == 5) {
            output = inputUser * 2204.62;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " t = " + output + " lb</p>");
        } else if (converted == 6) {
            output = inputUser * 35274;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " t = " + output + " oz.</p>");
        } else {
            console.log("Qualcosa e' andato storto.");
            console.log(converted);
        }
    }
    if (toConvert == 2) {
        if (converted == 1) {
            output = inputUser * 0.001;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " kg = " + output + " t</p>");
        } else if (converted == 3) {
            output = inputUser * 1000;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " kg = " + output + " g</p>");
        } else if (converted == 4) {
            output = inputUser * 1e+6;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " kg = " + output + " mg</p>");
        } else if (converted == 5) {
            output = inputUser * 2.20462;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " kg = " + output + " lb</p>");
        } else if (converted == 6) {
            output = inputUser * 35.274;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " kg = " + output + " oz.</p>");
        } else {
            console.log("Qualcosa e' andato storto.");
            console.log(converted);
        }
    }
    if (toConvert == 3) {
        if (converted == 1) {
            output = inputUser * 1e-6;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " g = " + output + " t</p>");
        } else if (converted == 2) {
            output = inputUser * 0.001;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " g = " + output + " kg</p>");
        } else if (converted == 4) {
            output = inputUser * 1e+3;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " g = " + output + " mg</p>");
        } else if (converted == 5) {
            output = inputUser * 0.00220462;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " g = " + output + " lb</p>");
        } else if (converted == 6) {
            output = inputUser * 0.035274;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " g = " + output + " oz.</p>");
        } else {
            console.log("Qualcosa e' andato storto.");
            console.log(converted);
        }
    }
    if (toConvert == 4) {
        if (converted == 1) {
            output = inputUser * 1e-9;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " mg = " + output + " t</p>");
        } else if (converted == 2) {
            output = inputUser * 1e-6;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " mg = " + output + " kg</p>");
        } else if (converted == 3) {
            output = inputUser * 1e-3;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " mg = " + output + " g</p>");
        } else if (converted == 5) {
            output = inputUser * 2.20462e-6;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " mg = " + output + " lb</p>");
        } else if (converted == 6) {
            output = inputUser * 3.5274e-5;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " mg = " + output + " oz.</p>");
        } else {
            console.log("Qualcosa e' andato storto.");
            console.log(converted);
        }
    }
    if (toConvert == 5) {
        if (converted == 1) {
            output = inputUser * 0.000453592;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " lb = " + output + " t</p>");
        } else if (converted == 2) {
            output = inputUser * 0.453592;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " lb = " + output + " kg</p>");
        } else if (converted == 3) {
            output = inputUser * 435.592;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " lb = " + output + " g</p>");
        } else if (converted == 4) {
            output = inputUser * 435592;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " lb = " + output + " mg</p>");
        } else if (converted == 6) {
            output = inputUser * 16;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " lb = " + output + " oz.</p>");
        } else {
            console.log("Qualcosa e' andato storto.");
            console.log(converted);
        }
    }
    if (toConvert == 6) {
        if (converted == 1) {
            output = inputUser * 2.835e-5;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " oz. = " + output + " t</p>");
        } else if (converted == 2) {
            output = inputUser * 0.0283495;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " oz. = " + output + " kg</p>");
        } else if (converted == 3) {
            output = inputUser * 28.3495;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " oz. = " + output + " g</p>");
        } else if (converted == 4) {
            output = inputUser * 28349.5;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " oz. = " + output + " mg</p>");
        } else if (converted == 5) {
            output = inputUser * 0.0625;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " oz. = " + output + " lb</p>");
        } else {
            console.log("Qualcosa e' andato storto.");
            console.log(converted);
        }
    }
}

function temperatura() {
    if (toConvert == 1) {
        if (converted == 2) {
            output = (inputUser * 9 / 5) + 32;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " °C = " + output + " °F</p>");
        } else if (converted == 3) {
            output = inputUser + 273.15;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " °C = " + output + " K</p>");
        } else {
            console.log("Qualcosa e' andato storto.");
            console.log(converted);
        }
    }
    if (toConvert == 2) {
        if (converted == 1) {
            output = (inputUser - 32) * 5 / 9;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " °F = " + output + " °C</p>");
        } else if (converted == 3) {
            output = ((inputUser - 32) * 5 / 9) + 273.15;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " °F = " + output + " K</p>");
        } else {
            console.log("Qualcosa e' andato storto.");
            console.log(converted);
        }
    }
    if (toConvert == 3) {
        if (converted == 1) {
            output = inputUser - 273.15;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " K = " + output + " °C</p>");
        } else if (converted == 2) {
            output = (inputUser - 273.15) * 9 / 5 + 32;
            $("#valConv").val(output);
            $(".simplebar-content").append("<p>" + inputUser + " K = " + output + " °F</p>");
        } else {
            console.log("Qualcosa e' andato storto.");
            console.log(converted);
        }
    }
}

/*
Arrotondare toPrecision()
var iNum = 5.123456;
iNum.toPrecision();    // Returns 5.123456
iNum.toPrecision(5);   // Returns 5.1235

switch (converted) {
                case 1:
                    output = inputUser * 1;
                    $("#valConv").val(output);
                    break;
                case 2:
                    output = inputUser * (1 / 1000);
                    $("#valConv").val(output);
                    break;
                case 3:
                    output = inputUser * (1 / 100000);
                    $("#valConv").val(output);
                    break;

                default:
                    console.log("Qualcosa non ha funzionato. Inserisci un nuovo valore.")
            }

            switch (converted) {
            case 1:
                output = inputUser * 1;
                $("#valConv").val(output);
                break;
            case 2:
                output = inputUser * 1000;
                $("#valConv").val(output);
                break;
            case 3:
                output = inputUser * 100000;
                $("#valConv").val(output);
                break;
            case 4:
                output = inputUser * 1000000;
                $("#valConv").val(output);
                break;
            case 5:
                output = inputUser * 100000;
                $("#valConv").val(output);
                break;
            case 6:
                output = inputUser * 100000;
                $("#valConv").val(output);
                break;
            case 7:
                output = inputUser * 100000;
                $("#valConv").val(output);
                break;
            case 8:
                output = inputUser * 100000;
                $("#valConv").val(output);
                break;
            case 9:
                output = inputUser * 100000;
                $("#valConv").val(output);
                break;
            default:
                console.log("Qualcosa e' andato storto.");
                console.log(converted);
        }
            */