from flask import Flask, jsonify, request
from flask_cors import CORS
import pickle
from sklearn.ensemble import RandomForestRegressor
import numpy as np

app = Flask(__name__)
CORS(app)

@app.route("/generator", methods=["POST"])
def generator():
    try:
        json_data = request.get_json()
        model = pickle.load(open("model.pkl", 'rb'))
        ans = []
        income = json_data["income"]
        members = json_data["members"]
        net = json_data["net"]

        data = np.array([income, members, net])

        prediction = model.predict(data)
        ans.append({"prediction": prediction})

        return jsonify(ans)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)