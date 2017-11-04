var listaPessoasID = [];
var listaPessoasNN = [];
var listaPessoasEE = [];


$(document).ready(
    function () {
        $('#nomeSemTt, #sobreNomeSPA, #titulos').on('input',
            function (e) {
                var nomeSemTt = $('#nomeSemTt').val();
                var titulos = $('#titulos').val();
                var sobrenome = $('#sobreNomeSPA').val();
                var nomeGerado = (titulos !== undefined? titulos : "") + " " + (nomeSemTt !== undefined? nomeSemTt : "") + " " + (sobrenome !== undefined? sobrenome : "") ;
                $('#nomeCompleto').text( nomeGerado);
            });

    }
);

function validarNomes(){
    var nomeSemTt = $('#nomeSemTt').val();
    var nomePreferido = $('#nomePreferido').val();
    var sobrenome = $('#sobreNomeSPA').val();
    var sexo = $("#sexo").val();
    var dataNascimento = $('#dataNascimento').val();

    if(nomeSemTt === undefined || nomeSemTt === null){
        Materialize.toast('Informe o nome sem título SDA, Aba 1!', 3000, 'rounded');
        abrirCadNomes(1);
        return false;
    }

    if(nomePreferido === undefined || nomePreferido === null){
        Materialize.toast('Informe o nome preferido SDA, Aba 1!', 3000, 'rounded');
        abrirCadNomes(1);
        return false;
    }

    if(sobrenome === undefined || sobrenome === null){
        Materialize.toast('Informe o sobrenome SDA, Aba 1!', 3000, 'rounded');
        abrirCadNomes(1);
        return false;
    }

    if(sexo === undefined || sexo === null){
        Materialize.toast('Informe o sexo do SDA, Aba 1!', 3000, 'rounded');
        abrirCadNomes(1);
        return false;
    }
    if(dataNascimento === undefined || dataNascimento === null){
        Materialize.toast('Informe a data de Nascimento, Aba 1!', 3000, 'rounded');
        abrirCadNomes(1);
        return false;
    }
    return true;
}
function validarIdentificador(){
    var designacaoID = $('#designacaoID').val();
    var tipoId = $('#tipoId').val();
    var emissorId = $('#emissorId').val();
    var dataEmissaoId = $('#dataEmissaoId').val();

    if(designacaoID === undefined || designacaoID === null){
        Materialize.toast('Informe a designação do identificador, Aba 2!', 3000, 'rounded');
        abrirCadNomes(2);
        return false;
    }

    if(emissorId === undefined || emissorId === null){
        Materialize.toast('Informe o emissor do identificador, Aba 2!', 3000, 'rounded');
        abrirCadNomes(2);
        return false;
    }

    if(tipoId === undefined || tipoId === null){
        Materialize.toast('Informe o tipo do identificador, Aba 2', 3000, 'rounded');
        abrirCadNomes(2);
        return false;
    }

    if(sexo === undefined || sexo === null){
        Materialize.toast('Informe o sexo do SDA, Aba 2!', 3000, 'rounded');
        abrirCadNomes(2);
        return false;
    }
    if(dataEmissaoId === undefined || dataEmissaoId === null){
        Materialize.toast('Informe a data de emissão do identificador, Aba 2!', 3000, 'rounded');
        abrirCadNomes(2);
        return false;
    }

    return true;
}

function validarEndereco(){
    var telefoneFixo = $('#telefoneFixo').val();
    var celular = $('#celular').val();
    var email = $('#email').val();
    var contato = $('#contato').val();

    if((telefoneFixo === undefined || telefoneFixo === null || telefoneFixo.length === 0)
        && (celular === undefined || celular === null || celular.length === 0)
        && (email === undefined || email === null || email.length === 0)
        && (contato === undefined || email === contato || contato.length === 0)){
        Materialize.toast('Informe pelo menos um contato para o paciente, Aba 3!', 3000, 'rounded');
        abrirCadNomes(3);
        return false;
    }
    return true;
}

function  limparFormulario() {
    $('#dataNascimento').val("");
    $('#sobreNomeSPA').val("");
    $('#nomeSemTt').val("");
    $('#nomePreferido').val("");
    $('#titulos').val("");
    $('#nomeSolteiro').val("");
    $('#nomeCompleto').text("*************************************");
    $('#dataObito').val("");
    $('#idSDA').val("");


    $('#designacaoID').val("");
    $('#emissorId').val("");
    $('#dataEmissaoId').val("");
    $('#nomeCartorio').val("");
    $('#livro').val(null);
    $('#folha').val(null);
    $('#termo').val(null);
    $('div.tipoIdDiv select').val("");

    $('#telefoneFixo').val("");
    $("#celular").val("");
    $('#contato').val("");
    $('#email').val("");
    $('#endereco').val("");
    $('#complemento').val("");
    $('#municipio').val("");
    $('#CEP').val("");
    $('div.estadoDiv select').val("");
    abrirCadNomes(1);
}


