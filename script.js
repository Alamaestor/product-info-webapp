function calculateTotalPrice() {
    const quantity = parseInt(document.getElementById('quantity').value) || 0;
    const pricePerUnit = parseFloat(document.getElementById('pricePerUnit').value) || 0;
    const totalPrice = quantity * pricePerUnit;

    document.getElementById('totalPrice').value = totalPrice.toFixed(2);
}

function generateText() {
    const productName = document.getElementById('productName').value;
    const model = document.getElementById('model').value;
    const quantity = document.getElementById('quantity').value;
    const pricePerUnit = document.getElementById('pricePerUnit').value;
    const description = document.getElementById('description').value;
    const totalPrice = document.getElementById('totalPrice').value;

    const formattedText = `*Product Information*\n\nProduct Name: ${productName}\nModel: ${model}\nQuantity: ${quantity}\nPrice per Unit: $${pricePerUnit}\n\n*Description*:\n${description}\n\n*Total Price*: $${totalPrice}`;
    
    document.getElementById('output').innerText = formattedText;
    document.getElementById('copyButton').style.display = 'block';
}

function copyText() {
    const textToCopy = document.getElementById('output').innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Copied to clipboard');
    });
}
