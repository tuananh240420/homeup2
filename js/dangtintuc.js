let progressBar = document.querySelector('.circular-progress');
let valueContainer = document.querySelector('.value-container');

let progressValue = 0;
let progressEndValue = 30;
let speed = 10;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
      #D1193F ${progressValue * 3.6}deg,
      #ECEDF1 ${progressValue * 3.6}deg
      )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);

// Count in BDS
let countBedroomInit = 0;
let countBathroomInit = 0;
let countFlatInit = 0;

function countBedroom() {
  console.log('aaaa');
  countBedroomInit -= 1;
  document.getElementById('text-bedroom').innerHTML = countBedroomInit;
  document.getElementById('minus-bedroom-img').style.background = 'red';
}
// document.getElementById()
class CountBtn {
  count = 0;
  minus(id) {
    if (this.count === 0) {
      return;
    }
    if (this.count === 1)
      document
        .getElementById(id)
        .previousElementSibling.classList.remove('active');
    else
      document
        .getElementById(id)
        .previousElementSibling.classList.add('active');
    this.count--;
    document.getElementById(id).innerHTML = this.count;
  }
  plus(id) {
    document.getElementById(id).previousElementSibling.classList.add('active');
    this.count++;
    document.getElementById(id).innerHTML = this.count;
  }
}
var bedroom = new CountBtn();
var bathroom = new CountBtn();
var flat = new CountBtn();

document.querySelectorAll('.dangtintuc-image').forEach((item) => {
  item.onclick = () => {
    document
      .querySelector('.dangtintuc-image.active')
      .classList.remove('active');
    item.classList.add('active');
  };
});