function setIdPaciente(){
    var paciente = 1;

    if(listaPessoasNN !== null &&   listaPessoasNN.length > 0){
        paciente = listaPessoasNN[listaPessoasNN.length-1].idPaciente +1;
    }
    return paciente;
}

function gravarPessoa() {
    if(validarNomes() && validarIdentificador() && validarEndereco() ){
        var idPaciente = addDadosIdentificador();
        addDadosNomes(idPaciente);
        addDadosEndereco(idPaciente);

        limparFormulario();
        Materialize.toast('Pessoa salva com sucesso!', 3000, 'rounded');
    }
}

function addDadosNomes(idPaciente) {
    var dataNascimento = $('#dataNascimento').val();
    var sexo = $("#sexo").val();
    var sobrenome = $('#sobreNomeSPA').val();
    var nomeSemTt = $('#nomeSemTt').val();
    var nomePreferido = $('#nomePreferido').val();
    var titulos = $('#titulos').val();
    var nomeSolteiro = $('#nomeSolteiro').val();
    var usoCondicional = $('#usoCondicional').val();
    var nomeCompleto = $('#nomeCompleto').text();
    var dataObito = $('#dataObito').val();
    var usoNome = $('#usoNome').val();

    listaPessoasNN.push({'idPaciente': idPaciente, 'dataNascimento': dataNascimento, 'sexo': sexo, 'sobrenome' : sobrenome,
            'nomeSemTt': nomeSemTt, 'nomePreferido': nomePreferido, 'titulos' : titulos, 'nomeSolteiro' : nomeSolteiro, 'grpNomeSolteiro': '4',
            'usoCondicional' : usoCondicional, 'nomeCompleto' :nomeCompleto, 'dataObito': dataObito,
            'usoNome':usoNome});

    console.log("Adicionou o listaPessoasNN " + listaPessoasNN[listaPessoasID.length - 1] + " | Na posição: "+ listaPessoasNN.length);
    console.log("Tamanho da lista: " + listaPessoasNN.length);
}

function addDadosIdentificador() {
    var idPaciente = setIdPaciente();
    var designacaoID = $('#designacaoID').val();
    var tipoId = $("#tipoId").val();
    var emissorId = $('#emissorId').val();
    var dataEmissaoId = $('#dataEmissaoId').val();
    var nomeCartorio = $('#nomeCartorio').val();
    var livro = $('#livro').val();
    var folha = $('#folha').val();
    var termo = $('#termo').val();

    listaPessoasID.push({'idPaciente': idPaciente, 'designacaoID': designacaoID, 'tipoId': tipoId, 'emissorId' : emissorId,
        'dataEmissaoId': dataEmissaoId, 'nomeCartorio': nomeCartorio, 'livro' : livro, 'folha' : folha,
        'termo' : termo});

    console.log("Adicionou o listaPessoasID " +'IdPaciente'+idPaciente+' '+ listaPessoasID[listaPessoasID.length - 1] + " | Na posição: "+ listaPessoasID.length);

    return idPaciente;
}

function addDadosEndereco(idPaciente) {
    var telefoneFixo = $('#telefoneFixo').val();
    var celular = $("#celular").val();
    var contato = $('#contato').val();
    var email = $('#email').val();
    var endereco = $('#endereco').val();
    var complemento = $('#complemento').val();
    var estado = $('#estado').val();
    var municipio = $('#municipio').val();
    var CEP = $('#CEP').val();

    listaPessoasEE.push({'idPaciente': idPaciente, 'telefoneFixo': telefoneFixo, 'celular': celular, 'contato' : contato,
        'email': email, 'endereco': endereco, 'complemento' : complemento, 'estado' : estado,
        'municipio' : municipio, 'CEP': CEP});

    console.log("Adicionou listaPessoasEE ID " + listaPessoasEE[listaPessoasID.length - 1] + " | Na posição: "+ listaPessoasEE.length);
    console.log("Tamanho da lista: " + listaPessoasEE.length);
}

function listarPessoas(){
    if (listaPessoasID !== null && listaPessoasID.length > 0) {

        for (var i = 0; i < listaPessoasID.length; i++){
            var value = listaPessoasID[i];

            var j = 0, flag = 0; var nome = null;
            while (j < listaPessoasNN.length && flag !== -987){
                if(listaPessoasNN[j].idPaciente === value.idPaciente){
                    nome = listaPessoasNN[j];
                    flag = -987;
                    break;
                }
                j++;
            }

            var htmlNome = '';
            if(nome === null){
                htmlNome =
                    '<td></td>' +
                    '<td></td>' +
                    '<td></td>'
                ;
            }else{
                var sexo = 'Masculino';
                if(nome.sexo === '2' ){
                    sexo = 'Feminino';
                }else if(nome.sexo === '3'){
                    sexo = 'Intersexo ou Indeterminado';
                }else if(nome.sexo === '6'){
                    sexo = 'Não declarado/descrito inadequadamente';
                }

                htmlNome =
                    '<td>'+nome.nomeCompleto+'</td>' +
                    '<td>'+sexo+'</td>' +
                    '<td>'+nome.dataNascimento+'</td>'
                ;
            }
            htmlNome +=
                '<td>'+
                    '<a class="btn-floating btn-large waves-effect waves-light red" onclick="vizualizarPessoa('+value.idPaciente+')"><i class="material-icons">mode_edit</i></a>'+
                '<td>';


            var html =
                '<tr>' +
                    '<td>' + value.idPaciente + '</td>' +
                    '<td>' + value.designacaoID + '</td>' +
                    '<td>' + value.emissorId + '</td>' +
                     htmlNome+
                '</tr>';

            $('#tdCadPessoa').append(html);
        }
    }else{
        Materialize.toast('Nenhuma pessoa cadastrada!', 3000, 'rounded');
    }
}

