const dataArr = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];
const chartBars = document.querySelectorAll('.bar');

chartBars.forEach((bar, index) => {
    bar.style.height = `${dataArr[index] * 2}px`;
    let tooltip = bar.querySelector('.tooltip');
    tooltip.innerHTML = `$${dataArr[index]}`;

    bar.addEventListener('mouseover', () => {
        tooltip.style.display = 'block';
    })

    bar.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
    })
})