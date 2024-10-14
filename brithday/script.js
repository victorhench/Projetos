document.getElementById('open-btn').addEventListener('click', function() {
    const gift = document.getElementById('gift');
    const message = document.getElementById('message');
    const button = document.getElementById('open-btn');

    gift.style.display = 'none'; // Esconde o presente
    button.style.display = 'none'; // Esconde o botão
    message.classList.remove('hidden'); // Mostra a mensagem
});
