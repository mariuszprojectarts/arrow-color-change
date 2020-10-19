let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
  // console.log(e);
  // console.log(e.keyCode, e.which);

  //v1 with IF

  // if (e.keyCode == 38 && red < 255) {

  //   red += 5;
  //   green += 5;
  //   blue += 5;
  //   document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  // } else if (e.keyCode == 40 && red > 0) {

  //   red -= 5;
  //   green -= 5;
  //   blue -= 5;
  //   document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  // }

  //v2 with SWITCH

  switch (e.keyCode) {

    case 38:
      //console.log(red);
      document.body.style.backgroundColor = `rgb(${red < 255 ? red += 5 : red}, ${green < 255 ? green += 5 : red}, ${blue < 255 ? blue += 5 : red})`;
      break;

    case 40:
      //console.log(red);
      document.body.style.backgroundColor = `rgb(${red > 0 ? red -= 5 : red}, ${green > 0 ? green -= 5 : green}, ${blue > 0 ? blue -= 5 : blue})`;
      break;
  }
}

window.addEventListener('keydown', changeColor)