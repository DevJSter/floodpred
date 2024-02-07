from flask import Flask, render_template, request
import pandas as pd
import pickle ad pi
app = Flask(__name__)

rf = pickle.load(open('flood_model.pkl', 'rb')) 

def predict_flood(rainfall_amount, day, month):
    # Assuming you have your model (rf) already defined
    predicted_level = rf.predict([[float(rainfall_amount), 6, 6, int(day), int(month)]])
    return 'FLOOD!!' if predicted_level > 1.8 else 'No FLOOD!!'

@app.route('/', methods=['POST', 'GET'])
def get_input():
    if request.method == 'POST':
        date = request.form['date']
        day, month, year = date.split('-')
        time = request.form['time']
        rainfall = request.form['rainfall']

        flood_state = predict_flood(rainfall, day, month)
        return render_template('result.html', flood_state=flood_state)

    return render_template('input_form.html')

if __name__ == "__main__":
    app.run(debug=True)
