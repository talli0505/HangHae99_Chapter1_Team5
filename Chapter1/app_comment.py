# DB를 위한 코드
from pymongo import MongoClient

client = MongoClient('몽고디비 주소')
db = client.dbsparta

# Flask를 위한 코드
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# url을 가져오기 위한 코드
import requests
from bs4 import BeautifulSoup


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/comment')
def detail():
    return render_template("comment.html")


@app.route('/comment/content', methods=['POST'])
def save_comment():
    nickname_receive = request.form["nickname_give"]
    comment_receive = request.form["comment_give"]

    comment_list = list(db.musics.find({}, {'_id': False}))
    count = len(comment_list) + 1

    doc = {
        "num": count,
        "nickname": nickname_receive,
        "comment": comment_receive
    }

    db.musics.insert_one(doc)
    return jsonify({'msg': '등록 완료!'})


@app.route("/comment/content", methods=["GET"])
def show_comment():
    comment_list = list(db.musics.find({}, {'_id': False}))
    return jsonify({'comments': comment_list})


@app.route('/comment/content2', methods=['GET'])
def delete_comment():
    nickname_receive = request.form["nickname_give"]
    db.musics.delete_one({"nickname": nickname_receive})
    comment_list = list(db.musics.find({}, {'_id': False}))
    return jsonify({'comments': comment_list})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
