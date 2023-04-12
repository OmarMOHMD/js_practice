const btn = document.querySelector('button');
const light = document.getElementById('light');
btn.addEventListener('click', () => {
    btn.classList.toggle("active");
    light.classList.toggle("lightActive");
});
