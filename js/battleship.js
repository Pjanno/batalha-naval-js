var matriz = [] //Que coisa horrenda

function preencheNavios(){  
  for (let i=0; i<5; i++) {
    let linhaConstruida = []
    for (let j=0; j<5; j++) {
      let trueOrFalse = Math.round(Math.random())

      if (trueOrFalse == 1) {
        linhaConstruida.push(true)
        console.log("true")
      }  else {
        console.log("false")
        linhaConstruida.push(false)
      }
    }
    matriz.push(linhaConstruida)
  }
}

function atacar(id){
  alert(id)
  let coordenadas = id.split("")
  let linhaAlvo = matriz[coordenadas[0]]
  if (linhaAlvo[coordenadas[1]]){ // Vai ver se é true ou false
    document.getElementById(id).classList.remove("color-block")
    alert("Acertou!")
    document.getElementById(id).classList.add("color-block-hit")
  } else {
    document.getElementById(id).classList.remove("color-block")
    alert("Apenas água...")
    document.getElementById(id).classList.add("color-block-miss")
  }
}

window.onload = preencheNavios