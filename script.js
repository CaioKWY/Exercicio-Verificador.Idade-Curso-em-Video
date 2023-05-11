function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("Verifique o ano e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var sexo = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if (fsex[0].checked) {
            sexo = "Homem"
            if (idade >= 0 && idade < 4){
                //bebe
                img.setAttribute("src", "./imagens/bebe-o.png")
            }else if (idade < 7){
                //crianca
                img.setAttribute("src", "./imagens/menino.png")
            }else if (idade < 15){
                //adolescente
                img.setAttribute("src", "./imagens/adolescente-o.png")
            }else if (idade < 21){
                //jovem
                img.setAttribute("src", "./imagens/jovem-o.png")
            }else if (idade < 35){
                //jovem adulto
                img.setAttribute("src", "./imagens/homem-jovem.png")
            }else if (idade < 55){
                //adulto
                img.setAttribute("src", "./imagens/homem.png")
            }else if (idade < 110){
                //idoso
                img.setAttribute("src", "./imagens/idoso.png")
            }else {
                //caveira
                img.setAttribute("src", "./imagens/caveira.png")
                document.body.style.background = "black"
            }
            
        } else if (fsex[1].checked){
            sexo = "Mulher"
            if (idade >= 0 && idade < 4){
                //bebe
                img.setAttribute("src", "./imagens/bebe-a.png")
            }else if (idade < 7){
                //crianca
                img.setAttribute("src", "./imagens/menina.png")
            }else if (idade < 15){
                //adolescente
                img.setAttribute("src", "./imagens/adolescente-a.png")
            }else if (idade < 21){
                //jovem
                img.setAttribute("src", "./imagens/jovem-a.png")
            }else if (idade < 35){
                //jovem adulto
                img.setAttribute("src", "./imagens/mulher-jovem.png")
            }else if (idade < 55){
                //adulto
                img.setAttribute("src", "./imagens/mulher.png")
            }else if (idade < 110){
                //idoso
                img.setAttribute("src", "./imagens/idosa.png")
            }else {
                //caveira
                img.setAttribute("src", "./imagens/caveira.png")
                document.body.style.background = "black"

            }
        }
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos`
        res.style.textAlign = "center"
        res.appendChild(img)
        img.style.marginTop = "8px"
       
    }

}