

(function($){
    $(function(){

        $('select').material_select();
        $(".dropdown-button").dropdown();


        $('.datepicker').pickadate({
            selectMonths: true,
            selectYears: 100,
            today: 'Hoje',
            clear: 'Limpar',
            close: 'Fechar',
            monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
            weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],

            closeOnSelect: true,
            format: 'dd/mm/yyyy'
        });



    });
})(jQuery);

function abrirCadNomes(tipo){
    if(tipo === 1){
        $( '#bttCadNomeli').addClass( "active" );
        $( '#bttCadIdli').removeClass( "active" );
        $( '#bttCadEndli').removeClass( "active" );


        $( '#cadastroNome').removeClass( "ocultar" );
        $( '#cadastroEndereco').addClass( "ocultar" );
        $( '#cadastroId').addClass( "ocultar" );

    }else if(tipo === 2){
        $( '#bttCadNomeli').removeClass( "active" );
        $( '#bttCadIdli').addClass( "active" );
        $( '#bttCadEndli').removeClass( "active" );

        $( '#cadastroNome').addClass( "ocultar" );
        $( '#cadastroEndereco').addClass( "ocultar" );
        $( '#cadastroId').removeClass( "ocultar" );
    }else if(tipo === 3){

        $( '#bttCadNomeli').removeClass( "active" );
        $( '#bttCadIdli').removeClass( "active" );
        $( '#bttCadEndli').addClass( "active" );

        $( '#cadastroNome').addClass( "ocultar" );
        $( '#cadastroEndereco').removeClass( "ocultar" );
        $( '#cadastroId').addClass( "ocultar" );
    }
}

function abrirNavBar(tipo){
    if(tipo === 1){
        $( '#pagInicialLi').addClass( "active" );
        $( '#cadastroLI').removeClass( "active" );
        $( '#pesquisaLI').removeClass( "active" );

        $( '#home').removeClass( "ocultar" );
        $( '#cadastro').addClass( "ocultar" );
        $( '#consulta').addClass( "ocultar" );

    }else if(tipo === 2 || tipo === 4){
        $( '#pagInicialLi').removeClass( "active" );
        $( '#cadastroLI').addClass( "active" );
        $( '#bttCadEndli').removeClass( "active" );

        $( '#home').addClass( "ocultar" );
        $( '#cadastro').removeClass( "ocultar" );
        $( '#consulta').addClass( "ocultar" );

        if(tipo === 2){
            $( '#h4Alterar').addClass( "ocultar" );
            $( '#h4Cadastrar').removeClass( "ocultar" );

            $( '#alterarCad').addClass( "ocultar" );
            $( '#gravarCad').removeClass( "ocultar" );
        }else{
            $( '#h4Cadastrar').addClass( "ocultar" );
            $( '#h4Alterar').removeClass( "ocultar" );

            $( '#alterarCad').removeClass( "ocultar" );
            $( '#gravarCad').addClass( "ocultar" );
        }
    }else if(tipo === 3){

        $( '#pagInicialLi').removeClass( "active" );
        $( '#cadastroLI').removeClass( "active" );
        $( '#pesquisaLI').addClass( "active" );

        $( '#home').addClass( "ocultar" );
        $( '#consulta').removeClass( "ocultar" );
        $( '#cadastro').addClass( "ocultar" );
    }
}

