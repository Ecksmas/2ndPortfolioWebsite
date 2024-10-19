document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    header.style.opacity = '0';
    header.style.transform = 'translateY(-20px)';
    main.style.opacity = '0';
    main.style.transform = 'translateX(20px)';

    setTimeout(() => {
        header.classList.add('fade-in');
    }, 100);

    setTimeout(() => {
        main.classList.add('fade-in');
    }, 600);
});