$(document).ready(function(){
   $('#select-all-checkbox').click(function(event) {
      if (this.checked) {
      $('.select-result').prop('checked', true);
      } else {
         $('.select-result').prop('checked', false);
      }
   }
)});

function sortTable() {
   var table, rows, switching, i, x, y, shouldSwitch;
   table = document.getElementById("tableR");
   switching = true;
   var dropdown = document.getElementById("sort-by");
   var selection = dropdown.value;
   var tagIndex = 1;
   if(selection === "ascending" || selection === "descending") {
      tagIndex = 4;
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
 }