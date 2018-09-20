$(document).ready(function(){
    $('.more').on('click', le);
    
    function le(){
        if($('.comentPluss').is(':hidden')){
            $('.comentPluss').slideDown();
            $('.more').html('Visszacsukom a sorokat');
        }else{
            $('.comentPluss').slideUp();
            $('.more').html('Még szeretnék beszámolót');
        }
    }
});
    
