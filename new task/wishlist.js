let datas = [];
let table = document.querySelector(".tbody");
let arrLocalFav = JSON.parse(localStorage.getItem("fav"));

if (arrLocalFav) {
    datas = arrLocalFav;
}

datas.forEach((data) => {
    table.innerHTML += `<tr>
    <th scope="row">${data.id}</th>
    <td>${data.name}</td>
    <td>${data.country}</td>
</tr>`;
    let favIcons = document.querySelectorAll(".favIcon");

    let localFavArr = JSON.parse(localStorage.getItem("fav"));

    if (localFavArr) {
        arr = [...localFavArr];
    }
    for (let icon of favIcons) {
        icon.addEventListener("click", function () {
            arr = arr.filter((elem) => elem.id != this.getAttribute("name"));
            localStorage.setItem("fav", JSON.stringify(arr));
        });
    }
})