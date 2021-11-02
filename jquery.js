//kontrol musik
let played = true;
function toggleMuteAudio(){
    played = !played;
    $("#bgm").prop("muted",!$("#bgm").prop("muted"));
    console.log(played);
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
    //carousel
    $('#carousel').slick({
        infinite: true,
        //slidesToShow: 1,
        //slidesToScroll: 1
    });

});

function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)  {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1].replace("+"," ");
        }
    }
}
let to = GetURLParameter('to');

//to = to.replace("+"," ");

document.getElementById("diundang").innerHTML = to == undefined ? "Tamu Terhormat" : to;

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
            contents += `<div>
                            <h1>${item.Nama}</h1>
                            <p>${item.Pesan}</p>
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
  document.getElementById("waktu").innerHTML = days + " Hari ";

  document.getElementById("jam").innerHTML = hours + " jam ";

  document.getElementById("menit").innerHTML = minutes + " menit ";

  document.getElementById("detik").innerHTML = seconds + " detik ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("waktu").innerHTML = days + " IT'S ";

    document.getElementById("jam").innerHTML = hours + " THE ";

    document.getElementById("menit").innerHTML = minutes + " DAY ";

    document.getElementById("detik").innerHTML = seconds + " !!! ";
  }
}, 1000);