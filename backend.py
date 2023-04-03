from flask import Flask

app = Flask(__name__)

@app.route('/run-script')
def run_script():
    # Execute the Python script here
    return 'Script executed successfully'

if __name__ == '__main__':
    app.run()
