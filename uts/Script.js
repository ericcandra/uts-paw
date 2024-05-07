let inputnama = document.getElementById("nama");
let inputemail = document.getElementById("email");
let inputhp = document.getElementById("hp");
let inputusia = document.getElementById("usia");
let inputurl_foto = document.getElementById("url_foto");
let btnSimpan = document.getElementById("btnSimpan");
let list = document.getElementById("list");
let totalanggota = document.getElementById("totalanggota");
let usiamuda = document.getElementById("usiamuda");
let usiatua = document.getElementById("usiatua");

let data = [];

btnSimpan.addEventListener("click", function () {
  console.log("test");
  if (localStorage.getItem("wdev_npm")) {
    // ada localStorage
    data = JSON.parse(localStorage.getItem("wdev_npm"));
    data.push({
      nama: inputnama.value,
      email: inputemail.value,
      hp: inputhp.value,
      usia: inputusia.value,
      url_foto: inputurl_foto.value,
    });
  } else {
    // belum ada localStorage
    data.push({
      nama: inputnama.value,
      email: inputemail.value,
      hp: inputhp.value,
      usia: inputusia.value,
      url_foto: inputurl_foto.value,
    });
  }
  // simpan ke dalam localStorage
  localStorage.setItem("wdev_npm", JSON.stringify(data));
  getAnggota();
  clearForm();
});

function clearForm() {
  inputnama.innerHTML = "";
  inputemail.innerHTML = "";
  inputhp.innerHTML = "";
  inputusia.innerHTML = "";
  inputurl_foto.innerHTML = "";
}

function getAnggota() {
  list.innerHTML = "";
  data_anggota = JSON.parse(localStorage.getItem("wdev_npm"));
  console.log(data);

  let muda = Infinity; // atau 100
  let tua = 0;
  let total = 0;

  if (localStorage.getItem("wdev_npm")) {
    for (const [index, val] of data_anggota.entries()) {
      list.innerHTML += `
    <div class="col-lg-4 col-sm-6 p-2">
      <div class='card p-2'>
      <div class='row'>
        <div class='col-lg-6'>
        <img src="${val.url_foto}" class="d-block w-100 rounded-circle">
        </div>
        <div class='col-lg-6'>
        <h4>${val.nama}</h4>
        <h6>Usia</h6>
        ${val.usia} tahun
        <h6>Email</h6>
        ${val.email}
        <h6>Hp</h6>
        ${val.hp}
        </div>
      </div>
      </div>
    </div>
    `;

      total++;

      if (parseInt(val.usia) < muda) {
        muda = val.usia;
      }

      if (parseInt(val.usia) > tua) {
        tua = val.usia;
      }
    }
  }

  totalanggota.innerHTML = `<h5>${total}</h5>`;
  usiamuda.innerHTML = `${muda} tahun`;
  usiatua.innerHTML = `${tua} tahun`;
}

getAnggota();

