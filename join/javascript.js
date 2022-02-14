$(document).ready(function(){
   $('#select-all-checkbox').click(function(event) {
      if (this.checked) {
      $('.select-result').prop('checked', true);
      } else {
         $('.select-result').prop('checked', false);
      }
   });
   
   setRowNumbering();

   $("body").on("click", ".register-btn",function(event){
      console.log("Button clicked");
      $(".modal").addClass("show");
    });

    $("body").on("click", ".close",function(event){
      console.log("Button clicked");
      $(".modal").removeClass("show");
    })
    
    $("body").on("click", ".register-dialog-btn", function(event){
      console.log("Button clicked");
      $(".modal").removeClass("show");
    })

    checkIfLoggedIn();

});

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
  if(localStorage.getItem("username") == inputUsernameLogin.value) {
    localStorage.setItem("loggedin", 1);
    location.reload();
  }
}

function logout() {
  localStorage.setItem("loggedin", 0);
  $("#user-settings-dropdown").removeClass("dropdown");
  $("#user-settings-dropdown").addClass("hide-dropdown");
  $("#login-dropdown").removeClass("hide-dropdown");
  $("#login-dropdown").addClass("dropdown");
  $("#user-settings-dropdown-button").text(username);
  location.reload();
}

function setRowNumbering() {
  var i = 1;
  $('tbody').children().each(function(){
    $(this).children().first().text(i +".");
    i++;
  })
}

function countResults() {
  document.getElementById("showResultNumb").innerHTML = document.getElementById("showResultNumb").innerHTML + document.querySelectorAll('tbody > tr ').length;
}

function sortTable() {
   var table, rows, switching, i, x, y, shouldSwitch;
   table = document.getElementById("tableR");
   switching = true;
   var dropdown = document.getElementById("sort-by");
   var selection = dropdown.value;
   var tagIndex = 2;
   if(selection === "ascending" || selection === "descending") {
      tagIndex = 5;
   }
   while (switching) {
     switching = false;
     rows = table.rows;
     for (i = 1; i < (rows.length - 1); i++) {
       shouldSwitch = false;
       x = rows[i].getElementsByTagName("TD")[tagIndex];
       x_value = parseInt(x.innerHTML.toLowerCase().replace("%", ""));
       y = rows[i + 1].getElementsByTagName("TD")[tagIndex];
       y_value = parseInt(y.innerHTML.toLowerCase().replace("%", ""));
       if (selection !== "ascending") {
         if(x_value < y_value) {
            shouldSwitch = true;
            break;
         }
       } else if (selection === "ascending" && x_value > y_value) {
         shouldSwitch = true;
         break;
       }
     }
     if (shouldSwitch) {
       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
       switching = true;
     }
   }
   setRowNumbering();
 }
