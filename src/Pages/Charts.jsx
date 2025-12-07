import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { getProducts, getUsers, getComments } from '../api/api';

// Регистрируем ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Charts = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const prod = await getProducts();
      const usrs = await getUsers();
      const comm = await getComments();

      setProducts(Array.isArray(prod) ? prod : []);
      setUsers(Array.isArray(usrs) ? usrs : []);
      setComments(Array.isArray(comm) ? comm : []);
    };
    fetchData();
  }, []);

  const options = {
    responsive: true,
    plugins: { legend: { position: 'top' } },
  };

  const productsData = {
    labels: products.map((p) => p.title),
    datasets: [
      {
        label: 'Products Price',
        data: products.map((p) => p.price),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const usersData = {
    labels: users.map((u) => u.firstName),
    datasets: [
      {
        label: 'Users Age',
        data: users.map((u) => u.age),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const commentsData = {
    labels: comments.map((c) => c.id),
    datasets: [
      {
        label: 'Comments Length',
        data: comments.map((c) => c.body.length),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '32%' }}>
        <h3>Products</h3>
        <Bar data={productsData} options={options} />
      </div>
      <div style={{ width: '32%' }}>
        <h3>Users</h3>
        <Bar data={usersData} options={options} />
      </div>
      <div style={{ width: '32%' }}>
        <h3>Comments</h3>
        <Bar data={commentsData} options={options} />
      </div>
    </div>
  );
};

export default Charts;
