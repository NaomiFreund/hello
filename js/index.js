const prev = document.getElementById('prev')
const next = document.getElementById('next')
let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if (currentActive > 4) {
        currentActive = 4
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if (currentActive > 1) {
        currentActive = 1
    }

    update()
})
