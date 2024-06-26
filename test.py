from flask import Flask, render_template,request
from Image_extract import extract_text

from flask_cors import CORS

app = Flask(__name__)
CORS(app) 
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/apicall')
def api():
    return {
        'response':'api call success'
    }

@app.route("/upload", methods=["POST"])
def upload():
    if 'image' not in request.files:
        return {'error':'no file part'}
    
    file = request.files['image']

    if file.filename == '':
        return {'error':'no file found'}
    
    # Save the file to a desired location or perform other operations
    file.save('uploads/' + file.filename)

    text=extract_text('uploads/' + file.filename)
    return {'response':text}


if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True)
