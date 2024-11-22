from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate  # Importa Flask-Migrate

app = Flask(__name__)

# Configurazione del database (SQLite di default)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)  # Configura Flask-Migrate

# Modello del database
class Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(200), nullable=True)

# Rotte API
@app.route('/')
def index():
    return jsonify({"message": "Benvenuto nel server Flask!"})

@app.route('/items', methods=['GET', 'POST'])
def manage_items():
    if request.method == 'POST':
        data = request.json
        new_item = Item(name=data['name'], description=data.get('description'))
        db.session.add(new_item)
        db.session.commit()
        return jsonify({"message": "Item creato!", "item": data}), 201
    else:
        items = Item.query.all()
        return jsonify([{"id": item.id, "name": item.name, "description": item.description} for item in items])

if __name__ == '__main__':
    app.run(debug=True)
