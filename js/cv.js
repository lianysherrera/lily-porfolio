
function descargarCurriculum() {
    var link = document.createElement("a");
    link.href = "/pdf/_HerreraLiany.pdf";
    link.target = "_blank";
    link.download = "_HerreraLiany.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}