from flask import Flask, jsonify, request
from flask_cors import CORS
import pickle
# from sklearn.ensemble import RandomForestRegressor
# import numpy as np

app = Flask(__name__)
CORS(app)

@app.route("/generator", methods=["POST"])
def generator():
    try:
        json_data = request.get_json()
        ans = []
        income = json_data["income"]
        members = json_data["members"]
        net = json_data["net"]

        with open('model_and_scaler.pkl', 'rb') as file:
            model_and_scaler = pickle.load(file)

        model = model_and_scaler['model']
        scaler = model_and_scaler['scaler']

        user_input = []
        user_input.append(income)
        user_input.append(members)
        user_input.append(net)

        user_input_scaled = scaler.transform([user_input])

        prediction = model.predict(user_input_scaled)
        ans.append({"prediction": prediction.tolist()})

        return jsonify(ans)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)