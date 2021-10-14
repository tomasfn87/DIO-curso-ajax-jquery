// alert("Funcionou!")
function consultaCep() {
    $(".barra-progresso").show(700)
    let cep = document.getElementById("cep").value
    let url = `https://viacep.com.br/ws/${cep}/json/`
    $.ajax({
        url: url,
        type: "GET",
        success: function(response) {
            console.log(response)
            $("#numero-cep").html(`${response.cep}`)
            $("#logradouro").html(`${response.logradouro}`)
            $("#bairro").html(`${response.bairro}`)
            $("#localidade").html(`${response.localidade}/`)
            $("#uf").html(`${response.uf}`)
            $(".cep").show()
            $(".barra-progresso").hide(1100)
            /* document.getElementById("logradouro").innerHTML = response.logradouro + ","
            document.getElementById("bairro").innerHTML = response.bairro + ","
            document.getElementById("localidade").innerHTML = response.localidade + "/"
            document.getElementById("uf").innerHTML = response.uf */ 
            // mantendo comentários acima para fins de aprendizado
        }
    })
} 

$(function() {
    $(".cep").hide()
    $(".barra-progresso").hide()
})