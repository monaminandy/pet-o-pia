from flask import Flask, request, jsonify
import pickle
import numpy as np

# Load the model
with open('model.pkl', 'rb') as file:
    model = pickle.load(file)

app = Flask(__name__)

@app.route('/')
def home():
    return "Model is running!"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json  # Expecting JSON input
        features = np.array(data['features']).reshape(1, -1)
        prediction = model.predict(features).tolist()
        return jsonify({'prediction': prediction})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)