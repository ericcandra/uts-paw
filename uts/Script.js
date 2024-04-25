let inputnama = document.getElementById("nama");
let inputEmail = document.getElementById("Email");
let inputnoHp = document.getElementById("noHp");
let inputUrlfoto = document.getElementById("Urlfoto");
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
            Urlfoto: inputUrlfoto.value,
            Usia: inputUsia.value,
            
        });
    } else {
        data.push({
            nama: inputnama.value,
            Email: inputEmail.value,
            noHp: inputnoHp.value,
            Urlfoto: inputUrlfoto.value,
            Usia: inputUsia.value,
        });
    }
    localStorage.setItem("ericcandra_2226240059", JSON.stringify(data));
    // panggil get data
    clearForm();
});

function clearForm(){
    // clear element list
    list.innerHTML ="komunitas web developer";

    if (localStorage.getItem("ericcandra_2226240059")) {
        data = JSON.parse(localStorage.getItem("ericcandra_2226240059"));
        for(const [index, row] of data.entries()){
            list.innerHTML += `<tr><td>${row.nama}<td><td> ${row.Email}</td></tr> 
            ${row.noHp}</td></tr> ${row.Gambar}</td></tr> ${row.Usia}</td></tr>`;
        }
    }
}   


