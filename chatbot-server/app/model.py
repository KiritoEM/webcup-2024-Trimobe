from keras.models import load_model
from data import training_data
from sklearn.preprocessing import LabelEncoder
from tensorflow.keras.preprocessing.text import Tokenizer
import pandas as pd
import re
from util import tokenize_data

def load_chat_model():
    # Load the model
    model = load_model("./app/static/chatbotModel.h5") 

    dataset = pd.DataFrame(training_data)

    # Preprocess questions
    for index, row in dataset.iterrows():
        question = row['question']
        question = re.sub(r'[^\w\s]', '', question)
        dataset.loc[index, 'question'] = question

    tokenizer = Tokenizer()
    tokenizer.fit_on_texts(dataset["question"])

    label_encoder = LabelEncoder()
    label_encoder.fit(dataset["response"])
    
    return model, tokenizer, label_encoder

def chat_predict(model, tokenizer, label_encoder , text, pad_sequences):
    data = tokenize_data(text, tokenizer, pad_sequences, 5)
    prediction = model.predict(data)
    
    # Handle unseen labels gracefully
    try:
        predicted_class = label_encoder.inverse_transform(prediction.argmax(axis=-1))
    except ValueError as e:
        print("Encountered unseen label:", e)
        # Handle the situation based on your application's requirements
        return None
    
    for input_text, predicted_class in zip(data, predicted_class):
        print("Input:", input_text)
        print("Prediction:", predicted_class)
        
    return predicted_class
