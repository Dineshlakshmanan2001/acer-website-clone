function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0');
}

function showService(id, rotateDeg) {

    document.querySelectorAll('.service-content')
        .forEach(item => item.classList.remove('active'));

    const content = document.getElementById(id);

    if (content) {
        content.classList.add('active');
    } else {
        console.error('ID not found:', id);
    }

    const wheel = document.getElementById('wheel');

    if (wheel) {
        const color = randomColor();

        wheel.style.transform =
            `translate(-50%, -50%) rotate(${rotateDeg}deg)`;

        wheel.style.background = `conic-gradient(
            ${color},
            #fff,
            ${color},
            #fff,
            ${color},
            #fff,
            ${color}
        )`;
    }
}