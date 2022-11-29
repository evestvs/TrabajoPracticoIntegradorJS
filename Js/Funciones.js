function Borrar() {
    window.location.reload();
}

function VerificarCampos (){

    const CampoNombre=document.getElementsByName('Nombre');
    const CampoApellido=document.getElementsByName('Apellido');
    const CampoCorreoElectronico=document.getElementsByName('CorreoElectronico');
    const CampoCantidad=document.getElementsByName('Cantidad');
    const CampoLista=document.getElementsByName('Lista');

    if (CampoNombre[0].value != "") {        
        if (CampoApellido[0].value !="") {
            if (CampoCorreoElectronico[0].value !="") {
                if (CampoCantidad[0].value !="") {
                    if (parseInt(CampoCantidad[0].value,10)) {                                               
                        CalcularImporteAbonar();
                    } else {
                            alert("Debe ingresar un número");
                    }
                } else {
                    alert("Debe ingresar la cantidad");
                }
            } else {
                alert("Debe ingresar el correo electronico");
            }
        } else {
            alert("Debe ingresar el/los apellidos");
        }        
    } else {
        alert("Debe ingresar el/los nombres");
    };

}

function CalcularImporteAbonar(){
    
    const CampoCantidad=document.getElementsByName('Cantidad');
    const CampoLista=document.getElementsByName('Lista');
    
    let Importe = 0;

    switch (CampoLista[0].value) {
        case 'Estudiante':
            Importe=((parseInt(200,10)) * (parseFloat(0.20,10)) * (parseInt(CampoCantidad[0].value,10)));            
            document.getElementsByName('TotalaPagar')[0].innerHTML= "Total a pagar: $ " + Importe;
            break;
        case 'Trainee':
            Importe=((parseInt(200,10)) * (parseFloat(0.50,10)) * (parseInt(CampoCantidad[0].value,10)));
            document.getElementsByName('TotalaPagar')[0].innerHTML= "Total a pagar: $ " + Importe;
            break;
        case 'Junior':
            Importe=((parseInt(200,10)) * (parseFloat(0.85,10)) * (parseInt(CampoCantidad[0].value,10)));
            document.getElementsByName('TotalaPagar')[0].innerHTML= "Total a pagar: $ " + Importe;         
            break;
    }
}

function LimpiarCantidad(){

    document.getElementsByName('Cantidad')[0].value=1;
    document.getElementsByName('TotalaPagar')[0].innerHTML= "Total a pagar: $ ";

}