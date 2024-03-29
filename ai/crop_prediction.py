from flask import Flask, request, jsonify
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
import pickle
import json  # Adding the missing import

app = Flask(__name__)

# JSON data
data = '''
{
    "crops": [
      {
        "name": "Paddy",
        "varieties": ["Ponni", "Kichadi Samba"],
        "preferred_locations": ["Thanjavur", "Tiruvarur", "Tiruvallur", "Kancheepuram", "Villupuram", "Cuddalore", "Tirunelveli"],
        "seasons": ["Kharif"],
        "soil_texture": ["Alluvial"],
        "future_demand": "High"
      },
      {
        "name": "Millets",
        "varieties": ["Sorghum", "Ragi", "Bajra"],
        "preferred_locations": {
          "Sorghum": ["Coimbatore Plateau", "Kambam Valley"],
          "Ragi": ["Coimbatore", "Dharmapuri", "Vellore", "Cuddalore"],
          "Bajra": ["Ramanathapuram", "Tirunelveli", "Karur", "Perambalur", "Salem"]
        },
        "seasons": ["Kharif", "Rabi"],
        "soil_texture": ["Loamy", "Sandy"],
        "future_demand": "Moderate"
      },
      {
        "name": "Pulses",
        "varieties": ["Bengal gram", "Black gram", "Green gram", "Cowpea", "Horse gram"],
        "preferred_locations": {
          "Bengal gram": ["Coimbatore"],
          "Black gram": ["Tiruvarur", "Nagapattinam", "Thoothukudi"],
          "Green gram": ["Tiruvarur", "Nagapattinam", "Thoothukudi"],
          "Horse gram": ["Dharmapuri", "Krishnagiri"]
        },
        "seasons": ["Rabi"],
        "soil_texture": ["Loamy", "Sandy"],
        "future_demand": "High"
      },
      {
        "name": "Oil Seeds",
        "varieties": ["Groundnut", "Gingelly", "Castor", "Coconut", "Sunflower", "Mustard"],
        "preferred_locations": {
          "Groundnut": ["Vellore", "Tiruvannamalai", "Villupuram", "Salem", "Pudukottai"],
          "Coconut": ["Coimbatore", "Thanjavur", "Kanyakumari"]
        },
        "seasons": ["Kharif", "Rabi"],
        "soil_texture": ["Loamy", "Sandy"],
        "future_demand": "Moderate"
      },
      {
        "name": "Sugarcane",
        "preferred_locations": ["Tiruvallur", "Kancheepuram", "Vellore", "Cuddalore", "Tiruchirapalli", "Coimbatore", "Erode", "Tirunelveli"],
        "seasons": ["Whole Year"],
        "soil_texture": ["Alluvial"],
        "future_demand": "High"
      },
      {
        "name": "Cotton",
        "preferred_locations": ["Madurai", "Ramanathapuram", "Virudhunagar", "Tirunelveli", "Thoothukudi", "Salem", "Dharmapuri"],
        "seasons": ["Kharif"],
        "soil_texture": ["Black"],
        "future_demand": "Moderate"
      },
      {
        "name": "Plantation Crops",
        "varieties": ["Tea", "Coffee", "Cashew", "Rubber", "Cinchona"],
        "preferred_locations": {
          "Tea": ["Nilgiris", "Coimbatore"],
          "Coffee": ["Western Ghats", "Eastern Ghats", "Dindigul", "Madurai", "Theni", "Salem"],
          "Rubber": ["Kanyakumari"]
        },
        "seasons": ["Whole Year"],
        "soil_texture": ["Loamy", "Red"],
        "future_demand": "Moderate"
      }
    ]
}
'''

# Convert JSON data to DataFrame
crops_list = []
for crop in json.loads(data)['crops']:
    if isinstance(crop['preferred_locations'], list):
        for location in crop['preferred_locations']:
            crops_list.append({
                'name': crop['name'],
                'location': location,
                'season': ','.join(crop['seasons']),
                'soil_texture': ','.join(crop['soil_texture'])
            })
    else:
        for location, _ in crop['preferred_locations'].items():
            crops_list.append({
                'name': crop['name'],
                'location': location,
                'season': ','.join(crop['seasons']),
                'soil_texture': ','.join(crop['soil_texture'])
            })
df = pd.DataFrame(crops_list)

# Preprocess the data
le = LabelEncoder()
df['location'] = le.fit_transform(df['location'])
df['season'] = le.fit_transform(df['season'])
df['soil_texture'] = le.fit_transform(df['soil_texture'])

# Train the model
X = df[['location', 'season', 'soil_texture']]
y = df['name']
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X, y)

# Save the model for future use using pickle
with open('crop_prediction_model.pkl', 'wb') as model_file:
    pickle.dump(model, model_file)

@app.route('/predict', methods=['POST'])
def predict():
    # Get user input from JSON request
    data = request.json
    user_location = data['location'].capitalize()
    user_season = data['season'].capitalize()
    user_soil_texture = data['soil_texture'].capitalize()

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

    # Get recommendations
    recommended_crop = get_crop_recommendations(user_location, user_season, user_soil_texture)

    response = {'recommended_crop': recommended_crop}
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
