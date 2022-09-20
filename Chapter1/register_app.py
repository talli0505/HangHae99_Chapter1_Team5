from pymongo import MongoClient

# JWT 패키지를 사용합니다. (설치해야할 패키지 이름: PyJWT)
import jwt

# 토큰에 만료시간을 줘야하기 때문에, datetime 모듈도 사용합니다.
import datetime

# 회원가입 시엔, 비밀번호를 암호화하여 DB에 저장해두는 게 좋습니다.
# 그렇지 않으면, 개발자(=나)가 회원들의 비밀번호를 볼 수 있으니까요.^^;
import hashlib
from flask import Flask, render_template, jsonify, request, redirect, url_for
from werkzeug.utils import secure_filename
from datetime import datetime, timedelta

app = Flask(__name__)

# JWT 토큰을 만들 때 필요한 비밀문자열입니다. 아무거나 입력해도 괜찮습니다.
# 이 문자열은 서버만 알고있기 때문에, 내 서버에서만 토큰을 인코딩(=만들기)/디코딩(=풀기) 할 수 있습니다.
SECRET_KEY = 'DAMU'

client = MongoClient('자기 몽고주소')
db = client.practice_project_week1



#################################
##  HTML을 주는 부분             ##
#################################
# @app.route('/')
# def home():
#     token_receive = request.cookies.get('mytoken')
#     try:
#         payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])
#         user_info = db.user.find_one({"id": payload['id']})
#         return render_template('index.html', nickname=user_info["nick"])
#     except jwt.ExpiredSignatureError:
#         return redirect(url_for("login", msg="로그인 시간이 만료되었습니다."))
#     except jwt.exceptions.DecodeError:
#         return redirect(url_for("login", msg="로그인 정보가 존재하지 않습니다."))



@app.route('/')
def home():
    return render_template('register2.html')


#################################
##  로그인을 위한 API            ##
#################################

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
    exists2 = bool(db.project_DAMU.find_one({"email"+"domain": full_mail}))
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
        "username": username_receive,                               # 아이디
        "password": password_hash,                                  # 비밀번호
        "email": email_receive,                                     # 이메일 앞부분
        "domain": domain_receive,                                   # 이메일 도메인부분
        "phone": phone_hash,                                        # 핸드폰번호

    }
    db.project_DAMU.insert_one(doc)
    return jsonify({'result': 'success'})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
