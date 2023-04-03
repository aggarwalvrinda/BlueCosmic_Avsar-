from flask import Flask
import subprocess

app = Flask(__name__)

@app.route('/run-script')
def run_script():
    # Execute the Python script here
    subprocess.run(["python", "keywordtoanswer.py"])
    return "run_script"
if __name__ == '__main__':
    app.run(debug=True)

