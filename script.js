let B7Validator= {
    handleSubmit:(event)=>{
        // evitar que envia o formulario, nao deixa enviar o formulario
        event.preventDefault();
        let send = true;

        let inputs = document.querySelectorAll('input');

        for(let i=0; i<inputs.length;i++){
            let input = inputs[i];
            let check = B7Validator.checkInput(input);

            // se nao retornar true quer dizer que deu erro
            if(check !== true){
                send = false;
                // exibir o erro
            }


        }

        send = false;

        if(send){
            form.submit();
        }
    },
    checkInput:()=>{
        // pega o que tem no atributo data-rules
        let rules = input.getAttributes('data-rules');

        // se for diferente de nulo
        if(rules !== null){
            rules = rules.split('|');
            for(let k in rules){
                let rDetails = rules[k].split('=');
            }

        }
        return true;
    }

};

let form = document.querySelector('.b7validator');
form.addEventListener('submit', B7Validator.handleSubmit);