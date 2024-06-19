document.addEventListener('DOMContentLoaded', function() {
    const orderButtons = document.querySelectorAll('.btn-outline-secondary');
    const modal = new bootstrap.Modal(document.getElementById('productModal'));
    const modalTitle = document.getElementById('productModalLabel');
    const modalBody = document.querySelector('.modal-body');

    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = button.closest('.card');
            const title = card.querySelector('.card-title').textContent;
            const description = card.querySelector('.card-text').textContent;
            const features = card.querySelectorAll('ul li');

            modalTitle.textContent = title;
            modalBody.innerHTML = `
                <p>${description}</p>
                <ul>
                    ${Array.from(features).map(feature => `<li>${feature.textContent}</li>`).join('')}
                </ul>
            `;

            modal.show();
        });
    });
});