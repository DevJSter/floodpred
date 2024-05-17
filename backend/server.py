from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle as pi
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load the pre-trained model
try:
    with open('./model/rf.pkl', 'rb') as file:
        rf = pi.load(file)
except (EOFError, FileNotFoundError) as e:
    print(f"Error loading the model: {e}")
    rf = None

def predict_flood(rainfall_amount, hour, day, month, year):
    if rf:
        predicted_level = rf.predict([[float(rainfall_amount), int(hour), int(day), int(month), int(year)]])
        return 'FLOOD!!' if predicted_level > 1.7 else 'No FLOOD!!'
    return 'Model not loaded properly'

@app.route('/floodpred', methods=['POST'])
def get_prediction():
    print("Received request:", request.json)
    data = request.get_json()

    try:
        date = data['date']
        day, month, year = date.split('-')
        time = data['time']
        hour = time.split(':')[0]
        rainfall = data['rainfall']

        flood_state = predict_flood(rainfall, hour, day, month, year)
        return jsonify({'prediction': flood_state}), 200
    except Exception as e:
        print("Error:", e)
        return jsonify({'error': str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True)