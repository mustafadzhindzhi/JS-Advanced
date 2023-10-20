function attachGradientEvents() {
    const gradientBox = document.getElementById('gradient-box');
    const result = document.getElementById('result');

    gradientBox.addEventListener('mousemove', function (event) {
        const mouseX = event.offsetX;
        const gradientBoxWidth = gradientBox.clientWidth;

        const percentage = (mouseX / gradientBoxWidth) * 100;

        result.textContent = `${Math.floor(percentage)}%`;
    });

    gradientBox.addEventListener('mouseout', function () {
        result.textContent = '';
    });
}