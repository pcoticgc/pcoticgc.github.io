document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('lifeExpectancyChart').getContext('2d');
    let chart;
    const dataUrl = 'life-expectancy.csv';

    Papa.parse(dataUrl, {
        download: true,
        header: true,
        complete: results => {
            const data = results.data;
            const countries = [...new Set(data.map(row => row.Entity))].sort();
            const countrySelect = document.getElementById('countrySelect');
            
            countries.forEach(country => {
                countrySelect.innerHTML += `<option value="${country}">${country}</option>`;
            });

            countrySelect.onchange = () => {
                if (chart) chart.destroy();

                const selectedCountry = countrySelect.value;
                const filteredData = data.filter(row => row.Entity === selectedCountry);
                const years = filteredData.map(row => row.Year);
                const lifeExpectancies = filteredData.map(row => row['Life expectancy']);

                chart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: years,
                        datasets: [{ label: 'Esperanza de Vida', data: lifeExpectancies, fill: false, borderColor: 'rgb(75, 192, 192)', tension: 0.1 }]
                    },
                    options: { scales: { y: { beginAtZero: false } } }
                });
            };
        }
    });
});
