function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function classChange(a, b){
    var cls = b;
    var adsb = a;
    if (adsb == 'add'){
        document.getElementById('bodyText').classList.add(cls);
    }
    if (adsb == 'remove'){
            document.getElementById('bodyText').classList.remove(cls);
    }
}

function textChange(a){
    document.getElementById('bodyText').innerHTML = a;
}


async function greetingTemp(text){
    classChange('remove', 'fade-out')
    textChange(text)
    classChange('add', 'fade-in')
    await sleep(3000)
    classChange('remove', 'fade-in')
    await sleep(1)
    classChange('add', 'fade-out')
}

async function onLoadGreeting(){
    document.title = 'Hello, Traveller!';
    await greetingTemp('Hello, Traveller!')
    await sleep(2000)
    document.title = 'Welcome';
    await greetingTemp('Welcome to my website,<br>Here I make games and Utilise APIs')
    await sleep(2000)
    document.title = '';
    await greetingTemp('Anyways on to the website,<br>Have a good look around!')
    await sleep(2000)
    classChange('remove', 'fade-out')
    document.getElementById('bodyText').innerHTML = 'Loading.';
    await sleep(1000)
    document.getElementById('bodyText').innerHTML = 'Loading..';
    await sleep(1000)
    document.getElementById('bodyText').innerHTML = 'Loading...';
    await sleep(1000)



}

function webLoad(){
    document.getElementById('bodyText').remove();
}

async function onLoad(){
    await onLoadGreeting()
    webLoad()
    await sleep(100)

}

window.onload = onLoad;