from wsgiref.simple_server import make_server
from flask import Flask
import subprocess

app = Flask(__name__)

@app.route('/run-script')
def run_script():
    # Execute the Python script here
    subprocess.run(["python", "keywordtoanswer.py"])
    return ""
if __name__ == '__main__':
    with make_server('127.0.0.1', 5000, app) as server:
        print('Serving on port 5000...')
        server.serve_forever()
