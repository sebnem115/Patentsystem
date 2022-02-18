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

function deleteImage(clickedId) {
    var parentDiv = document.getElementById(clickedId).parentNode;
    parentDiv.remove();
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
    });
    $("#ibtn").click(function (){
        $("#ifilter").toggle();
    });
    
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
                var textNode = document.createElement('p');
                textNode.innerHTML = file.name;
                var closeNode = document.createElement('p');
                closeNode.classList.add("delete-image");
                closeNode.innerHTML = 'x';
                var img = document.createElement('img');
                var div = document.createElement("div");
                reader.fileName = file.name;
                reader.onload = function(e2) {
                    // finished reading file data.
                    img.classList.add('searchImage');
                    img.src=e2.target.result;
                    div.classList.add('data');
                    closeNode.setAttribute('id', e2.target.fileName);
                    closeNode.setAttribute('onClick', 'deleteImage(this.id)');
                    document.getElementById('search-image-container').appendChild(div);
                    div.appendChild(img);
                    div.appendChild(textNode);
                    div.appendChild(closeNode);
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
                var textNode = document.createElement('p');
                textNode.innerHTML = file.name;
                var closeNode = document.createElement('p');
                closeNode.classList.add("delete-image");
                closeNode.innerHTML = 'x';
                var img = document.createElement('img');
                var div = document.createElement("div");
                reader.onload = function(e2) {
                    // finished reading file data.
                    img.classList.add('searchImage');
                    img.src=e2.target.result;
                    div.classList.add('data');
                    closeNode.setAttribute('id', file.name);
                    closeNode.setAttribute('onClick', 'deleteImage(this.id)');
                    document.getElementById('search-image-container').appendChild(div);
                    div.appendChild(img);
                    div.appendChild(textNode);
                    div.appendChild(closeNode);
                }
                reader.readAsDataURL(file);
                $("#fileUpload").after(img);
            }
        }
    });
});

