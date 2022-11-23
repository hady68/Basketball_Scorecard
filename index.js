// let homeScoreb1 = document.getElementById("home1")
let homeStoreEl =document.getElementById("home-score")
let guestStoreEl =document.getElementById("guest-score")
let homeScore = 0
let guestScore =0

function updateHomescore(){
     homeStoreEl.textContent = homeScore
}

function addhome1(){
    homeScore += 1
   updateHomescore();
}

function addhome2(){
    homeScore += 2
   updateHomescore();
}

function addhome3(){
    homeScore += 3
   updateHomescore();
}

function updateGuestscore(){
     guestStoreEl.textContent = guestScore
}

function addguest1(){
    guestScore += 1
   updateGuestscore();
}

function addguest2(){
    guestScore += 2
   updateGuestscore();
}

function addguest3(){
    guestScore += 3
   updateGuestscore();
}
