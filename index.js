document.querySelectorAll('#hdbt button').forEach(btn => {

    btn.addEventListener("click", () => {

        document.querySelector(".hdpt img").src = btn.dataset.src;
    })
})

document.querySelectorAll('.accordion').forEach(accordion => {
    accordion.addEventListener('click', () => {
        accordion.querySelector('.accordion-text').classList.toggle('active')
    })
})