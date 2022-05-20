const submit = document.querySelector(".submit");
const content = document.querySelector(".content");
const result = document.querySelector(".result");
const star = document.querySelector(".star")
const btns = document.querySelectorAll('.btn');
let selected = document.querySelector(".selected");

submit.disabled = true;

content.addEventListener('click', (e) => {
    const id = e.target.dataset.id

    btns.forEach((btn) => {
        btn.classList.remove('color')
    })

    if (id) {
        e.target.classList.toggle('color')
        submit.disabled = false;
        selected.textContent = `You selected ${id} out of 5`
    }
})

submit.addEventListener("click", (e) => {
        content.classList.add("hidden");
        star.classList.add("hidden");
        result.classList.remove("hidden");
})