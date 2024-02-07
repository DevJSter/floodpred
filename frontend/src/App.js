import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [time, setTime] = useState('');
  const [rainfall, setRainfall] = useState('');
  const [predictionResult, setPredictionResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:your_port/your_endpoint', {
        date,
        month,
        time,
        rainfall,
      });

      // Handle the prediction response as needed
      setPredictionResult(response.data.prediction);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  useEffect(() => {
    // You can add additional logic or side effects based on the prediction result
    if (predictionResult) {
      console.log('Prediction result:', predictionResult);
      // Add any other logic here based on the prediction result
    }
  }, [predictionResult]);

  
  return (
    <div className="container mx-auto p-4 bg-blue-100">
      <h1 className="text-3xl font-bold mb-8 text-blue-800">Flood Detection System</h1>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <div className="form-group mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-600">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            className="border p-2 w-full"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="month" className="block text-sm font-medium text-gray-600">
            Month:
          </label>
          <select
            id="month"
            name="month"
            required
            className="border p-2 w-full"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            <option value="" disabled hidden>
              Select a month
            </option>
            {/* ...options here */}
          </select>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="time" className="block text-sm font-medium text-gray-600">
            Time:
          </label>
          <input
            type="time"
            id="time"
            name="time"
            required
            className="border p-2 w-full"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="rainfall" className="block text-sm font-medium text-gray-600">
            Rainfall (mm):
          </label>
          <input
            type="number"
            id="rainfall"
            name="rainfall"
            required
            className="border p-2 w-full"
            value={rainfall}
            onChange={(e) => setRainfall(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>

      {predictionResult && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-blue-800">Prediction Result:</h2>
          <p className="text-blue-700">{predictionResult}</p>
        </div>
      )}
    </div>
  );
};

export default App;
