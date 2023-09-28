let b1 = document.querySelector(".b1");

countDown()
  .then(() => makeWish("Happy Birthday"));

async function countDown() {
  let time = 10, ang = 0;
  for (let i = 10; i >= 0; i--) {
    await new Promise((resolve) => {
      setTimeout(() => {
        b1.style.transform = `rotateY(${ang}deg)`; // Correct the style property
        b1.innerHTML = time;
        time--;
        ang += 36; // Change the rotation increment
        resolve(1);
      }, (10 - i) * 1000);
    });
  }
}

function makeWish(wish) {
  b1.innerHTML = wish;
  b1.style.fontSize = "3rem";
}
