
const submit_button = document.querySelector(".button");
submit_button.onclick = (e) => {
    e.preventDefault();
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;

    localStorage.setItem('FirstName', fname);
    localStorage.setItem('LastName', lname);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', pass);
    localStorage.setItem('Cpassword', cpass);
    if(fname == "" && lname == "" && email == "" && pass == "" && cpass == ""){
        Swal.fire(   
            'error de Entrada de Datos!',    
        );
    }
    else
    {
        if(pass.length >= 6 && pass.length <= 20)
    {
        if( pass !== cpass){
            Swal.fire(
                'Password Incorrecto!',
                
            );
        }
        else
        {
            Swal.fire(
              'Registro Completo!',
            );
            setTimeout(()=>{
                    location.href='index.html';
                    },1000)
        }
    }
    else
    {
        Swal.fire(     
            'ingresa minimo seis digitos en la password!',
        );
    }
    }


}

// funcion de login 

const login = document.querySelector('.login');
login.onclick = (e) => {
    e.preventDefault();
    // captura los datos de inicio de sesion
    const emailAddress = document.getElementById("emailAddress").value;
    const passWord = document.getElementById("passWord").value;


    // almacena el usuario en el localstore
    const Email = localStorage.getItem("Email");
    const Password = localStorage.getItem("Password");

    // el condicional comprueba si tanto emailAddress como passWord están vacíos al mismo tiempo.
    if( emailAddress == "" && passWord == ""){
        Swal.fire(
            'Opps..!',
            'input field has no value!',
            'error'
        );
    }
    else
    {
        if(emailAddress == Email && passWord == Password){
            Swal.fire(
                'login successful!',
                
            );
            setTimeout(()=>{
                location.href='../index.html';
                },1000)
        }else
        {
            Swal.fire(
                'Opps..!',
                'Something is wrong!',
                'error'
            );
        }
    };


};