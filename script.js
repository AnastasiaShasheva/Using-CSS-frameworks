document.querySelectorAll('.toggle').forEach(item => {
    item.addEventListener('click', event => {
        const infoBox = item.nextElementSibling; // Находим следующий элемент <div>
        if (infoBox.style.display === "block") {
            infoBox.style.display = "none"; // Скрываем, если уже открыт
        } else {
            infoBox.style.display = "block"; // Показываем элемент
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('dropdownBtn');
    const sidebar = document.querySelector('.three.columns.sidebar');

    btn.addEventListener('click', function() {
        if (sidebar.style.display === 'none' || !sidebar.style.display) {
            sidebar.style.display = 'block'; // Показываем меню
        } else {
            sidebar.style.display = 'none'; // Скрываем меню
        }
    });
});