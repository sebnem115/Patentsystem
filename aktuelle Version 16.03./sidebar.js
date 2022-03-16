window.onload = function () {
    sliderToInputValues();
}

const dateMin = 1949;
const dateMax = 2021;

function sliderToInputValues() {
    var dateDelta = dateMax - dateMin;
    var dateForFromInput = Math.round(dateMin + $("#fromSlider").val() / 100 * dateDelta);
    var dateForToInput = Math.round(dateMin + $("#toSlider").val() / 100 * dateDelta);
    
    $("#fromInput").val(dateForFromInput);
    $("#toInput").val(dateForToInput);
}

function inputToSliderValues() {
    var dateDelta = dateMax - dateMin; // 72
    $("#fromSlider").val(($("#fromInput").val() - dateMin) / dateDelta * 100);
    $("#toSlider").val(($("#toInput").val() - dateMin) / dateDelta * 100);
}

// plain javascript
// function toggleFilterBar() {
//     var filterBar = document.getElementById("filter1");
//     if (filterBar.style.display === "none") {
//         filterBar.style.display = "block";
//     } else {
//         filterBar.style.display = "none";
//     }
// }

// jquery
function toggleFilterBar() {
    let filterBar = $("#filter1");
    filterBar.is(":hidden") ? filterBar.show() : filterBar.hide();
    var x = document.getElementById("toggleButtonHide");
      if (x.innerHTML === "Hide Filter-Sidebar") {
        x.innerHTML = "Show Filter-Sidebar";
      } else {
        x.innerHTML = "Hide Filter-Sidebar";
      }
}

//for resetting the hidden options
function resetViewOptions() {
    //    console.log("Foo1");
    $('input[id="box1"]').prop('checked', false);
    $('input[id="box2"]').prop('checked', false);
    $('input[id="box3"]').prop('checked', false);
    $('input[id="box4"]').prop('checked', false);
    $('input[id="box5"]').prop('checked', false);
    $('input[id="box6"]').prop('checked', false);
    
    $("#fromSlidersdv ").val(3);
    $("#toSlider").val(100);
}

function toggleColumn(checkbox, colClass) {
    checkbox.checked ? $('.'+colClass).hide() : $('.'+colClass).show();
}

function alertListCreated(select) {
    if (select.value=="x") {
        alert('A new list has been created.')
    }   
    if (select.value!="0") {
        select.value= "0"
    }       
}

//
function largeImgOpen (img) {
    $("#largeImgContent").attr("src", img);
    $("#largeImgModal").css("display", "block");
}

function largeImgClose(){
    $("#largeImgModal").css("display", "none");
}

//jump on page --> navigation statt Seitenzahlen
function jumpUp (colNumber) {
    var newPosition = colNumber + 10; 
    return newPosition;
    console.log(newPosition);
}