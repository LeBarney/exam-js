const average = (number) => 
{
  let somme = 0;
  for (let i = 0; i < number.length; i++)
  {
    somme = somme + number[i];
  }
  moyenne = somme / number.length;
  return moyenne;
  
}

// console.log(average([4,54,23,44])) commande test