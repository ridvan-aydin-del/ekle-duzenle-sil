// Kişileri içeren bir dizi oluşturun
let kisiler = [];

// Ekle butonuna tıklandığında çalışacak olan fonksiyon
function addPerson() {
  // Ad , soyad , numara , ülke alanlarından değerleri alın
  let ad = document.getElementById("adInput").value;
  let soyad = document.getElementById("soyadInput").value;
  let numara = document.getElementById("numaraInput").value;
  let ulke = document.getElementById("ulkeInput").value;

  // Ad , soyadın , numara , ülke boş olup olmadığını kontrol edin
  if (ad === "" || soyad === "" || numara === "" || ulke === "") {
    alert("Lütfen boşlukları doldurunuz.");
    return;
  }

  // Yeni kişiyi diziye ekleyin
  kisiler.push({ ad: ad, soyad: soyad, numara: numara, ulke: ulke });

  // Kişilerin listeleneceği <ul> öğesini seçin
  let liste = document.getElementById("liste");

  // <ul> öğesinin içeriğini temizleyin
  liste.innerHTML = "";

  // Kişileri listeye ekleyin
  kisiler.map(function (kisi) {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.appendChild(document.createTextNode(kisi.ad + " " + kisi.soyad + " " + kisi.numara + " " + kisi.ulke));
    li.appendChild(span);

    // Düzenle düğmesi ekle
    let duzenleBtn = document.createElement("button");
    duzenleBtn.appendChild(document.createTextNode("Düzenle"));
    duzenleBtn.onclick = function () {
      let yeniAd = prompt("Lütfen yeni adı girin:", kisi.ad);
      let yeniSoyad = prompt("Lütfen yeni soyadı girin:", kisi.soyad);
      let yeniNumara = prompt("Lütfen yeni numarayı girin:", kisi.numara);
      let yeniUlke = prompt("Lütfen yeni ülkeyi girin:", kisi.ulke);

      if (yeniAd === "" || yeniSoyad === "" || yeniNumara === "" || yeniUlke === "") {
        alert("Lütfen bilgileri giriniz.");
        return;
      }

      kisi.ad = yeniAd;
      kisi.soyad = yeniSoyad;
      kisi.numara = yeniNumara;
      kisi.ulke = yeniUlke;
      span.textContent = kisi.ad + " " + kisi.soyad + " " + kisi.numara + " " + kisi.ulke;
    };
    li.appendChild(duzenleBtn);

    // Sil düğmesi ekle
    let silBtn = document.createElement("button");
    silBtn.appendChild(document.createTextNode("Sil"));
    silBtn.onclick = function () {
      kisiler = kisiler.filter(function (item) {
        return item !== kisi;
      });
      li.remove();
    };
    li.appendChild(silBtn);

    liste.appendChild(li);
  });

  // Ad , soyad , numara , ülke alanlarını temizleyin
  document.getElementById("adInput").value = "";
  document.getElementById("soyadInput").value = "";
  document.getElementById("numaraInput").value = "";
  document.getElementById("ulkeInput").value = "";
}
