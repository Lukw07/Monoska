// IndustryInfo.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const IndustryInfo = () => {
  // Data pro koláčový graf
  const data = {
    labels: ['Automotive', 'Ostatní strojírenský průmysl', 'Potravinářský průmysl'],
    datasets: [
      {
        data: [80, 12.5, 7.5],
        backgroundColor: ['#ffcc00', '#3399ff', '#66cc33'],
        borderColor: ['#ffcc00', '#3399ff', '#66cc33'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw}%`,
        },
      },
    },
  };

  return (
    <section className="section">
      <div className="section-title">
        <h2>Jednoúčelové stroje pro Automotive a ostatní průmysl</h2>
      </div>
      <div className="section-content">
        <p><strong>Kompletní dodávky montážních linek</strong></p>
        <p>Konstrukčně i výrobně zpracujeme projekt pro zařízení potřebná k montáži či výrobě Vašeho produktu. Samozřejmostí jsou konzultace funkčnosti již v předvýrobní fázi, precizní zpracování i záruční a pozáruční servis.</p>

        <p><strong>Komponenty montážních linek</strong></p>
        <p>Provádíme i doplnění a modifikace stávajících výrobních linek, či výrobu náhradních dílů.</p>

        <p><strong>pro Potravinářský průmysl</strong></p>
        <p>Stroje, linky a komponenty výrobních linek. U našich strojů pro tvarování hmot, temperování či formování čokolády, dekorování, máčení nebo polévání čokoládou a další více či méně příbuznou výrobu, klademe u našich zařízení vedle produktivity důraz zejména na bezpečnost provozu, snadnou údržbu a použití materiálů vhodných pro styk s potravinou.</p>
      </div>

      <div className="section-chart">
        <div className="chart-container">
          <div className="chart-title">Produkty dle odvětví za r. 2017</div>
          <div className="chart">
            <Pie data={data} options={options} />
          </div>
        </div>

        <div className="statistics-grid">
          <div className="stat-cell">
            <div className="stat-number">233</div>
            <div className="stat-label">Úspěšně dokončených projektů v roce 2017</div>
          </div>
          <div className="stat-cell">
            <div className="stat-number">96.5%</div>
            <div className="stat-label">Reinvestováno do rozvoje firmy</div>
          </div>
          <div className="stat-cell">
            <div className="stat-number">312 litrů</div>
            <div className="stat-label">Vypité kávy v roce 2017</div>
          </div>
          <div className="stat-cell">
            <div className="stat-number">1,162,934</div>
            <div className="stat-label">Obrobených dílů v roce 2017</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryInfo;