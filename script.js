document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('lifeExpectancyChart').getContext('2d');
    let chart;
    const dataUrl = 'life-expectancy.csv'; // Asegúrate de cambiar esto por la ruta correcta al archivo CSV

    Papa.parse(dataUrl, {
        download: true,
        header: true,
        complete: function(results) {
            const data = results.data;
            const countries = [...new Set(data.map(row => row.Entity))].sort();
            const countrySelect = document.getElementById('countrySelect');
            
            countries.forEach(country => {
                const option = document.createElement('option');
                option.value = country;
                option.textContent = country;
                countrySelect.appendChild(option);
            });

            countrySelect.addEventListener('change', function () {
                if (chart) {
                    chart.destroy();
                }

                const selectedCountry = this.value;
                const filteredData = data.filter(row => row.Entity === selectedCountry);
                const years = filteredData.map(row => row.Year);
                const lifeExpectancies = filteredData.map(row => row['Life expectancy']);

                chart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: years,
                        datasets: [{
                            label: 'Esperanza de Vida',
                            data: lifeExpectancies,
                            fill: false,
                            borderColor: 'rgb(75, 192, 192)',
                            tension: 0.1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: false
                            }
                        }
                    }
                });
            });
        }
    });
});
