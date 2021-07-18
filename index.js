function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function devButton(){
    var val = parseInt(document.getElementById('number').innerHTML);
    if (val <= 98) {
        var value = parseInt(document.getElementById('number').innerHTML, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        await sleep('100')
        document.getElementById('number').innerHTML = value;
    }
    if (val >= 99) {
        document.getElementById('number').innerHTML = "o";
        document.getElementById('a').removeAttr('onclick');
        frame()
    }
}

// window.onload = function;