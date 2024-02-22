from flask import Flask

def create_app():
    app = Flask(__name__)

    # Register API routes
    from .api.routes import api
    app.register_blueprint(api)

    return app
