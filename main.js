let time = document.querySelector('#time')
let today = document.querySelector('#today')
function goToHell() {
  let beArmy = new Date("2023-10-02 00:00:00");
  let todayDate = new Date();
  console.log(todayDate);
  console.log(beArmy);
  const Hell = beArmy - todayDate;
  const HellDay = Math.floor(Hell / (1000 * 60 * 60 * 24));
  const HellHour = Math.floor((Hell / (1000 * 60 * 60)) % 24);
  const HellMin = Math.floor((Hell / (1000 * 60)) % 60);
  const HellSec = Math.floor((Hell / 1000) % 60);

  time.innerText = `${HellDay}일 ${HellHour}시간 ${HellMin}분 ${HellSec}초`;
  today.innerText = `${todayDate.getFullYear()}년 ${todayDate.getMonth() + 1}월 ${todayDate.getDate()}일 ` ;
}
goToHell()
 setInterval(goToHell, 1000);

