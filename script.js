function bandDetails(band, bandName) {

    var i, details, bandTab;

    details = document.getElementsByClassName("details");
    for (i = 0; i < details.length; i++) {
        details[i].style.display = "none";
    }

    bandTab = document.getElementsByClassName("bandTab");
    for (i = 0; i < bandTab.length; i++) {
        bandTab[i].className = bandTab[i].className.replace(" active", "");
    }

    document.getElementById(bandName).style.display = "block";
    band.currentTarget.className += " active";
}

document.getElementById("defaultTab").click();