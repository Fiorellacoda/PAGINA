// Menú responsive
document.querySelector(".menu-toggle").addEventListener("click", function() {
  document.querySelector("nav ul").classList.toggle("show");
});

// Enviar formulario a la API
const form = document.getElementById("cotizacionForm");
if (form) {
  form.addEventListener("submit", async function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const response = await fetch("http://127.0.0.1:8000/cotizacion", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    alert(data.mensaje);
    form.reset();
  });
}
