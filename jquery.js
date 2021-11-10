//kontrol musik
let played = true;
function toggleMuteAudio(){
    played = !played;
    $("#bgm").prop("muted",!$("#bgm").prop("muted"));
    played? $("#toggleMusik").attr("src", "static/img/icon/speaker-filled-audio-tool.png") : $("#toggleMusik").attr("src", "static/img/icon/no-sound.png");
}

// $('#myElementId').on('click', function(event){
//     alert('CLICK');
//     // do something else.
//     event.preventDefault();
// });

$(document).ready(function () {
    //popup nama
    $('#memberModal').modal('show');
});

function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)  {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1].replaceAll("+"," ");
        }
    }
}
let to = GetURLParameter('to');

let sesi = GetURLParameter('sesi');

document.getElementById("diundang").innerHTML = to == undefined ? "Tamu Terhormat" : to;
document.getElementById("sesi").innerHTML = sesi == undefined ? "Sesi 1 (10.30 - 11.30)" : sesi == "1" ? "Sesi 1 (10.30 - 11.30)" : sesi == "2" ? "Sesi 2 (11.30 - 12.30)" : "Sesi 3 (12.30 - 13.30)";
document.getElementById("session").innerHTML = sesi == undefined ? "10.30 - 11.30 (Sesi 1)" : sesi == "1" ? "10.30 - 11.30 (Sesi 1)" : sesi == "2" ? "11.30 - 12.30 (Sesi 2)" : "12.30 - 13.30 (Sesi 3)";

//carousel

async function loadData() {
    const { data: Ucapan, error } = await supabased
    .from('Ucapan')
    .select('*')

    if(!error) {
        //loop display data here
        const parent = document.getElementById('carousel')

        let contents = ''
        Ucapan.forEach(function(item){
            contents += `
            <div class="card" style="width: 100%;">
                <div class="card-body">
                    <p class="card-text">${item.Pesan}</p>
                    <p class="card-text">- <i>${item.Nama}</i> <span class="badge bg-warning">${item.Konfirmasi}</span></p>
                </div>
            </div>` 
        })

        parent.insertAdjacentHTML('beforeend', contents)
    }
}
loadData()

// Set the date we're counting down to
var countDownDate = new Date("Dec 5, 2021 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("waktu").innerHTML = days + "<br> Hari";

  document.getElementById("jam").innerHTML = hours + "<br> jam";

  document.getElementById("menit").innerHTML = minutes + "<br> menit";

  document.getElementById("detik").innerHTML = seconds + "<br> detik";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("waktu").innerHTML = " IT'S ";

    document.getElementById("jam").innerHTML = " THE ";

    document.getElementById("menit").innerHTML = " DAY ";

    document.getElementById("detik").innerHTML = " !!! ";
  }
}, 1000);