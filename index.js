function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function devButton(){
    var val = parseInt(document.getElementById('number').innerHTML);
    if (val >= 150) {
        var value = parseInt(document.getElementById('number').innerHTML, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById('number').innerHTML = value + '!';
    }
}

// window.onload = function;