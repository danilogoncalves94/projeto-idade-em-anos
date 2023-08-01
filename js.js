function f1() {
    let idade = $('.form-control').val()
    if (idade.length == 0) {
        document.location.reload()
    } else {    
        $('h2').empty()        
        $('.inp').after(`<h2 class='display-4'>Parabéns, você tem ${(Number(idade) * 365).toLocaleString('pt-br')} dias de vida.</h2>`)
        $('.form-control').val('')
        $('h2').hide().fadeIn(1000)
    }
}


