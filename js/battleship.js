var matriz = [] //Que coisa horrenda
var posicoesClicadas = []

function preencheNavios(){  
  for (let i=0; i<5; i++) {
    let linhaConstruida = []
    for (let j=0; j<5; j++) {
      let trueOrFalse = Math.round(Math.random())

      linhaConstruida.push(trueOrFalse === 1)
    }
    matriz.push(linhaConstruida)
  }
}

function atacar(id){
  let coordenadas = id.split("")
  let linhaAlvo = matriz[coordenadas[0]]
  if (!conferePalpite(id)){
    if (linhaAlvo[coordenadas[1]]){ // Vai ver se é true ou false
      alert("Acertou!")
      document.getElementById(id).classList.add("color-block-hit")
      $(`#${id}`).append(`<img src="img/navio.png" style="width: 50px; align-items: center">`)
    } else {
      alert("Apenas água...")
      document.getElementById(id).classList.add("color-block-miss")
    }
  }
}

function conferePalpite(pos) {
  if (posicoesClicadas.includes(pos)) {
    alert("Você já atirou nessa posição!")
    return true
  } else { 
    posicoesClicadas.push(pos)
    return false
  }
}

window.onload = preencheNavios