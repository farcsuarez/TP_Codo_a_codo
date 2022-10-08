function validar(){

    //validar email
    let frm = document.form_contacto
    let email = document.form_contacto.email.value
    let nombre = document.form_contacto.nombre.value
    let consulta = document.form_contacto.consulta.value

    if( email.length < 12 || 
        !email.includes(".com") ||
        !email.includes("@")){
        alert("Por favor ingrese email valido, incluya el simbolo @ y el .com")
        return 0
    }

    if(nombre.length < 5){
        alert("Ingrese un nombre valido!")
        return 0
    }

    if(nombre.length < 5){
        alert("Ingrese un nombre valido de al menos 5 caracteres!")
        return 0
    }

    if(consulta.length < 10){
        alert("ingrese una consulta de al menos 10 caracteres!")
        return 0
    }

    //formulario validado, se envia
    frm.submit()
}