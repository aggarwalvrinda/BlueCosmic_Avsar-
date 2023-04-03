from flask import render_template,Flask
from werkzeug.serving import run_simple
app = Flask(__name__)
@app.route('/')
def home():
    return render_template('index.html')
# @app.route('/technical')
# def technical():
#     return render_template('technical.html')
if __name__ == '__main__':
    run_simple('avsar', 9000, app) 