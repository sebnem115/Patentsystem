function addSearch() {
    var currentKeyWordFilter = $('[id^="searchbar"]:last').get(0);
    // Retrieve ID and increase by 1
    var num = parseInt(currentKeyWordFilter.id.match(/\d+/g), 10) + 1;
    $('[id^="minus"]:last').css('display', 'inline-block');
    // clone last keyword filter, reset inputs and insert into DOM
    var clone = currentKeyWordFilter.cloneNode(true);
    $('[id^="add"]:last').css('display', 'none');
    $('[id^="boolean"]:last').css('display', 'inline');
    currentKeyWordFilter.after(clone);
    // Set ID for all nodes
    clone.id = "searchbar" + num;
    $('[id^="searchinput"]:last').val("");
    $('[id^="add"]:last').attr('id', 'add' + num);
    $('[id^="minus"]:last').attr('id', 'minus' + num);
    $('[id^="boolean"]:last').attr('id', 'boolean' + num);
    $('[id^="searchinput"]:last').attr('id', 'searchinput' + num);
    $('[id^="keyword-dropdown-"]:last').attr('id', 'keyword-dropdown-' + num);
    queryChanged();
}

function deleteSearch(e) { 
    currentButtonId = parseInt(e.id.match(/\d+/g), 10);
    $('#searchbar' + currentButtonId).remove();
    $('[id^="add"]:last').css('display', 'block');
    $('[id^="boolean"]:last').css('display', 'none');
    if($('.searchbar').length == 1) {
        $('[id^="minus"]:last').css('display', 'none');
    }
    queryChanged();
}

function queryChanged() {
    var query = "";
    $('.searchbar').each(function(i, obj) {
        // get all three input elements
        var keywordDropdown = $(this).find('.keyword-dropdown');
        var searchinput = $(this).find('.searchinput');
        var boolean = $(this).find('.boolean');
        if(keywordDropdown.val() != null){
            query += keywordDropdown.val();
            query += '=';
        } 
        query += '"';
        query += searchinput.val();
        query += '" ';
        if (boolean.css('display') != 'none')
            query += boolean.val();
        query += " ";
        
    })
    
    $('#currentInput').text(query); 
}

function FilterChanged() {
    var filterString = "";
    
    $('.display-filter').each(function(i, obj) {
        var filterName = $(this).find('.filter-name');
        var filterForm = $(this).find('.filter-form');
        var selectedFilters = [];
        filterForm.find(':input').each(function() {
            if($(this).prop('checked')) {
                selectedFilters.push($(this).val());
            }
        })
        // There are selected checkboxes
        if(selectedFilters != "") {
            $('.delete-filter').show();
            filterString += selectedFilters.join(', ')+ ", ";   
        }
    })
                              
    $('#filterInput').html(filterString);
}


function unsetAllCheckboxes() {
    $('input[type=checkbox]').prop('checked',false);
    $('.delete-filter').hide();
    $('#filterInput').html("Nothing selected yet");
    FilterChanged();
    
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
function searchInList() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('filterSearchCountry');
  filter = input.value.toUpperCase();
  ul = document.getElementById("filtercountry");
  li = ul.getElementsByTagName('a');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("label")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
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
        $("#gfbtn").toggleClass("active");
    });
    $("#ibtn").click(function (){
        $("#ifilter").toggle();
        $("#ibtn").toggleClass("active");
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
    
    $('.filter').bind('change', function() {
        FilterChanged();
    });
    $('.yearinput').bind('change', function() {
        FilterChanged();
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

