const supabaseUrl = 'https://xjvnkrkdlhvirzmqbxyg.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTI1NTU1OCwiZXhwIjoxOTQ2ODMxNTU4fQ._PYJBQGFyyLdlXUFARvwrcOCmlBLVgckSON05pxezS0'
const supabased = supabase.createClient(supabaseUrl, SUPABASE_KEY)

const nama = document.getElementById('floatingInput')
const form = document.forms['submit-pesan']
const pesan = document.getElementById('floatingTextarea')
// const konfirmasi = document.getElementById('selectKehadiran')
// const jumlah = document.getElementById('selectJumlahTamu')
const btnKirim = document.querySelector('.btn-kirim')
const btnLoading = document.querySelector('.btn-loading')
const alertBerhasil = document.querySelector('.alert-berhasil')
const alertGagal = document.querySelector('.alert-gagal')

form.addEventListener('submit', e => {
        e.preventDefault()
        btnLoading.classList.toggle('d-none')
        btnKirim.classList.toggle('d-none')
        supabased
        .from('Ucapan')
          .insert([
            { Nama: nama.value, 
                Pesan: pesan.value, 
                Konfirmasi: "Tidak Hadir (announcement)", 
                Jumlah: 0 
            }
        ]).then(response => {
            console.log('Success!')
            btnLoading.classList.toggle('d-none')
            btnKirim.classList.toggle('d-none')
            alertBerhasil.classList.toggle('d-none')
            form.reset()
        })
        .catch(error => {
            console.error('Error!', error)
            alertGagal.classList.toggle('d-none')
        })            
    })

//carousel

async function loadData() {
    const { data: Ucapan, error } = await supabased
    .from('Ucapan')
    .select('*').neq('Pesan', "");

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

let played = true;
var audioElement = document.createElement('audio');

$(document).ready(function() {
    $("#selectKehadiran").val("Hadir");
    $("#selectJumlahTamu").val(1);
    // let hadir = $("#selectKehadiran").val();

    $('#memberModal').modal('show');

    $('#toggleMusik').click(function() {
    played = !played;
    if (played) {
        audioElement.play();
        $("#toggleMusik").attr("src", "static/img/icon/speaker-filled-audio-tool.png");
    } else {
        audioElement.pause();
        $("#toggleMusik").attr("src", "static/img/icon/no-sound.png");
    }
    }); 

    $('#selectKehadiran').change(function(){
        var hadir= $(this).val();
        if (hadir == "Tidak Hadir") {
            $("#selectJumlahTamu").attr("disabled", true);
            $("#selectJumlahTamu").val(0);
        } else {
            $("#selectJumlahTamu").removeAttr("disabled");
            $("#selectJumlahTamu").val(1);
        }             
      }); 
});

function playBGM() {
    //kontrol musik
    audioElement.setAttribute('src', 'static/sound/bgm.mp3');
    audioElement.setAttribute('autoplay', 'autoplay');
    //audioElement.load()
    $.get();
    audioElement.addEventListener("load", function() {
    audioElement.play();
    }, true);
}

function toggleMuteAudio(){
    played = !played;
    played? audioElement.play() : audioElement.pause();
    // $("#bgm").prop("muted",!$("#bgm").prop("muted"));
    played? $("#toggleMusik").attr("src", "static/img/icon/speaker-filled-audio-tool.png") : $("#toggleMusik").attr("src", "static/img/icon/no-sound.png");
}

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

// Set the date we're counting down to
var countDownDate = new Date("Dec 5, 2021 8:30:00").getTime();

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
  document.getElementById("waktu").innerHTML = days;

  document.getElementById("jam").innerHTML = hours;

  document.getElementById("menit").innerHTML = minutes;

  document.getElementById("detik").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("waktu").innerHTML = "D";

    document.getElementById("jam").innerHTML = "D";

    document.getElementById("menit").innerHTML = "A";

    document.getElementById("detik").innerHTML = "Y";
  }
}, 1000);