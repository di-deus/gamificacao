$(document).ready(function()
{
    $('.modal').modal();
    $('.btn-entrar').click(function()
    {
        $('.in').hide()
        $('.app').show()
    })
    $('.tooltipped').tooltip();
    $('.d3').click(function()
    {
        $('.mMeta').toggle()
    })
})