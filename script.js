document.getElementById('helloBtn').addEventListener('click', function() {
    document.getElementById('message').textContent = 'Thanks for clicking';

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'button_click',
        button_id: 'helloBtn'
    });
});
