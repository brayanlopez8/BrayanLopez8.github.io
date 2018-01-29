//https://smtpjs.com/

$('#BtnSendMail').on('click', function (ev) {

    name = $('#TxtMailName').val();
    email = $('#TxtMailEmail').val();
    subject = $('#TxtMailSubject').val();
    message = $('#TxtMailMessage').val();

    if (!ValidateFields()) {
        return false;
    }
    SendMailSMTP(name, email, subject, message);

});

//Valida los campos de contactenos
function ValidateFields(ev) {

    if ($('#TxtMailName').val() == "") {
        $('#myModal').modal("show");
        $('#PmodalAttention').html("Debe ingresar el campo nombre");
        //ev.stopPropagation();
        return false;
    }

    if ($('#TxtMailEmail').val() == "") {


        $('#myModal').modal("show");
        $('#PmodalAttention').html("Debe ingresar el campo Email");
        //ev.stopPropagation();


        return false;
    }
    else {
        emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (!emailRegex.test($('#TxtMailEmail').val())) {
            $('#myModal').modal("show");
            $('#PmodalAttention').html("Email no valido");
            return false;
        }
    }
    if ($('#TxtMailSubject').val() == "") {
        $('#myModal').modal("show");
        $('#PmodalAttention').html("Debe ingresar el campo asunto");
        //ev.stopPropagation();
        return false;
    }

    if ($('#TxtMailMessage').val() == "") {
        $('#myModal').modal("show");
        $('#PmodalAttention').html("Debe ingresar el campo mensaje");
        //ev.stopPropagation();
        return false;
    }

    return true;
}

//Envia el mail a traves de la plataforma smtpjs
function SendMailSMTP(name, email, subject, message) {
    body = "Nombre:" + name + " Email:" + email + " Mensaje " + message;
    subject = "Conctacto desde el potafolio GITHub. Asunto: " + subject;

    Email.send("brayanlopez8@gmail.com",
"brayanlopez8@gmail.com",
subject,
body,
"smtp.elasticemail.com",
"brayanlopez8@gmail.com",
"1425170b-4a6b-41f1-aae3-72662d8a919e",
function done(message) {
    location.href = '#contact';
    $('#myModal').modal("show");
    $('#PmodalAttention').html("Su Informacion fue enviada correctamente a Brayan López, Prontamente tendras noticias");
    ClearControls();
}
);
};

function ClearControls() {
    $('#TxtMailName').val('');
    $('#TxtMailEmail').val('');
    $('#TxtMailSubject').val('');
    $('#TxtMailMessage').val('');
}