const supabaseUrl = 'https://xjvnkrkdlhvirzmqbxyg.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTI1NTU1OCwiZXhwIjoxOTQ2ODMxNTU4fQ._PYJBQGFyyLdlXUFARvwrcOCmlBLVgckSON05pxezS0'
const supabased = supabase.createClient(supabaseUrl, SUPABASE_KEY)

const nama = document.getElementById('floatingInput')
const form = document.forms['submit-pesan']
const pesan = document.getElementById('floatingTextarea')
const konfirmasi = document.getElementById('selectKehadiran')
//const jumlah = document.getElementById('selectJumlahTamu')
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
                Konfirmasi: konfirmasi.value, 
                //Jumlah: konfirmasi.value == "Hadir" ? jumlah.value : 0 
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

// const scriptURL = 'https://script.google.com/macros/s/AKfycbxFEMv9SDYsSwpxXv9F2fzhzo-yMLFqZbE0OIBFP7GsyEp_zKzhRJOajjkeikREhpTm/exec'
// const form = document.forms['submit-kehadiran']
// const btnKirim = document.querySelector('.btn-kirim')
// const btnLoading = document.querySelector('.btn-loading')
// const alertBerhasil = document.querySelector('.alert-berhasil')
// const alertGagal = document.querySelector('.alert-gagal')

// form.addEventListener('submit', e => {
//         e.preventDefault()
//         btnLoading.classList.toggle('d-none')
//         btnKirim.classList.toggle('d-none')
//         let isi = new FormData(form)
//         console.log(isi)
//         fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//             .then(response => {
//                 console.log('Success!', response)
//                 btnLoading.classList.toggle('d-none')
//                 btnKirim.classList.toggle('d-none')
//                 alertBerhasil.classList.toggle('d-none')
//                 form.reset()
//             })
//             .catch(error => {
//                 console.error('Error!', error.message)
//                 alertGagal.classList.toggle('d-none')
//             })
//     })
