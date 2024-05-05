from flask import Flask, request, jsonify
from tensorflow.keras.preprocessing.sequence import pad_sequences# type: ignore
import sys
sys.path.insert(0, './app/')
from model import load_chat_model, chat_predict
from flask_cors import CORS # type:               

app = Flask(__name__)
CORS(app)

model, tokenizer, label_encoder = load_chat_model()

@app.route("/")
def hello():
    return jsonify({'message': 'your server is running!!!'}), 200

@app.route("/chat", methods=["POST"])
def predict():
    donnees = request.form
    chat = donnees.get('chat')
    predicted_classes = chat_predict(model, tokenizer, label_encoder, chat, pad_sequences)
    
    return jsonify({'message': predicted_classes}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
