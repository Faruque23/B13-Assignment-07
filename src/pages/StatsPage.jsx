import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTimeline } from '../context/TimelineContext';
import '../styles/StatsPage.css';

const COLORS = { call: '#0f6d3a', text: '#0369a1', video: '#5b21b6' };

const StatsPage = () => {
  const { entries } = useTimeline();

  const counts = entries.reduce(
    (acc, e) => { acc[e.type] = (acc[e.type] || 0) + 1; return acc; },
    { call: 0, text: 0, video: 0 }
  );

  const chartData = [
    { name: 'Call',  value: counts.call  },
    { name: 'Text',  value: counts.text  },
    { name: 'Video', value: counts.video },
  ].filter((d) => d.value > 0);

  return (
    <div className="stats-page">
      <h2>Friendship Analytics</h2>
      <p className="stats-sub">An overview of your interaction history across all friends.</p>

      <div className="stats-totals">
        {Object.entries(counts).map(([type, val]) => (
          <div key={type} className={`stats-total-card stats-${type}`}>
            <div className="stats-total-val">{val}</div>
            <div className="stats-total-label">{type.charAt(0).toUpperCase() + type.slice(1)}s</div>
          </div>
        ))}
      </div>

      {chartData.length === 0 ? (
        <div className="stats-empty">
          <p>No interactions logged yet. Head to a friend&apos;s detail page and check in!</p>
        </div>
      ) : (
        <div className="stats-chart-wrap">
          <h3>Interaction Breakdown</h3>
          <ResponsiveContainer width="100%" height={360}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={140}
                paddingAngle={4}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {chartData.map((entry) => (
                  <Cell key={entry.name} fill={COLORS[entry.name.toLowerCase()]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default StatsPage;
