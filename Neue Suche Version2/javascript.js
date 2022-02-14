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

    $("#uploadButton").click(function () {
        $("#fileUpload").trigger("click");
    });

    var dropzone = document.getElementById('dropzone');
    // Optional.   Show the copy icon when dragging over.  Seems to only work for chrome.
    dropzone.addEventListener('dragover', function(e) {
        e.stopPropagation();
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    });

    // Get file data on drop
    dropzone.addEventListener('drop', function(e) {
        e.stopPropagation();
        e.preventDefault();
        var files = e.dataTransfer.files; // Array of all files
        for (var i=0, file; file=files[i]; i++) {
            if (file.type.match(/image.*/)) {
                var reader = new FileReader();

                reader.onload = function(e2) {
                    // finished reading file data.
                    var img = document.createElement('img');
                    img.classList.add('searchImage');
                    img.src= e2.target.result;
                    document.getElementById('dropzone').firstElementChild.remove();
                    document.getElementById('dropzone').appendChild(img);
                }

                reader.readAsDataURL(file); // start reading the file data.
            }
        }
    });

    $("#fileUpload").change(function(e) {

        for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {
    
            var file = e.originalEvent.srcElement.files[i];
            if (file.type.match(/image.*/)) {
                var reader = new FileReader();
                reader.onload = function(e2) {
                    // finished reading file data.
                    var img = document.createElement('img');
                    img.classList.add('searchImage');
                    img.src= e2.target.result;
                    document.getElementById('dropzone').firstElementChild.remove();
                    document.getElementById('dropzone').appendChild(img);
                }
                reader.readAsDataURL(file);
                $("#fileUpload").after(img);
            }
        }
    });
        
});

