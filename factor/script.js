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

document.getElementById("reset").addEventListener("click", function (e) {
  document.getElementById("table").innerHTML = `
          <tbody id="table">
            <tr>
              <td>1</td>
              <td><input type="text" class="product-name" /></td>
              <td>
                <input type="number" class="product-quantity" id="quantity-1" />
              </td>
              <td><input type="number" class="product-price" id="fi-1" /></td>
              <td><label id="total-1" class="total">0</label></td>
            </tr>
            <tr>
              <td>2</td>
              <td><input type="text" class="product-name" /></td>
              <td>
                <input type="number" class="product-quantity" id="quantity-2" />
              </td>
              <td><input type="number" class="product-price" id="fi-2" /></td>
              <td><label id="total-2" class="total">0</label></td>
            </tr>
            <tr>
              <td>3</td>
              <td><input type="text" class="product-name" /></td>
              <td>
                <input type="number" class="product-quantity" id="quantity-3" />
              </td>
              <td><input type="number" class="product-price" id="fi-3" /></td>
              <td><label id="total-3" class="total">0</label></td>
            </tr>
            <tr>
              <td>4</td>
              <td><input type="text" class="product-name" /></td>
              <td>
                <input type="number" class="product-quantity" id="quantity-4" />
              </td>
              <td><input type="number" class="product-price" id="fi-4" /></td>
              <td><label id="total-4" class="total">0</label></td>
            </tr>
            <tr>
              <td>5</td>
              <td><input type="text" class="product-name" /></td>
              <td>
                <input type="number" class="product-quantity" id="quantity-5" />
              </td>
              <td><input type="number" class="product-price" id="fi-5" /></td>
              <td><label id="total-5" class="total">0</label></td>
            </tr>
            <tr>
              <td>6</td>
              <td><input type="text" class="product-name" /></td>
              <td>
                <input type="number" class="product-quantity" id="quantity-6" />
              </td>
              <td><input type="number" class="product-price" id="fi-6" /></td>
              <td><label id="total-6" class="total">0</label></td>
            </tr>
            <tr>
              <td>7</td>
              <td><input type="text" class="product-name" /></td>
              <td>
                <input type="number" class="product-quantity" id="quantity-7" />
              </td>
              <td><input type="number" class="product-price" id="fi-7" /></td>
              <td><label id="total-7" class="total">0</label></td>
            </tr>
            <tr>
              <td>8</td>
              <td><input type="text" class="product-name" /></td>
              <td>
                <input type="number" class="product-quantity" id="quantity-8" />
              </td>
              <td><input type="number" class="product-price" id="fi-8" /></td>
              <td><label id="total-8" class="total">0</label></td>
            </tr>
          </tbody>`;
  document.getElementById("total-price").textContent = 0;
});
