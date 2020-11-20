$().ready(function () {

    $("#accordion").accordion({

        heightStyle: "content",
        icons: {
            header: 'ui-icon-circle-plus',
            activeHeader: 'ui-icon-circle-minus'
        }
    });
    $("#datepickerStart").datepicker({
        minDate: 0,
        onSelect: function (selected) {
            var dateTemp = new Date(selected);
            dateTemp.setDate(dateTemp.getDate());
            $("#datepickerEnd").datepicker("option", "minDate", dateTemp);
        }
    });


    
});
function changeProgress(value) {
    $("#progressBar").attr("value", value);
    switch (value) {

        case 0:
            document.getElementById("stepOf").innerHTML = "1";
            break;
        case 20:
            document.getElementById("stepOf").innerHTML = "2";
            break;
        case 40:
            document.getElementById("stepOf").innerHTML = "3";
            break;
        case 60:
            document.getElementById("stepOf").innerHTML = "4";
            break;
        case 80:
            document.getElementById("stepOf").innerHTML = "5";
            break;
        case 100:
            document.getElementById("stepOf").innerHTML = "6";
            break;
    }
    ;
}

function showEmploySection() {
    document.getElementById("prevEmployed").classList.remove('hide');
    document.getElementById("prevEmployed").classList.add('show');
}
function hideEmploySection() {
    document.getElementById("prevEmployed").classList.remove('show');
    document.getElementById("prevEmployed").classList.add('hide');
}

function showAvailSection() {
    document.getElementById("offWorkReason").classList.remove('hide');
    document.getElementById("offWorkReason").classList.add('show');
}
function hideAvailSection() {
    document.getElementById("offWorkReason").classList.remove('show');
    document.getElementById("offWorkReason").classList.add('hide');
}