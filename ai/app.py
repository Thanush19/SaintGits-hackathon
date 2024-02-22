from flask import Flask, request, jsonify
from models.crop_prediction import get_crop_recommendations

app = Flask(__name__)

@app.route('/crop-recommendation', methods=['POST'])
def predict():
    # Get user input from JSON request
    data = request.json
    user_location = data['location'].capitalize()
    user_season = data['season'].capitalize()
    user_soil_texture = data['soil_texture'].capitalize()

    # Get recommendations
    recommended_crop = get_crop_recommendations(user_location, user_season, user_soil_texture)

    response = {'recommended_crop': recommended_crop}
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
