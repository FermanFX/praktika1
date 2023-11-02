let arr = [];
let sum = 0;
let totalSumAll = 0;
let basket = document.querySelector(".basket");
let localBasketArr = JSON.parse(localStorage.getItem("basket"));
let totalSum = document.querySelector(".totalSum");

if (localBasketArr) {
  arr = [...localBasketArr];
}

console.log(arr);

arr.forEach((data) => {
  basket.innerHTML += `
<div
            class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
          >
            <img
              src="${data.image}"
              alt="product-image"
              class="w-full rounded-lg sm:w-40"
            />
            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div class="mt-5 sm:mt-0">
                <h2 class="text-lg font-bold text-gray-900">
                  ${data.name}
                </h2>
                <p class="mt-1 text-xs text-gray-700">${data.country}</p>
              </div>
              <div
                class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6"
              >
                <div class="flex items-center border-gray-100">
                  <span
                    class="down cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  >
                    -
                  </span>
                  <input
                    class="h-8 w-8 border bg-white text-center text-xs outline-none"
                    type="number"
                    value="${data.count}"
                    min="1"
                  />
                  <span
                  name="${data.id}"
                    class="up cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  >
                    +
                  </span>
                </div>
                <div class="flex items-center space-x-4">
                  <p class="text-sm">${data.price}X${data.count}=${(sum =
      data.price * data.count)} $</p>
                  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500 removeAll"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
`;

  totalSumAll += sum;
});
let removeing = document.querySelectorAll(".removeAll");
let ups = document.querySelectorAll(".up");
let downs = document.querySelectorAll(".down");

for (let rembtn of removeing) {
  rembtn.addEventListener("click", function () {
    basket.innerHTML = ''
  }
  )
}



for (let upBtn of ups) {
  upBtn.addEventListener("click", function () {
    this.previousElementSibling.value++;

    localBasketArr[+this.getAttribute("name") - 1].count =
      this.previousElementSibling.value;

    console.log(localBasketArr[+this.getAttribute("name") - 1]);

    localStorage.setItem("basket", JSON.stringify(localBasketArr));
  });
};
// for (let downBtn of downs) {
//   downBtn.addEventListener("click", function () {
//     this.previousElementSibling.value++;
//     // console.log(this.previousElementSibling);

//     localBasketArr[+this.getAttribute("name") - 1].count =
//       this.previousElementSibling.value;

//     console.log(localBasketArr[-this.getAttribute("name") - 1]);

//     localStorage.setItem("basket", JSON.stringify(localBasketArr));

//     // localFavArr[]

//     // this.previosElement.value++;
//   });
// }
for (let downBtn of downs) {
  downBtn.addEventListener("click", function () {
    let girisSahesi = this.nextElementSibling;
    if (girisSahesi.value > 1) {
      girisSahesi.value--;
    }
    localBasketArr[+this.getAttribute("name") - 1].count = girisSahesi.value;
    console.log(localBasketArr[+this.getAttribute("name") - 1]);
    localStorage.setItem("basket", JSON.stringify(localBasketArr));
  });
}

totalSum.innerHTML = Math.floor(totalSumAll);