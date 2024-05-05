def tokenize_data(text, tokenizer, pad_sequences, max_len):
    data_seq = tokenizer.texts_to_sequences([text])
    print(tokenizer.word_index)
    data_padded = pad_sequences(data_seq, maxlen=max_len) 
    return data_padded