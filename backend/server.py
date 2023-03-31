# Import flask and datetime module for showing date and time
from flask import render_template,Flask
from werkzeug.serving import run_simple
import datetime

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)


# Route for seeing a data
@app.route('/data')
def get_time():

	# Returning an api for showing in reactjs
	return {
		'Name':"geek",
		"Age":"22",
		"Date":x,
		"programming":"python"
		}

	
# Running app
if __name__ == '__main__':
    run_simple('localhost', 5000, app)
