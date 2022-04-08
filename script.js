b = ['wood', 'water', 'mountain', 'person', 'sun', 'wind','tree', 'bird', 'horse']
a = ['madeira','água','motanha','pessoa','sol','vento','arvore','passaro','cavalo']
c = []

num = 0

// Object.values(b).map(e=>c[e] = a[num++])
Object.values(a).map(e=>c[e] = b[num++])

function proximoNovo(){
    numero_aleatorio = parseInt(Math.random()*a.length)
    btmain.innerHTML = a[numero_aleatorio]

    botoes_escolha = [...document.querySelectorAll(".btescolha")]
    lista_nomes = [b[numero_aleatorio]]

    for(i=0;i<botoes_escolha.length-1;i++){
        numero_aleatorio = parseInt(Math.random()*a.length)
        lista_nomes.push(b[numero_aleatorio])
    }

    lista_nomes = shuffle(lista_nomes)
    lista_nomes.map((a,b)=>botoes_escolha[b].innerHTML = a)

    //zerar as cores
    botoes_escolha.map(e=>e.classList.remove('certo','errado'))
    btproximo.classList.remove('visible')
}

proximoNovo()

function resultadoBt(e){
    valordobotao = e.innerHTML
    if(a[b.indexOf(valordobotao)] == btmain.innerHTML){
        
        
        

        if(!e.classList.contains('certo')){
            e.classList.add('certo')
            btproximo.classList.add('visible')
            
        }else{
            proximoNovo()
        }
        //     e.onmousedown=()=>proximoNovo()

    }else{
        e.classList.add('errado')
    }

    
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }