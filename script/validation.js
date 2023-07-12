 // lista de usuarios

let users = [
    {
        login: 'rafa',
        email: 'rafa@email.com',
        senha: '123'
    },
    {
        login: 'rufo',
        email: 'rufo@email.com',
        senha: '123'
    }
]

function possuiLogin(login){
    for (const user of users) {
        if(user.login === login){
            return user
        }
    }
}
 
 // criando uma validacao especifica

 jQuery.validator.addMethod("arrobaNoInicio", function(value, element){
    if(value.indexOf('@') === 0){
        return true
    }else{
        return false
    }
}, "Tem que ter @ no começo")

$(document).ready(function(){

    $("#formLogin").validate({
        rules:{
            nomeLogin: {
                required: true,
                minlength: 3,
                maxlength: 30,
                // arrobaNoInicio: true
            },
            passwordLogin: {
                required: true,
                minlength: 3
            }
        },
        submitHandler: function(form){
            let user = possuiLogin(form.nomeLogin.value)
            if(user !== undefined){
                if(user.senha == form.passwordLogin.value){
                    window.location.href = '/urso.html'
                }
            }else{
                $('.login-form > .erro').css({"display":"block"})
            }
    
    
            // alert("Login realizado com sucesso!");
        }
    });

    $("#formCadastro").validate({
        rules:{
            nomeCad:{
                required: true,
                minlength: 3,
                maxlength: 30,
                // arrobaNoInicio: true
            },
            emailCad:{
                required: true,
                email: true
            },
            passwordCad:{
                minlength: 3
            },
            passwordCadConfirm:{
                minlength: 3,
                equalTo: '[name="passwordCad"]'
            }
            // idade:{
            //     required: true,
            //     min: 1,
            //     max: 120
            // }
            // instagram: {
            //     arrobaNoInicio: true
            // }
        },
        submitHandler: function(form){
            // console.log(form)

            let login = possuiLogin(form.nomeCad.value)

            if(login){
                $('.sign-up-form > .erro').css({"display":"block"})
            }else{
                const user = {
                    login: form.nomeCad.value,
                    email: form.emailCad.value,
                    senha: form.passwordCad.value
                }
    
                users.push(user)
    
                window.location.href = '/urso.html'
            }

            
            // alert("Formulario enviado com sucesso!");
        }
    });
})