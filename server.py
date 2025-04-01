from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

app = Flask(__name__, template_folder="templates", static_folder="static")
CORS(app)

@app.route('/')
def index():
    return render_template('index.html') 

@app.route('/sumar', methods=['POST'])
def sumar_matrices():
    data = request.json
    matriz1 = data['matriz1']
    matriz2 = data['matriz2']

    resultado = [[matriz1[i][j] + matriz2[i][j] for j in range(len(matriz1[0]))] for i in range(len(matriz1))]

    return jsonify({"resultado": resultado})

if __name__ == '__main__':
    app.run(debug=True)