function vizualizarPessoa(idPaciente){
    if (idPaciente !== null && idPaciente !== undefined) {

        var value; var i;
        for (i = 0; i < listaPessoasNN.length; i++){
            value = listaPessoasNN[i];

            if(value.idPaciente === idPaciente) {
                $('#dataNascimento').val(value.dataNascimento);
                $('#sobreNomeSPA').val(value.sobrenome);
                $('#nomeSemTt').val(value.nomeSemTt);
                $('#nomePreferido').val(value.nomePreferido);
                $('#titulos').val(value.titulos);
                $('#nomeSolteiro').val(value.nomeSolteiro);
                $('#nomeCompleto').text(value.nomeCompleto);
                $('#dataObito').val(value.dataObito);
                $('#idSDA').val(value.idPaciente);
                break;
            }
        }

        for (i = 0; i < listaPessoasID.length; i++){
            value = listaPessoasID[i];

            if(value.idPaciente === idPaciente) {
                $('#designacaoID').val(value.designacaoID);
                $('#emissorId').val(value.emissorId);
                $('#dataEmissaoId').val(value.dataEmissaoId);
                $('#nomeCartorio').val(value.nomeCartorio);
                $('#livro').val(value.livro);
                $('#folha').val(value.folha);
                $('#termo').val(value.termo);
                $('div.tipoIdDiv select').val(value.tipoId);
                break;
            }
        }

        for (i = 0; i < listaPessoasEE.length; i++){
            value = listaPessoasEE[i];

            if(value.idPaciente === idPaciente) {
                $('#telefoneFixo').val(value.telefoneFixo);
                $("#celular").val(value.celular);
                $('#contato').val(value.contato);
                $('#email').val(value.email);
                $('#endereco').val(value.endereco);
                $('#complemento').val(value.complemento);
                $('#municipio').val(value.municipio);
                $('#CEP').val(value.CEP);
                $('div.estadoDiv select').val(value.estado);
                break;
            }
        }

        abrirCadNomes(1);
        abrirNavBar(4);
        Materialize.toast('Paciente pesquisado com sucesso!', 3000, 'rounded');
    }else{
        Materialize.toast('Identificador de paciente não encontrado!', 3000, 'rounded');
    }
}

function alterarPessoa(){
    if(validarNomes() && validarIdentificador() && validarEndereco() ) {

        var idPaciente = $('#idSDA').val() ;
        if (idPaciente !== null && idPaciente !== undefined) {

            var value; var i;
            for (i = 0; i < listaPessoasNN.length; i++) {
                value = listaPessoasNN[i];

                if (""+value.idPaciente  === idPaciente) {
                    value.dataNascimento = $('#dataNascimento').val();
                    value.sobrenome = $('#sobreNomeSPA').val();
                    value.nomeSemTt = $('#nomeSemTt').val();
                    value.nomePreferido = $('#nomePreferido').val();
                    value.titulos = $('#titulos').val();
                    value.nomeSolteiro = $('#nomeSolteiro').val();
                    value.nomeCompleto = $('#nomeCompleto').text();
                    value.dataObito = $('#dataObito').val();
                    break;
                }
            }

            for (i = 0; i < listaPessoasID.length; i++) {
                value = listaPessoasID[i];

                if (""+value.idPaciente === idPaciente) {
                    value.designacaoID = $('#designacaoID').val();
                    value.emissorId = $('#emissorId').val() ;
                    value.dataEmissaoId = $('#dataEmissaoId').val();
                    value.nomeCartorio = $('#nomeCartorio').val();
                    value.livro = $('#livro').val();
                    value.folha = $('#folha').val();
                    value.termo = $('#termo').val();
                    break;
                }
            }

            for (i = 0; i < listaPessoasEE.length; i++) {
                value = listaPessoasEE[i];

                if (""+value.idPaciente === idPaciente) {
                    value.telefoneFixo = $('#telefoneFixo').val();
                    value.celular = $("#celular").val();
                    value.contato = $('#contato').val();
                    value.email = $('#email').val();
                    value.endereco = $('#endereco').val();
                    value.complemento = $('#complemento').val();
                    value.municipio = $('#municipio').val();
                    value.CEP = $('#CEP').val();
                    break;
                }
            }
            limparFormulario();
            Materialize.toast('Paciente ALTERADO com sucesso!', 3000, 'rounded');
        } else {
            Materialize.toast('Identificador de paciente não encontrado!', 3000, 'rounded');
        }
    }
}