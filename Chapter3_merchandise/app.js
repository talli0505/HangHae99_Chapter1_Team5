// 1. npm init -y 로 package.json 완료
// 2. npm i express 로 express.js 완료
// 3. thunder client 작동되는지 확인 완료
// 4-1. routes/goods.js 에 express 받아올거랑 라우터 연결
// 4-2. 경로로 인한 페이지 설정
// 4-3. 라우터를 나오게할 코드
// 4-4. app.js와서 미들웨어 연결
// 모듈은 현재 사용 안하므로 패스
// 5. -> 여기서는 routes/goods.js에 상품 목록 넣음
// 6. -> 여기서는 routes/goods.js에 세부 상품 목록을 넣음

// 몽구스 연결법
// 1. schema/index쪽에 연결 코드 넣음
// 2. app.js에서는 그걸 받아서 연결
// 3. 몽구스에 들어갈 상품 모델 작성은 schema/goods에 코드 넣음
// 4. 상품 생성 API코드는 받아오는거니 POST로
// 5. app.js에 app.use(express.json()); 필요
// 6. route/goods에 받아올 post 부분 작성 

// 몽구스 연결 이후 장바구니 구현
// 1. 장바구니 모델 작성해야 하므로 schema/cart에 코드를 넣음
// 2. 장바구니 목록 조회해야 하므로 routes/cart에 모델 작성한걸 받아 연결하는 걸 만듦 , app.use에 추가
// 3. 장바구니 상품 추가해야 하므로 추가이기 때문에 routes/goods에 post을 이용하여 만듦
// 4. 장바구니 상품 수량 수정해야 하므로 수정이기 때문에 routes/goods에 put을 이용하여 만듦
// 5. 장바구니 상품 제거해야 하므로 제거이기 때문에 rotues/goods에 delete를 이용하여 만듦 


// express를 받아오고 포트번호는 3000번
const express = require('express');
const app = express();
const port = 3000;

// 이건 schemas index에서 받아온걸 require로 가져와서 연결
const connect = require("./schemas/index");
connect();

// 몸에 json으로 표현 가능하도록 도와줌 (이거 없으면 body로 전달 받은 JSON 데이터를 바로 사용 불가)
app.use(express.json());

// 처음에 정상적으롣 돌아가는지 보려고 넣은 경로
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// 라우터 미들웨어 연결
const goodsRouter = require("./routes/goods");
const cartsRouter = require("./routes/carts");

app.use("/api", [goodsRouter, cartsRouter]);

// 포트 체크
app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});