import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Legend,
  Tooltip,
} from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'
import { getWeeklySeries } from '../mocks/metrics.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Legend,
  Tooltip,
)

export default function ChartsPanel() {
  const series = getWeeklySeries()
  const labels = series.map((s) => s.day)

  return (
    <section className="charts">
      <article>
        <h2>Visitas</h2>
        <Bar
          data={{
            labels,
            datasets: [
              {
                label: 'Visitas',
                data: series.map((s) => s.visits),
                backgroundColor: '#2563eb88',
              },
            ],
          }}
          options={{ responsive: true, plugins: { legend: { display: false } } }}
        />
      </article>
      <article>
        <h2>Revenue</h2>
        <Line
          data={{
            labels,
            datasets: [
              {
                label: 'USD',
                data: series.map((s) => s.revenue),
                borderColor: '#0f766e',
                tension: 0.35,
              },
            ],
          }}
          options={{ responsive: true }}
        />
      </article>
    </section>
  )
}
