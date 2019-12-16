from flask import Flask, render_template, request, redirect, send_from_directory, url_for, session

app = Flask(__name__)


@app.route('/')
def point_and_click():
    return render_template('first_stage.html')


if __name__ == '__main__':
    app.run()
