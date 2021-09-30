chbColor.onchange = function() {
    var choices = "Choices: ";
    for (i = 0; i <= chbColor.length - 1; i++) {
        if (chbColor.getValue(i)) {
            choices = choices + i + " ";
        }
    }
    NSB.MsgBox(choices);
};


/*Control 2*/

drpPlaces.onclick = function(s) {
    if (typeof(s) == "object") {
        return;
    }
    NSB.MsgBox(s + " " + drpPlaces.selection);
};

/*Control 3*/


jumboClimate.onclick = function() {
    NSB.MsgBox("Buy eletric cars or else");
};




/*Control 4*/

Progressbar1.value=60;