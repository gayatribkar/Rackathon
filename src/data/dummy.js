import React from 'react';
import { FiPieChart, FiUser, FiBarChart2 } from 'react-icons/fi';


export const links = [
  {
 
    links: [
      {
        path: 'psgs/visualization',
        name: 'Visualization',
        icon: <FiBarChart2 style={{color: 'rgb(3, 201, 215)'}}/>,
      },
      {
        path: 'psgs/prediction',
        name: 'Prediction',
        icon: <FiPieChart style={{color: 'rgb(3, 201, 215)'}}/>,
      },
      {
        path: 'psgs/about',
        name: 'About Us',
        icon: <FiUser style={{color: 'rgb(3, 201, 215)'}}/>,
      },
    ],
  },
];

