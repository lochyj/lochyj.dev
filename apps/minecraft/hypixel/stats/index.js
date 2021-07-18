// Function defining
function changeUrl(){
    // Changes the url if there is no search params
    window.location.href = "../";
}

// Run on window load
function readUrl(){
    // Reads the search params and identifies weather its a guild request or a player request
    // Loads the corrosponding script for the query or activates the changeUrl function if no query is found
    // var url = window.location.href;
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get('q')
    console.log(product);
    // var sliceUrl = url.slice('?')
    // if (sliceUrl == NaN){
    //     changeUrl();
    // }
}

function startupScript(){
    
}


window.onload(readUrl())















// function getUuid(name){
//     fetch(`https://api.hypixel.net/player?name=${name}&key=b3011324-c834-410b-9fe9-245ff9b91640`)
//         .then(result => result.json())
//         .then(({ player }) => {
//             console.log(player.uuid)
//     })
// }

// function name(){     
//     url = window.location.href;
//     window.value = url.slice(56,url.length);
// }

