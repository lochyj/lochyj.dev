function getInfo(){
    var name = document.getElementById("z").value;
    var url = window.location.href
    window.location.replace(url + '#' + name);
}