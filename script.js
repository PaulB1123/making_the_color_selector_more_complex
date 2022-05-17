"use strict";

document.querySelector("#color").addEventListener("input", getColours);

function getColours() {
  let colorvalue = document.querySelector("#color").value;
  console.log(colorvalue);

  document.querySelector("#hex").textContent = colorvalue;
  document.querySelector("#color-display").style.backgroundColor = colorvalue;
  document.querySelector("#h2").style.color = colorvalue;
  document.querySelector("#p").style.color = colorvalue;
  document.querySelector("#p2").style.color = colorvalue;
  document.querySelector("#p3").style.color = colorvalue;

  let r = colorvalue.substring(1, 3);
  console.log(r);

  let g = colorvalue.substring(3, 5);
  console.log(g);

  let b = colorvalue.substring(5);
  console.log(b);

  let rValue = parseInt(r, 16);
  console.log("R value is", rValue);
  let gValue = parseInt(g, 16);
  console.log("G value is", gValue);
  let bValue = parseInt(b, 16);
  console.log("B value is", bValue);

  let colorvalueBackground = `rgb(${rValue + 150},${gValue + 150},${bValue + 150})`;
  console.log("this is the rgb", colorvalueBackground);
  document.querySelector("html").style.backgroundColor = colorvalueBackground;

  getRGB();

  function getRGB() {
    let textValue = rValue.toString() + "," + gValue.toString() + "," + bValue.toString();
    console.log(textValue);
    document.querySelector("#rgb").textContent = textValue;
    getHSL();
  }

  function getHSL() {
    // r /= rValue;
    // g /= gValue;
    // b /= bValue;

    let h, s, l;

    r = parseInt(colorvalue.substring(1, 3), 16);
    g = parseInt(colorvalue.substring(3, 5), 16);
    b = parseInt(colorvalue.substring(5), 16);

    r /= 255;
    g /= 255;
    b /= 255;

    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);

    if (max === min) {
      h = 0;
    } else if (max === r) {
      h = 60 * (0 + (g - b) / (max - min));
    } else if (max === g) {
      h = 60 * (2 + (b - r) / (max - min));
    } else if (max === b) {
      h = 60 * (4 + (r - g) / (max - min));
    }

    if (h < 0) {
      h = h + 360;
    }

    l = (min + max) / 2;

    if (max === 0 || min === 1) {
      s = 0;
    } else {
      s = (max - l) / Math.min(l, 1 - l);
    }
    // multiply s and l by 100 to get the value in percent, rather than [0,1]
    s *= 100;
    l *= 100;
    // console.log("this should work");

    // console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
    let roundedH = h.toFixed().toString();
    let roundedS = s.toFixed().toString();
    let roundedL = l.toFixed().toString();

    const h2 = document.querySelector("#h");
    const s2 = document.querySelector("#s");
    const l2 = document.querySelector("#l");

    h2.textContent = roundedH;
    s2.textContent = roundedS + "%";
    l2.textContent = roundedL + "%";

    // h2.textContent = h;
    // s2.textContent = s + "%";
    // l2.textContent = l + "%";

    return { h2, s2, l2 };

    // document.querySelector("#h").textContent = h;
    // document.querySelector("#s").textContent = s;
    // document.querySelector("#l").textContent = l;

    // console.log(" andthis should work");
  }
}
