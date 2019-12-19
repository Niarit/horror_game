from flask import Flask, render_template, request, redirect, send_from_directory, url_for, session

app = Flask(__name__)


@app.route('/game-christmas')
def point_and_click():
    return render_template('first_stage.html')


@app.route('/game-new-year')
def new_year_massacre():
    return render_template('first_room.html')


@app.route('/')
def front_page():
    return render_template('front_page.html')


@app.route('/end')
def end_stage():
    return render_template('end_stage.html')


@app.route('/new-game-end-1')
def loose_ending():
    return render_template('end_room_lose.html')


if __name__ == '__main__':
    app.run()
