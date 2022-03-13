function addSearch() {
    var currentKeyWordFilter = $('[id^="searchbar"]:last').get(0);
    // Retrieve ID and increase by 1
    var num = parseInt(currentKeyWordFilter.id.match(/\d+/g), 10) + 1;
    $('[id^="minus"]:last').css('display', 'inline-block');
    $('[id^="boolean"]:last').css('display', 'inline');
    // clone last keyword filter and insert into DOM
    var clone = currentKeyWordFilter.cloneNode(true);
    $('[id^="add"]:last').css('display', 'none');
    currentKeyWordFilter.after(clone);
    // Set ID for all nodes
    clone.id = "searchbar" + num;
    $('[id^="add"]:last').attr('id', 'add' + num);
    $('[id^="minus"]:last').attr('id', 'minus' + num);
    $('[id^="boolean"]:last').attr('id', 'boolean' + num);
    $('[id^="keyword-dropdown-"]:last').attr('id', 'keyword-dropdown-' + num);
    // clone.id = 'searchbar' + currentKeyWordFilterCount;
}

function deleteSearch() { 
    $('[id^="searchbar"]:last').remove();
    var currentKeyWordFilter = $('[id^="searchbar"]:last').get(0);
    $('[id^="minus"]:last').css('display', 'none');
    $('[id^="boolean"]:last').css('display', 'none');
    $('[id^="add"]:last').css('display', 'block');
}

function deleteImage(clickedId) {
    var parentDiv = document.getElementById(clickedId).parentNode;
    parentDiv.remove();
}


function register() {
    var inputUsername = document.getElementById("username");
    localStorage.setItem("username", inputUsername.value);
    localStorage.setItem("loggedin", 1);
    checkIfLoggedIn();
    console.log("registered");
  }
  
  function checkIfLoggedIn() {
    var username = localStorage.getItem("username");
    var loggedin = localStorage.getItem("loggedin");
    if (username != null && loggedin == 1) {
      $("#login-dropdown").addClass("hide-dropdown");
      $("#login-dropdown").removeClass("dropdown");
      $("#user-settings-dropdown").addClass("dropdown");
      $("#user-settings-dropdown").removeClass("hide-dropdown");
      $("#user-settings-dropdown-button").text(username);
      console.log(username);
    }
  }
  
  function login() {
    var inputUsernameLogin = document.getElementById("username-login");
    console.log("logged in");
    if(localStorage.getItem("username") == inputUsernameLogin.value) {
      localStorage.setItem("loggedin", 1);
      checkIfLoggedIn();
    }
  }
  
  function logout() {
    localStorage.setItem("loggedin", 0);
    $("#user-settings-dropdown").removeClass("dropdown");
    $("#user-settings-dropdown").addClass("hide-dropdown");
    $("#login-dropdown").removeClass("hide-dropdown");
    $("#login-dropdown").addClass("dropdown");
    $("#user-settings-dropdown-button").text(username);
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

    $("body").on("click", ".register-btn",function(event){
        $("#register-modal").addClass("show");
    });

    $("body").on("click", ".close",function(event){
        $("#register-modal").removeClass("show");
    })
    
    $("body").on("click", ".register-dialog-btn", function(event){
        $("#register-modal").removeClass("show");
    })

    checkIfLoggedIn();

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

