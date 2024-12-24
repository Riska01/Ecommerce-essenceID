const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}

/* Bottom to Top button */

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})

// Event listener untuk ikon keranjang belanja
//document.querySelectorAll('.fa-cart-shopping').forEach(function (cartIcon) {
  //  cartIcon.addEventListener('click', function (event) {
  //      event.preventDefault(); // Mencegah aksi default
   //     alert('Anda harus login terlebih dahulu untuk melanjutkan belanja!');
         // Redirect ke halaman login (opsional)
//      window.location.href = 'login.html';
//  });
//});

document.getElementById("claim-button").addEventListener("click", function () {
    console.log("Tombol klaim diklik!");
    alert("Selamat! Anda telah mendapatkan diskon 70%");
    window.location.href = "index.html"; // Ganti dengan link beranda yang sesuai
});

function submitFeedback() {
    const feedback = document.getElementById('feedback').value.trim();
    if (feedback) {
        alert("Kritik dan saran telah terkirim. Terima kasih atas masukan Anda!");
        document.getElementById('feedback').value = ""; // Mengosongkan textarea setelah terkirim
    } else {
        alert("Harap isi kritik dan saran sebelum mengirim.");
    }
}

function searchFunction() {
    const input = document.getElementById("search-input").value.toLowerCase();
    const products = document.querySelectorAll(".pro");

    products.forEach(product => {
        const productName = product.querySelector("h5").textContent.toLowerCase();
        const productBrand = product.querySelector("span").textContent.toLowerCase();

        if (productName.includes(input) || productBrand.includes(input)) {
            product.style.display = "block"; // Tampilkan produk yang cocok
        } else {
            product.style.display = "none"; // Sembunyikan produk yang tidak cocok
        }
    });
}

function showModal() {
    document.getElementById('orderModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('orderModal').style.display = 'none';
}

function confirmOrder() {
    alert("Pesanan Anda telah dikonfirmasi!");
    closeModal();
}