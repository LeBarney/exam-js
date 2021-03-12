const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve'];

for (let i = 0; i < tab.length; ++i) {
	  console.log(( "" + tab[i] + ", " + "length: " + tab[i].length))
	}

for (let elem of tab) {
	  console.log( "" + elem + ", " + "length: " + elem.length)
	}

tab.forEach((elem) => {
	  console.log("" + elem + ", " + "length: " + elem.length)
	})

i = 0
	while (i < tab.length)
   {
		console.log("" + tab[i] + ", " + "length: " + tab[i].length)
    i++;
	}

 i = 0
	do {
	  console.log("" + tab[i] + ", " + "length: " + tab[i].length)
    i++;
	} while (i < tab.length)
	
  



