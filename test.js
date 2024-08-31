document.addEventListener('DOMContentLoaded', (event) => {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownButton.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', (event) => {
        if (!event.target.matches('.dropdown-button')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});
