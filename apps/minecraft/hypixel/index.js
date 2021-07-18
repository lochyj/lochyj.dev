function getInfo(){
    var name = document.getElementById("z").value;
    var url = "stats/"
    // user
    window.location.replace(url + '?' + 'q=user&name=' +  name);
    // guild
}
