const podium = (number) =>{
let tableauTri = number.sort(function(a, b) {
      return b - a;
    });
console.log("1st: "+ tableauTri[0] + "\n2nd: " + tableauTri[1] + "\n3rd: " + tableauTri[2]);
}

// podium ([14,19,13,14,7,20,18,18.5]) commande test