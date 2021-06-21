var rest_mode = document.querySelectorAll(".second_row")

var work_mode = document.querySelectorAll(".third_row")

var drive_mode = document.querySelectorAll(".fourth_row")

var rest_clicked = false;

var work_clicked = false;

var drive_clicked = false;

function check_id_tag(cell, colour){
  if (cell.id === 'first_box') {
    cell.style.backgroundColor = 'white'
  } else if (cell.style.backgroundColor === colour) {
      cell.style.backgroundColor = 'white'
  } else{
    cell.style.backgroundColor = colour
}
}

//The three below functions will change the colour of the cell for the rest row
//to red or back to white.
rest_mode.forEach((item) => {
  item.addEventListener("mousedown", function () {
      check_id_tag(item,'red')
    rest_clicked = true;
  });
});

window.addEventListener("mouseup", function () {
  rest_clicked = false;
});

rest_mode.forEach(item => {
    item.addEventListener("mouseover", function() {
        if (rest_clicked) {
        check_id_tag(item, 'red')
        }
    })
})


//The three below functions will change the colour of the cell for the work row
//to green or back to white.
work_mode.forEach((item) => {
  item.addEventListener("mousedown", function () {
      check_id_tag(item,'green')
    work_clicked = true;
  });
});

window.addEventListener("mouseup", function () {
  work_clicked = false;
});

work_mode.forEach(item => {
    item.addEventListener("mouseover", function() {
        if (work_clicked) {
        check_id_tag(item, 'green')
        }
    })
})

//The three below functions will change the colour of the cell for the drive row
//to amber or back to white.
drive_mode.forEach((item) => {
  item.addEventListener("mousedown", function () {
      check_id_tag(item,'orange')
    drive_clicked = true;
  });
});

window.addEventListener("mouseup", function () {
  drive_clicked = false;
});

drive_mode.forEach(item => {
    item.addEventListener("mouseover", function() {
        if (drive_clicked) {
        check_id_tag(item, 'orange')
        }
    })
})
