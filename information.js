const information = (prenom,nom,age) => {
  if (age === 18){
    console.log("prenom: " + prenom + "\nnom: " + nom + "\nage: " + age + "\nvous êtes majeur")
  }
  if (age > 18){
    console.log("prenom: " + prenom + "\nnom: " + nom + "\nage: " + age + "\nvous êtes majeur depuis " +(age-18) + " ans")
  }
  if (age < 18){
    console.log("prenom: " + prenom + "\nnom: " + nom + "\nage: " + age + "\nvous serez majeur dans " +(18-age) + " ans")
  }
}
// information('Barnabé','Castanié', 9) commande test