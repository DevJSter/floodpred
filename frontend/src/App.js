import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [rainfall, setRainfall] = useState('');
  const [predictionResult, setPredictionResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://127.0.0.1:5000/floodpred', {
        date,
        time,
        rainfall,
      });
      setPredictionResult(response.data.prediction);
    } catch (error) {
      setError('Error submitting form. Please try again.');
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (predictionResult) {
      console.log('Prediction result:', predictionResult);
    }
  }, [predictionResult]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="container mx-auto p-4 bg-blue-100">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">Flood Detection System</h1>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md mx-auto" style={{ maxWidth: '500px' }}>
          <div className="form-group mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-600">Date:</label>
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
            <label htmlFor="time" className="block text-sm font-medium text-gray-600">Time:</label>
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
            <label htmlFor="rainfall" className="block text-sm font-medium text-gray-600">Rainfall (mm):</label>
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
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        {error && (
          <div className="mt-4 text-red-600 text-center">
            <p>{error}</p>
          </div>
        )}
        {predictionResult && (
          <div className="mt-4 text-center">
            <h2 className="text-lg font-semibold text-blue-800">Prediction Result:</h2>
            <p className="text-blue-700">{predictionResult}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
