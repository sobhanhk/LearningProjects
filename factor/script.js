// value.replace(/[^0-9]/g, "")
document.querySelector(".table").addEventListener("input", (e) => {
  if (e.target.id) {
    const id = e.target.id.split("-")[1];
    const fi = Number(document.getElementById(`fi-${id}`).value);
    const quantity = Number(document.getElementById(`quantity-${id}`).value);
    const total = String(fi * quantity);
    document.getElementById(`total-${id}`).textContent = total.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );
    let totalPrice = 0;
    document.querySelectorAll(".total").forEach((e) => {
      if (e.textContent) {
        console.log(Number(e.textContent.replace(/[^0-9]/g, "")));
        totalPrice += Number(e.textContent.replace(/[^0-9]/g, ""));
        document.getElementById("total-price").textContent = String(
          totalPrice
        ).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        console.log(totalPrice);
      }
    });
  }
});

let lastRow = 8;

document.getElementById("add-one-row").addEventListener("click", function (e) {
  const table = document.getElementById("table");
  ++lastRow;
  table.insertAdjacentHTML(
    "beforeend",
    `<tr>
<td>${lastRow}</td>
<td><input type="text" class="product-name" /></td>
<td>
  <input type="number" class="product-quantity" id="quantity-${lastRow}" />
</td>
<td><input type="number" class="product-price" id="fi-${lastRow}" /></td>
<td><label id="total-${lastRow}" class="total">0</label></td>
</tr>`
  );
});
