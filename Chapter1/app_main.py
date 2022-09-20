from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

from pymongo import MongoClient

client = MongoClient('mongodb+srv://test:sparta@cluster0.vuhmz.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta


@app.route('/')
def home():
    return render_template('main.html')


@app.route("/music", methods=["GET"])
def music_get01():
    music_list01 = list(db.genie_2000.find({}, {'_id': False}))
    return jsonify({'musics1': music_list01})


def music_get02():
    music_list02 = list(db.genie_2010.find({}, {'_id': False}))
    return jsonify({'musics2': music_list02})


def music_get03():
    music_list03 = list(db.genie_2020.find({}, {'_id': False}))
    return jsonify({'musics3': music_list03})


@app.route("/music1", methods=["GET"])
def music_get1():
    music_list1 = list(db.genie_2000.find({}, {'_id': False}))
    return jsonify({'musics1': music_list1})


@app.route("/music2", methods=["GET"])
def music_get2():
    music_list2 = list(db.genie_2010.find({}, {'_id': False}))
    return jsonify({'musics2': music_list2})


@app.route("/music3", methods=["GET"])
def music_get3():
    music_list3 = list(db.genie_2020.find({}, {'_id': False}))
    return jsonify({'musics3': music_list3})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
