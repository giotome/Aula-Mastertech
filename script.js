let titulo = document.querySelector('h1');
let texto = document.querySelector('p');
let foto = document.querySelector('h2');
let oi = document.querySelector('h3');
let tudobem = document.querySelector('h4');

function mudarTitulo() {
  titulo.innerHTML = 'Sua cidade';
}

function mudarTexto() {
  texto.style.color = 'red';
  texto.style.backgroundColor = 'blue';
}

function mudarFoto() {
  foto.style.color = 'pink';
}

function mudarOi() {
  oi.innerHTML = 'Parabéns';
  oi.style.color = '#e8f442';
}

function mudarTudobem() {
  tudobem.style.color = '#26b8d6';
  tudobem.style.backgroundColor = '#9226d6';


}
