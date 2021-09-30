
drpPlaces.onclick = function(s) {
    if (typeof(s) == "object") {
        return;
    }
    NSB.MsgBox(s + " " + drpPlaces.selection);
};