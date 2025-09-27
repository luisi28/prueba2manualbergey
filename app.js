async function buscar() {
  const query = document.getElementById("searchBox").value.toLowerCase();
  const res = await fetch("bal.json");
  const data = await res.json();

  const bacteria = data.find(b => b.nombre.toLowerCase().includes(query));

  const resultado = document.getElementById("resultado");
  if (bacteria) {
    resultado.innerHTML = `
      <h2>${bacteria.nombre}</h2>
      <p><b>Morfología:</b> ${bacteria.morfologia}</p>
      <p><b>Metabolismo:</b> ${bacteria.metabolismo}</p>
      <p><b>Hábitat:</b> ${bacteria.habitat}</p>
      <p><b>Importancia:</b> ${bacteria.importancia}</p>
      <img src="${bacteria.imagen}" alt="${bacteria.nombre}">
    `;
  } else {
    resultado.innerHTML = "<p>No se encontró la bacteria buscada.</p>";
  }
}