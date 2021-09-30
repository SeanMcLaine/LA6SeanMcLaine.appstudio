chbColor.onchange = function() {
    var choices = "Choices: ";
    for (i = 0; i <= chbColor.length - 1; i++) {
        if (chbColor.getValue(i)) {
            choices = choices + i + " ";
        }
    }
    NSB.MsgBox(choices);
};
