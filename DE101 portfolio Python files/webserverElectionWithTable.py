from controller import setup
from flask import Flask

# the Flask object works out where this file is running from
app = Flask(__name__)

# get data from controller
the_election = setup()

# format data into html f-string template
html = f"""
    <!DOCTYPE html> 
    <html lang="en"> 
    <head> 
    <title>The Election 2020</title> 
    <link rel="stylesheet" href='/static/table_style.css' />
    </head> 
    <body>
    {the_election.to_table()}
    </body> 
    """

# some magic to connect the app to the web
@app.route('/')
def index():
    return html

# needs this to run in PyCharm
app.run(debug=True,
        port=5000,
        use_debugger=False,
        use_reloader=False,
        passthrough_errors=True)

# view in web-browser at http://127.0.0.1:5000/
# or at localhost:5000