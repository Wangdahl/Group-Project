
// Show hide address for contacts
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.address-button').forEach(button => {
        const addressBox = button.nextElementSibling;
        if(addressBox) {
            addressBox.classList.toggle('open');
        }
    })
});