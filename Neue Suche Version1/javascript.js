function addSearch() {   
    document.getElementById('searchbar2').style.display = 'block';
    document.getElementById('minus1').style.display = 'inline-block';
    document.getElementById('add1').style.display='none';
    document.getElementById('boolean1').style.display='inline';
}
function deleteSearch1() {   
    document.getElementById('searchbar1').style.display = 'none';
    document.getElementById('minus2').style.display = 'none';
}
function deleteSearch2() {   
    document.getElementById('searchbar2').style.display = 'none';
    document.getElementById('minus1').style.display = 'none';
    document.getElementById('boolean1').style.display='none';
    document.getElementById('add1').style.display='inline';

}
$(document).ready(function () {

    $('.fbtn').click(function(){
       $('.sub_container').show();
    });
    $('.sub_container').click(function(){
        $('.sub_container').hide();
    });
    $('.backbtn').click(function(){
        $(".sub_container").hide();
    });
    $("#gfbtn").click(function (){
        $("#generalFilter").toggle();
        $("#gfbtn").toggleClass(".foptions.active");
    });
    $("#kfbtn1").click(function (){
        $("#kfilter1").toggle();
        $("#kfbtn1").toggleClass(".foptions.active");
    });
    $("#kfbtn2").click(function (){
        $("#kfilter2").toggle();
        $("#kfbtn2").toggleClass(".foptions.active");
    })
    
});

