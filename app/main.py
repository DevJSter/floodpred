from flask import Flask, render_template, request, redirect, url_for
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor

app = Flask(__name__)

df_rain = pd.read_csv('Hourly-Rainfall.csv')

df_river = pd.read_csv('Hourly-River-Level.csv')

df = pd.merge(df_rain, df_river, how='outer', on=['Date/Time'])

df['Date/Time'] = pd.to_datetime(df['Date/Time'], format='%Y-%m-%d %H:%M:%S')

df.set_index('Date/Time', inplace=True)

df['Hour'] = df.index.hour
df['Day'] = df.index.day
df['Month'] = df.index.month
df['Year'] = df.index.year

df = df.drop(columns=['Current rainfall (mm)'])
df = df.fillna(0)

X = df.drop(columns=['Level (m)'])

y = df['Level (m)']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=58)

rf = RandomForestRegressor(n_estimators=100, random_state=0)
rf.fit(X_train, y_train)
@app.route('/')
def home():
    return render_template("index.html")

@app.route('/', methods=['POST','GET'])
def get_input():
    if request.method == 'POST':
        date = request.form['date']
        d=tuple(date.split('-'))
        day,month,year=d
        month = request.form['month']
        time = request.form['time']
        rainfall = request.form['rainfall']

        Rainfall_Amount = rainfall
        predicted_level = rf.predict([[float(Rainfall_Amount), 6, 6, int(day), int(month)]])

        if (predicted_level > 1.8):
            state = 'FLOOD!!'
        else:
            state = "No FLOOD!!"

        return redirect(url_for('output', time=time, rainfall=rainfall, predicted_level=predicted_level, state=state))
    else:
        return render_template('index.html')

@app.route('./templates/output')
def output():
    time = request.args.get('time')
    rainfall = request.args.get('rainfall')
    predicted_level = request.args.get('predicted_level')
    state = request.args.get('state')

    return render_template('output.html', time=time, rainfall=rainfall, predicted_level=predicted_level, state=state)

if __name__ == "__main__":
    app.run(debug=True)