const isLeapYear = (annee) => {
  if (annee%400 === 0 || (annee%4 === 0 && annee%100 !== 0))
  {
    return true;
  }
  else
  {
    return false;
  }
}

// console.log(isLeapYear(1994)) commande de test