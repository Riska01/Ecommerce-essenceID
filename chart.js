// Ambil data keranjang dari localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Fungsi untuk merender tabel keranjang
function renderCart() {
  const tableBody = document.querySelector("#cart-table tbody");
  const subtotalElement = document.getElementById("subtotal"); // Jika ada elemen subtotal
  let subtotal = 0;

  // Hapus konten tabel lama
  tableBody.innerHTML = "";

  cart.forEach((item, index) => {
    subtotal += item.price * item.quantity;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>
        <div class="cart-info">
          <img src="${item.img}" alt="${item.name}" />
          <div>
            <p>${item.name}</p>
            <small>Rp. ${item.price.toLocaleString()}</small>
            <br />
            <a href="#" class="remove-btn" data-index="${index}">Hapus</a>
          </div>
        </div>
      </td>
      <td>
        <input type="number" value="${item.quantity}" min="1" class="quantity-input" data-index="${index}">
      </td>
      <td>Rp. ${(item.price * item.quantity).toLocaleString()}</td>
    `;

    tableBody.appendChild(row);
  });

  // Jika ada elemen subtotal, perbarui isinya
  if (subtotalElement) {
    subtotalElement.textContent = subtotal.toLocaleString();
  }

  // Tambahkan event listener untuk tombol "Hapus"
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      removeFromCart(index);
    });
  });

  // Tambahkan event listener untuk input jumlah
  document.querySelectorAll(".quantity-input").forEach(input => {
    input.addEventListener("change", (e) => {
      const index = e.target.dataset.index;
      updateQuantity(index, e.target.value);
    });
  });
}

// Fungsi untuk menghapus item dari keranjang
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart(); // Render ulang keranjang
}

// Fungsi untuk memperbarui jumlah item
function updateQuantity(index, newQuantity) {
  cart[index].quantity = parseInt(newQuantity);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart(); // Render ulang keranjang
}

// Render keranjang saat halaman dimuat
document.addEventListener("DOMContentLoaded", renderCart);
