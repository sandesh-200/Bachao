import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Calendar, Filter, Map } from 'lucide-react';

const Reports = () => {
  const [disasters, setDisasters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, month, week
  const [selectedType, setSelectedType] = useState('all');

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  useEffect(() => {
    const fetchDisasters = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/disasters');
        const data = await response.json();
        setDisasters(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching disasters:', error);
        setLoading(false);
      }
    };

    fetchDisasters();
  }, []);

  const filterDisasters = () => {
    let filtered = [...disasters];
    
    if (filter !== 'all') {
      const now = new Date();
      const timeFrame = filter === 'month' ? 30 : 7; // days
      filtered = filtered.filter(disaster => {
        const disasterDate = new Date(disaster.date);
        const diffTime = Math.abs(now - disasterDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays <= timeFrame;
      });
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(disaster => disaster.type === selectedType);
    }

    return filtered;
  };

  const getDisasterStats = () => {
    const filtered = filterDisasters();
    const typeCount = {};
    filtered.forEach(disaster => {
      typeCount[disaster.type] = (typeCount[disaster.type] || 0) + 1;
    });

    return Object.entries(typeCount).map(([name, value]) => ({ name, value }));
  };

  const getSeverityData = () => {
    const filtered = filterDisasters();
    const severityCount = {
      Low: 0,
      Medium: 0,
      High: 0,
      Critical: 0
    };
    filtered.forEach(disaster => {
      severityCount[disaster.severity] = (severityCount[disaster.severity] || 0) + 1;
    });

    return Object.entries(severityCount).map(([severity, count]) => ({
      severity,
      count
    }));
  };

  const disasterTypes = ['all', ...new Set(disasters.map(d => d.type))];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
              Disaster Reports & Statistics
            </h1>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-gray-500" />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                >
                  <option value="all">All Time</option>
                  <option value="month">Last 30 Days</option>
                  <option value="week">Last 7 Days</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                >
                  {disasterTypes.map(type => (
                    <option key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Total Reports</h3>
              <p className="text-3xl font-bold text-blue-600">{filterDisasters().length}</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Types of Disasters</h3>
              <p className="text-3xl font-bold text-green-600">{disasterTypes.length - 1}</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-900 mb-2">Critical Cases</h3>
              <p className="text-3xl font-bold text-orange-600">
                {filterDisasters().filter(d => d.severity === 'Critical').length}
              </p>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Severity Distribution */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Severity Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={getSeverityData()}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="severity" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Disaster Type Distribution */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Disaster Type Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={getDisasterStats()}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {getDisasterStats().map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
