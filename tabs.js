
function openContent(evt, Content) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    // foreach
    for (i = 0; i < tablinks.length; i++) {
        // remove
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(Content).style.display = "block";

    // classlist
    evt.currentTarget.className += " active";
}
