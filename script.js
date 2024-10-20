function openModal(title, description, price) {
    document.getElementById('productTitle').innerText = title;
    document.getElementById('productDescription').innerText = description;
    document.getElementById('productPrice').innerText = `Giá: ${price.toLocaleString()} VND`;
    document.getElementById('productModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

function orderProduct() {
    document.getElementById('productModal').style.display = 'none';
    document.getElementById('orderModal').style.display = 'block';
}

function closeOrderModal() {
    document.getElementById('orderModal').style.display = 'none';
}
