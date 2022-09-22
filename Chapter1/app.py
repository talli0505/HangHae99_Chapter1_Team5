# 패키지들
from flask import Flask, render_template, request, jsonify, url_for
import jwt
import datetime
import hashlib

from werkzeug.utils import secure_filename
from datetime import datetime, timedelta

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True
app.config['UPLOAD_FOLDER'] = "./static/profile_pics"

SECRET_KEY = ''

from pymongo import MongoClient

client = MongoClient('자기 몽고디비 주소')
db = client.dbsparta

YEARS = [
        {
            'year': 2000
        },
        {
            'year': 2010
        },
        {
            'year': 2020
        }
    ]

#  메인 페이지
@app.route('/')
def home():
    return render_template('main.html', years=YEARS)

@app.route('/login')
def login():
    return render_template('login.html', years=YEARS)

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



# 아이디 중복확인 서버!!
@app.route('/sign_up/check_dup', methods=['POST'])
def check_dup():
    username_receive = request.form['username_give']
    exists = bool(db.project_DAMU.find_one({"username": username_receive}))
    return jsonify({'result': 'success', 'exists': exists})


# 이메일 중복확인 서버!!
@app.route('/sign_up/check_email', methods=['POST'])
def check_email():
    email_receive = request.form['email_give']
    domain_receive = request.form['domain_give']
    full_mail = email_receive + domain_receive
    exists2 = bool(db.project_DAMU.find_one({"email" + "domain": full_mail}))
    return jsonify({'result': 'success', 'exists2': exists2})


# [회원가입 API]
# id, pw, nickname을 받아서, mongoDB에 저장합니다.
# 저장하기 전에, pw를 sha256 방법(=단방향 암호화. 풀어볼 수 없음)으로 암호화해서 저장합니다.


# 회원가입 서버!!
@app.route('/sign_up/save', methods=['POST'])
def sign_up():
    username_receive = request.form['username_give']
    password_receive = request.form['password_give']
    email_receive = request.form['email_give']
    domain_receive = request.form['domain_give']
    phone_receive = request.form['phone_give']

    password_hash = hashlib.sha256(password_receive.encode('utf-8')).hexdigest()
    phone_hash = hashlib.sha256(phone_receive.encode('utf-8')).hexdigest()
    doc = {
        "username": username_receive,  # 아이디
        "password": password_hash,  # 비밀번호
        "email": email_receive,  # 이메일 앞부분
        "domain": domain_receive,  # 이메일 도메인부분
        "phone": phone_hash,  # 핸드폰번호

    }
    db.project_DAMU.insert_one(doc)
    return jsonify({'result': 'success'})

# 로그인
@app.route('/sign_in', methods=['POST'])
def sign_in():
    # 로그인
    username_receive = request.form['username_give']
    password_receive = request.form['password_give']

    pw_hash = hashlib.sha256(password_receive.encode('utf-8')).hexdigest()
    result = db.project_DAMU.find_one({'username': username_receive, 'password': pw_hash})

    if result is not None:
        payload = {
         'id': username_receive,
         'exp': datetime.utcnow() + timedelta(seconds=60 * 60 * 24)  # 로그인 24시간 유지
        }
        token = jwt.encode(payload, SECRET_KEY, algorithm='HS256').decode()

        return jsonify({'result': 'success', 'token': token})
    # 찾지 못하면
    else:
        return jsonify({'result': 'fail', 'msg': '아이디/비밀번호가 일치하지 않습니다.'})


# 2000년 노래 좋아요
@app.route("/genie_2000/like", methods=["POST"])
def genie_2000_like():
    num_receive = request.form['num_give']

    db.genie_2000.update_one({'num': int(num_receive)}, {'$set': {'done': 1}})

    return jsonify({'msg': '좋아요 완료!'})

# 2010년 노래 좋아요
@app.route("/genie_2010/like", methods=["POST"])
def genie_2010_like():
    num_receive = request.form['num_give']

    db.genie_2010.update_one({'num': int(num_receive)}, {'$set': {'done': 1}})

    return jsonify({'msg': '좋아요 완료!'})

# 2020년 노래 좋아요
@app.route("/genie_2020/like", methods=["POST"])
def genie_2020_like():
    num_receive = request.form['num_give']

    db.genie_2020.update_one({'num': int(num_receive)}, {'$set': {'done': 1}})

    return jsonify({'msg': '좋아요 완료!'})

# 2000년 노래 싫어요
@app.route("/genie_2000/dislike", methods=["POST"])
def genie_2000_dislike():
    num_receive = request.form['num_give']

    db.genie_2000.update_one({'num': int(num_receive)}, {'$set': {'done': 0}})

    return jsonify({'msg': '취소 완료!'})

# 2010년 노래 싫어요
@app.route("/genie_2010/dislike", methods=["POST"])
def genie_2010_dislike():
    num_receive = request.form['num_give']

    db.genie_2010.update_one({'num': int(num_receive)}, {'$set': {'done': 0}})

    return jsonify({'msg': '취소 완료!'})

# 2020년 노래 싫어요
@app.route("/genie_2020/dislike", methods=["POST"])
def genie_2020_dislike():
    num_receive = request.form['num_give']

    db.genie_2020.update_one({'num': int(num_receive)}, {'$set': {'done': 0}})

    return jsonify({'msg': '취소 완료!'})

# 댓글
@app.route('/posting', methods=['POST'])
def posting():
    comment_receive = request.form['comment_give']
    nickname_receive = request.form['nickname_give']
    doc = {
        'comment': comment_receive,
        'nickname': nickname_receive
    }
    db.comment.insert_one(doc)
    return jsonify({'msg': '입력 완료!'})


@app.route("/comment", methods=["GET"])
def show_post():
    all_comment_list = list(db.comment.find({}, {'_id': False}))
    return jsonify({'comments': all_comment_list})



if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
