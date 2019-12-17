from flask import Flask, render_template, request, redirect, send_from_directory, url_for, session

app = Flask(__name__)


@app.route('/game')
def point_and_click():
    #return render_template('end_stage.html')
    return render_template('first_stage.html')


@app.route('/')
def front_page():
    return render_template('front_page.html')


if __name__ == '__main__':
    app.run()
