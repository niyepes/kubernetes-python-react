app = Flask(__name__)
CORS(app)

models.init_app(app)

@app.route("/messages", methods=["GET"])
def get_messages():
    messages = models.Message.query.order_by(models.Message.timestamp.desc()).all()
    return jsonify([message.to_dict() for message in messages])

@app.route("/messages", methods=["POST"])
def add_message():
    data = request.get_json()
    new_msg = models.Message(name=data["name"], message=data["message"])
    models.db.session.add(new_msg)
    models.db.session.commit()
    return jsonify(new_msg.to_dict()), 201

@app.route("/")
def health():
    return "Guestbook API is running!"

if __name__ == "__main__":
    with app.app_context():
        models.db.create_all()
    app.run(host="0.0.0.0", port=5000)

    