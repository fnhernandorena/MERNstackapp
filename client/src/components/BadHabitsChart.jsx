import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import PropTypes from "prop-types";

const BadHabitsChart = ({badHabit}) => {
    const chartRef = useRef(null);
  let myChart = useRef(null);

  useEffect(() => {
    // Crear el gráfico al montar el componente
    myChart.current = new Chart(chartRef.current, {
      type: 'line',
      data: {
        labels: badHabit.times.map((value, index) => index + 1),
        datasets: [{
          label: "Bad Habit Value",
          data: badHabit.times ,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 6
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Devolver una función de limpieza para destruir el gráfico cuando el componente se desmonte
    return () => {
      myChart.current.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default BadHabitsChart;

BadHabitsChart.propTypes = {
    badHabit: PropTypes.shape({
      times: PropTypes.array.isRequired,
    }).isRequired,
  };