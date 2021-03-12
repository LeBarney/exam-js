const guess = (userGuess,secret) => {
  if (userGuess === secret){
    console.log("You win")
  }
  if (userGuess > secret){
    console.log("Too big!")
  }
  if (userGuess < secret){
    console.log("Too small!")
  }
}

// guess(32,17) commande test