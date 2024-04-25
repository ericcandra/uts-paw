let inputnama = document.getElementById("nama");
let inputEmail = document.getElementById("Email");
let inputnoHp = document.getElementById("noHp");
let inputGambar = document.getElementById("Gambar");
let inputUsia = document.getElementById("Usia");
let btnSimpan = document.getElementById("btnSimpan");
let list = document.getElementById("list");

let data = [];

btnSimpan.addEventListener("click", function() {
    if (localStorage.getItem("ericcandra_2226240059")) {
        data = JSON.parse(localStorage.getItem("ericcandra_2226240059"));
        data.push({
            nama: inputnama.value,
            Email: inputEmail.value,
            noHp: inputnoHp.value,
            Gambar: inputGambar.value,
            Usia: inputUsia.value,
            
        });
    } else {
        data.push({
            nama: inputnama.value,
            Email: inputEmail.value,
            noHp: inputnoHp.value,
            Gambar: inputGambar.value,
            Usia: inputUsia.value,
        });
    }
    localStorage.setItem("ericcandra_2226240059", JSON.stringify(data));
    // panggil get data
    clearForm();
});


