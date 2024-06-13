let B7Validator= {
    handleSubmit:(event)=>{
        // evitar que envia o formulario, nao deixa enviar o formulario
        event.preventDefault();
    }
};

let form = document.querySelector('.b7validator');
form.addEventListener('submit', B7Validator.handleSubmit);