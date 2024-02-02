/***

Implement a countdown timer that counts down from 81 to 65.

 */


let countdown = 120 ; 
function startCountdown() {
    console.log(countdown); 
    if (countdown > 1){
        countdown--; 
        setTimeout(startCountdown, 1000) ;//1000 mili second = 1s ; 
    }
}

startCountdown();

