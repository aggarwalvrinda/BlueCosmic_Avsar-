from flask import Flask, render_template, jsonify, request
import speech_recognition as sr

app = Flask(__name__)


@app.route('/voice-input', methods=['POST'])
def handle_voice_input():
  input = request.json['input']
  # Do something with the voice input
  return jsonify({'status': 'success'})
if __name__ == '__main__':
 
    # run() method of Flask class runs the application
    # on the local development server.
    app.run()