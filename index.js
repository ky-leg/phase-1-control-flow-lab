function scuberGreetingForFeet(x){
  if (x < 400) {
    return "This one is on me!"
  } 
  else if (x > 2000 && x <= 2500) {
    return "I will gladly take your thirty bucks."
  }
  else if (x > 2500) 
    return "No can do."
}

function ternaryCheckCity(city){
  const isNYC = city === "NYC" ? ("Ok, sounds good.") : ("No go.")
  return isNYC
}

function switchOnCharmFromTip(tip){
  if (tip === "generous"){
    return "Thank you so much."
  }

  else if (tip === "not as generous"){
    return "Thank you."
  }

  else {
    return "Bye."
  }
}

console.log(switchOnCharmFromTip("wut"))