const container = document.getElementById("rumahAdatList");

rumahAdat.forEach((rumah) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${rumah.gambar}" alt="${rumah.nama}" />
    <h3>${rumah.nama}</h3>
    <p>${rumah.deskripsi}</p>
  `;
  container.appendChild(card);
});
