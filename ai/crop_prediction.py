from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load the trained model
model = joblib.load('./crop_prediction_model.joblib')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    # Extract input features
    location = data['location']
    season = data['season']
    soil_texture = data['soil_texture']

    # Make prediction
    recommended_crop = get_crop_recommendations(location, season, soil_texture)

    return jsonify({'recommended_crop': recommended_crop})

# Function to provide recommendations
# Function to provide recommendations
def get_crop_recommendations(location, season, soil_texture):
    # Check if location exists in the dataset
    if location in df['location'].unique():
        # Preprocess user input
        location_code = le.transform([location])[0]
        season_code = le.transform([season])[0]
        soil_texture_code = le.transform([soil_texture])[0]

        # Make prediction
        prediction = model.predict([[location_code, season_code, soil_texture_code]])
        
        return prediction[0]
    else:
        # Filter DataFrame based on season and soil texture
        filtered_df = df[(df['season'] == season) & (df['soil_texture'] == soil_texture)]
        
        # If no matching crops found, return any available crop
        if filtered_df.empty:
            return df.iloc[0]['name']  # Return the first crop in the DataFrame
        else:
            # Otherwise, return the name of the first crop from the filtered DataFrame
            return filtered_df.iloc[0]['name']


if __name__ == '__main__':
    app.run(debug=True)
