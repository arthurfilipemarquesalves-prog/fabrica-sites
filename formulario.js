  
        function validaform() {
            const email = document.getElementById('email');
            let emailText=email.value.trim()
            let valido = false       

            if(emailText.incluides("@")) {
                    valido = true
            }else{
                valido = false
            }
    
      
       let partesEmail =emailText.split("@")
       if(partesEmail[0].length>=7 && partesEmail[0].length <=127) {
       valido = true
       }else{
        valido = false
       }

       const nome = document.getElementById("nome")
       let nomeText = nome.value.trim()
        if (nome.length >= 3){

            console.log("nome atende ao tamanho minimo")
            valido = true
        }
       else{
            valido = false
        }

        const textarea = document.getElementById("mensagem")
        let textTexto = textarea.value.trim()
        if(textTexto === ""){
            valido = true
        }else{
            valido = false
        }
         
        if(valido){
            alert("recebemos sua mensagem, em breve entramos em contato")
        }else{
            alert("temos um erro no formulario, corrija para seguir!")
        }

    }

       document.addEventListener("submit",function(e){
                e.preventDefault()
                validaform()
        }
       )