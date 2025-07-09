// parte 1
const lista = [
    {id: 1, nome: "Maria", password: "1234", imagem: "ok.jpg", link: "https://www.youtube.com/"},
    {id: 2, nome: "Renata", password: "4321", imagem: "ok.jpg", link: "https://www.google.com/"},
    {id: 3, nome: "Joana", password: "abcd", imagem: "ok.jpg", link: "https://g1.globo.com/"},
]

function verificaUsuario(login, password){
    // const login = "Renata"
    // const password = "4321"

    const obj_encontrado = lista.find(e=> e.nome == login && e.password == password  )

    if(obj_encontrado){
        const link = obj_encontrado.link
        window.location.href = link
    }else{
        alert("Não existe")
    }
}

// parte 2
const btTestar = document.querySelector("#btTestar")
btTestar.addEventListener('click', e=>{
    verificaUsuario(login.value, senha.value)
})
