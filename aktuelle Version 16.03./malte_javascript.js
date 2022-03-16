
function image(imgs) {
  var expandImg = document.getElementById("myimage");
  expandImg.src = imgs.src;
}

$(document).ready(function(){
   
    $(".expander").on("click",function() {
      $(".header").slideDown(500);
      $(".expander").fadeOut(200);
    });

    $("body").on("click","#bookmark",function() {
      $("#bookmark").toggleClass("check");
    });

    $(".header-btn.register-btn").on("click",function(event){
      $(".modal").toggleClass("show");
      $("body").toggleClass("show");
    });

    $(".close").on("click",function(event){
      $(".modal").toggleClass("show");
      $("body").toggleClass("show");
    });
   
    $(".register-dialog-btn").on("click",function(event){
      $(".modal").toggleClass("show");
      $("body").toggleClass("show");
    });

    $(".slctDrwngs").hide();

    $("#dwnldDrpdwn").on("click",function(event){
    $(".slctDrwngs").slideToggle("slow");
    });

   
  
    checkIfLoggedIn();

  var sectionIds = $('a.nav-link');

    $(document).scroll(function(){

        sectionIds.each(function(){

            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();

            if(scrollPosition < containerBottom - 300 && scrollPosition >= containerOffset - 300){
                $(this).addClass('active');
            } else{
                $(this).removeClass('active');
            }
    
    
        });
    });

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
        

    window.onload = function() {
        myFunction();  
        };
                                    
       function myFunction() {
    
            //INITIALIZING VARIABLES TO SORT THE TABLES ACCORDINGLY TO DESC AND ASC ORDER//
            var sortNamePatCit = document.querySelector("#pat-cit thead tr>:nth-child(4)");
            var sortCountryPatCit = document.querySelector("#pat-cit thead tr>:nth-child(1)");
            var sortDatePatCit = document.querySelector("#pat-cit thead tr>:nth-child(5)");
            var sortDateNonPatCit = document.querySelector("#non-pat-cit thead tr>:nth-child(4)");
            var sortNameNonPatCit = document.querySelector("#non-pat-cit thead tr>:nth-child(1)");


            sortNamePatCit.addEventListener('click', function(event) {

                var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
                table = document.getElementById("pat-cit");
                switching = true;
                dir = "asc";
                /*Make a loop that will continue until
                no switching has been done:*/
                while (switching) {
                    //start by saying: no switching is done:
                    switching = false;
                    rows = table.rows;
                    /*Loop through all table rows (except the
                    first, which contains table headers):*/
                    for (i = 1; i < (rows.length - 1); i++) {
                    //start by saying there should be no switching:
                        shouldSwitch = false;
                       /*Get the two elements you want to compare,
                        one from current row and one from the next:*/
                        x = rows[i].querySelector("tbody tr>:nth-child(4)");
                        y = rows[i + 1].querySelector("tbody tr>:nth-child(4)");
                            //check if the two rows should switch place:
                        if (dir == "asc") {
                            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                                //if so, mark as a switch and break the loop:
                                shouldSwitch = true;
                                break;
                            }
                        }
                        else if (dir == "desc") {
                            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                                shouldSwitch= true;
                                break;
                            }
                        }
                    }
                    

                        if (shouldSwitch) {
                            /*If a switch has been marked, make the switch
                            and mark that a switch has been done:*/
                            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                            switching = true;
                        switchcount ++;      
                        } 
                        else {
                            if (switchcount == 0 && dir == "asc") {
                                dir = "desc";
                                switching = true;
                            }
                        }       
                }
            });


            sortCountryPatCit.addEventListener('click', function(event) {

                var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
                table = document.getElementById("pat-cit");
                switching = true;
                dir = "asc";
                /*Make a loop that will continue until
                no switching has been done:*/
                while (switching) {
                    //start by saying: no switching is done:
                    switching = false;
                    rows = table.rows;
                    /*Loop through all table rows (except the
                    first, which contains table headers):*/
                    for (i = 1; i < (rows.length - 1); i++) {
                    //start by saying there should be no switching:
                        shouldSwitch = false;
                       /*Get the two elements you want to compare,
                        one from current row and one from the next:*/
                        x = rows[i].querySelector("tbody tr>:nth-child(1)");
                        y = rows[i + 1].querySelector("tbody tr>:nth-child(1)");
                            //check if the two rows should switch place:
                        if (dir == "asc") {
                            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                                //if so, mark as a switch and break the loop:
                                shouldSwitch = true;
                                break;
                            }
                        }
                        else if (dir == "desc") {
                            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                                shouldSwitch= true;
                                break;
                            }
                        }
                    }
                    

                        if (shouldSwitch) {
                            /*If a switch has been marked, make the switch
                            and mark that a switch has been done:*/
                            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                            switching = true;
                        switchcount ++;      
                        } 
                        else {
                            if (switchcount == 0 && dir == "asc") {
                                dir = "desc";
                                switching = true;
                            }
                        }       
                }
            });

            sortDatePatCit.addEventListener('click', function(event) {

                var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
                table = document.getElementById("pat-cit");
                switching = true;
                dir = "asc";
                /*Make a loop that will continue until
                no switching has been done:*/
                while (switching) {
                    //start by saying: no switching is done:
                    switching = false;
                    rows = [].slice.call(table.rows);
                    /*Loop through all table rows (except the
                    first, which contains table headers):*/
                    for (i = 1; i < (rows.length - 1); i++) {
                    //start by saying there should be no switching:
                        shouldSwitch = false;
                       /*Get the two elements you want to compare,
                        one from current row and one from the next:*/
                        x = rows[i].querySelector("tbody tr>:nth-child(5)");
                        y = rows[i + 1].querySelector("tbody tr>:nth-child(5)");
                        var xContent = (isNaN(x.innerHTML)) 
                            ? (x.innerHTML.toLowerCase() === '-')
                                ? 0 : x.innerHTML.toLowerCase()
                            : parseFloat(x.innerHTML);
                        var yContent = (isNaN(y.innerHTML)) 
                            ? (y.innerHTML.toLowerCase() === '-')
                                ? 0 : y.innerHTML.toLowerCase()
                            : parseFloat(y.innerHTML);
                        if (dir == "asc") {
                            if (xContent > yContent) {
                            shouldSwitch= true;
                            break;
                            }
                        } 
                        else if (dir == "desc") {
                            if (xContent < yContent) {
                                shouldSwitch= true;
                                break;
                            }
                        }
                    }
                    if (shouldSwitch) {
                        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                        switching = true;
                        switchcount ++;      
                    } 
                    else {
                        if (switchcount == 0 && dir == "asc") {
                            dir = "desc";
                            switching = true;
                        }
                    }
                }
            });
        } 