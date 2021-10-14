// alert("Funcionou!")
function consultaCep() {
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
})