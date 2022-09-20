# DB를 위한 코드
from pymongo import MongoClient

client = MongoClient('자기 몽고디비 ')
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


@app.route('/comment/<title>')
def detail(title):
    return render_template("comment.html", title=title)


@app.route('/comment/content', methods=['POST'])
def save_comment():
    nickname_receive = request.form["nickname_give"]
    comment_receive = request.form["comment_give"]

    comment_list = list(db.musics.find({}, {'_id': False}))
    count = len(comment_list) + 1

    doc = {
        "num": count,
        "nickname": nickname_receive,
        "comment": comment_receive,
        "like": 0
    }

    db.musics.insert_one(doc)
    return jsonify({'msg': '등록 완료!'})


@app.route("/comment/content", methods=["GET"])
def show_comment():
    comment_list = list(db.musics.find({}, {'_id': False}))
    return jsonify({'comments': comment_list})


@app.route('/delete', methods=['POST'])
def delete_word():
    num_receive = request.form['num_give']

    db.musics.delete_one({'num': int(num_receive)})
    return jsonify({'msg': '삭제 완료!'})


# 음원 데이터 크롤링 이후 ajax파일로 테이블을 만든 다음에 이용
# @app.route("/like", methods=["POST"])
# def like_heart():
#     num_receive = request.form['num_give']
#
#     db.musics.update_one({'num': int(num_receive)}, {'$set': {'like': 1}})
#
#     return jsonify({'msg': '좋아요 완료!'})
#
#
# @app.route("/dislike", methods=["POST"])
# def dislike_dislike():
#     num_receive = request.form['num_give']
#
#     db.bucket.update_one({'num': int(num_receive)}, {'$set': {'like': 0}})
#
#     return jsonify({'msg': '취소 완료!'})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
