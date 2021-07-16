function name(){     
    url = window.location.href;
    window.value = url.slice(56,url.length);
}


function getUuid(name){
    fetch(`https://api.hypixel.net/player?name=${name}&key=b3011324-c834-410b-9fe9-245ff9b91640`)
        .then(result => result.json())
        .then(({ player }) => {
            console.log(player.uuid)
    })
}

window.onload(console.log(window.value))