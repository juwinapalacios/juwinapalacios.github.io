//(funtion(){
   var formulario = document.getElementById('formulario'),
   nombre = formulario.nombre,
   correo = formulario.correo,
   sexo = formulario.sexo,
   terminos = formulario.terminos,
   error = document.getElementById('error');

   function validarNombre(e){
    if(nombre.value == '' || nombre.value == null){
       console.log('por favor completa el nombre');
       error.style.display = 'block';
       error.innerHTML += '<li>por favor completa el nombre';
       
       e.preventDefault();
    } else{
    error.style.display = 'none'
    }
 }

 function validarCorreo(e){
        if(correo.value == '' || correo.value == null){
           console.log('por favor completa el correo');
           error.style.display = 'block';
           error.innerHTML += '<li>por favor completa el correo';
           
           e.preventDefault();
        } else{
        error.style.display = 'none'
        }
     }

     function validarSexo(e){
        if(sexo.value == '' || sexo.value == null){
           console.log('por favor completa el sexo');
           error.style.display = 'block';
           error.innerHTML += '<li>por favor completa el sexo';
           
           e.preventDefault();
        } else{
        error.style.display = 'none'
        }
     }
    
     function validarTerminos(e){
        if(terminos.checked == false){ 
           console.log('por favor completa el terminos');
           error.style.display = 'block';
           error.innerHTML += '<li>por favor completa el terminos';
           
           e.preventDefault();
        } else{
        error.style.display = 'none'
        }
     }

     function validarFormulario(e){
        error.innerHTML = '';

        validarNombre(e);
        validarCorreo(e);
        validarSexo(e);
        validarTerminos(e);
     }

     formulario.addEventListener('submit',validarFormulario);
//}())

     
    
     
    

    
        
     
    
 
 
