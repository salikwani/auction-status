var url = "https://gauravgitacc.github.io/postAppData/auctionData.json";
var data = [];
// function getData() {
//     document.getElementById("loading").style.display = "none";
//     fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         for(var i=0;i<data.length;i++) {
//             document.getElementById("tabs").innerHTML += `<div class="tab">
//                                                             <div>
//                                                                 <h1 class='${data[i].status=="APPROVED" ? "approved":data[i].status=="PENDING" ? "pending":data[i].status=="COMPLETED" ? "completed":"cancelled"}'>${data[i].status}</h1>
//                                                                 <h3>${data[i].caseNumber}</h3>
//                                                             </div>
//                                                             <div class="date">${data[i].date}</div>
//                                                             <div class="line"></div>
//                                                             <div style="flex-grow: 1"> 
//                                                                 <strong>${data[i].toLocation.trim()}</strong>
//                                                                 <p>${data[i].fromLocation}<span style="float:right;">${data[i].fare}</span></p>
//                                                             </div>
//                                                         </div>`
//         }
//     })
//     .catch(err => console.log('error',err));
// }


if(sessionStorage.getItem("loadedData")) {
    var loadedData = JSON.parse(sessionStorage.getItem("loadedData"));
    data = loadedData;
    showData();
} else {
    getData();
}

function showData() {
    for(var i=0;i<data.length;i++) {
        document.getElementById("tabs").innerHTML += `<div class="tab">
                                                        <div>
                                                            <h1 class='${data[i].status=="APPROVED" ? "approved":data[i].status=="PENDING" ? "pending":data[i].status=="COMPLETED" ? "completed":"cancelled"}'>${data[i].status}</h1>
                                                            <h3>${data[i].caseNumber}</h3>
                                                        </div>
                                                        <div class="date">${data[i].date}</div>
                                                        <div class="line"></div>
                                                        <div style="flex-grow: 1"> 
                                                            <strong>${data[i].toLocation.trim()}</strong>
                                                            <p>${data[i].fromLocation}<span style="float:right;">${data[i].fare}</span></p>
                                                        </div>
                                                    </div>`
    }
}

async function getData() {
    try {
        const response = await fetch(url);
        data = await response.json();
        if(data) {
            console.log(data);
            sessionStorage.setItem("loadedData",JSON.stringify(data));
            showData();
        }
        document.getElementById("loading").style.display = "none";
    }
    catch(e) {
        console.log('error',e);
    }
}

