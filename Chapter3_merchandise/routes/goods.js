// express에 연결하기 위한 작업 + router
const express = require('express');
const router = express.Router();

// 페이지 연결 확인
router.get('/', (req, res) => {
	res.send('this is home page');
});

router.get('/about', (req, res) => {
	res.send('this is about page');
});

// 스키마에 있는 굿즈를 가져와서 변수인 Goods로 선언
const Goods = require("../schemas/goods");

// goods라는 접속을 했을때 http메서드 post를 호출시 동작하라는 의미
// req.body쪽에 데이터가 존재하면 그 데이터를 오른쪽 객체에 할당해줘라라는 의미
router.post("/goods", async (req, res) => {
	const { goodsId, name, thumbnailUrl, category, price } = req.body;

  // Goods를 가지고 Id가 있는지 찾아보고 있든 없는 무조건 변수 할당
  const goods = await Goods.find({ goodsId });

  // 데이터가 존재한다면 == 길이가 존재한다면 즉, 동일한 데이터가 존재한다면 다음을 반환
  if (goods.length) {
    return res.status(400).json({ success: false, errorMessage: "이미 있는 데이터입니다." });
  }

  // 존재하지 않는다면 데이터를 생성해서 createdGoods에 할당
  const createdGoods = await Goods.create({ goodsId, name, thumbnailUrl, category, price });

  // res.json으로 goods가 생성되었다고 반환
  res.json({ goods: createdGoods });
});

// 상품을 받아오기 위한 것
router.get("/goods", (req, res) => {
  const goods = [
    {
      goodsId: 4,
      name: "상품 4",
      thumbnailUrl:
        "https://cdn.pixabay.com/photo/2016/09/07/02/11/frogs-1650657_1280.jpg",
      category: "drink",
      price: 0.1,
    },
    {
      goodsId: 3,
      name: "상품 3",
      thumbnailUrl:
        "https://cdn.pixabay.com/photo/2016/09/07/02/12/frogs-1650658_1280.jpg",
      category: "drink",
      price: 2.2,
    },
    {
      goodsId: 2,
      name: "상품 2",
      thumbnailUrl:
        "https://cdn.pixabay.com/photo/2014/08/26/19/19/wine-428316_1280.jpg",
      category: "drink",
      price: 0.11,
    },
    {
      goodsId: 1,
      name: "상품 1",
      thumbnailUrl:
        "https://cdn.pixabay.com/photo/2016/09/07/19/54/wines-1652455_1280.jpg",
      category: "drink",
      price: 6.2,
    },
  ];

  res.json({ goods: goods });
})

// 세부 상품을 받아오기 위한 것
router.get("/goods/:goodsId", (req, res) => {
  const goods = [
    {
      goodsId: 4,
      name: "상품 4",
      thumbnailUrl:
        "https://cdn.pixabay.com/photo/2016/09/07/02/11/frogs-1650657_1280.jpg",
      category: "drink",
      price: 0.1,
    },
    {
      goodsId: 3,
      name: "상품 3",
      thumbnailUrl:
        "https://cdn.pixabay.com/photo/2016/09/07/02/12/frogs-1650658_1280.jpg",
      category: "drink",
      price: 2.2,
    },
    {
      goodsId: 2,
      name: "상품 2",
      thumbnailUrl:
        "https://cdn.pixabay.com/photo/2014/08/26/19/19/wine-428316_1280.jpg",
      category: "drink",
      price: 0.11,
    },
    {
      goodsId: 1,
      name: "상품 1",
      thumbnailUrl:
        "https://cdn.pixabay.com/photo/2016/09/07/19/54/wines-1652455_1280.jpg",
      category: "drink",
      price: 6.2,
    },
  ];

  // 둘다 같은 방법
  // const goodsId = req.params.goodsId;
  const { goodsId } = req.params;

  //상품 상세 조회 API
  const detail = goods.filter((item) => {return item.goodsId === Number(goodsId)})

  res.json({"detail" : detail})
})

// 장바구니에 상품 추가 API 작성
const Cart = require("../schemas/cart");
router.post("/goods/:goodsId/cart", async (req, res) => {
  const { goodsId } = req.params;
  const { quantity } = req.body;

  const existsCarts = await Cart.find({ goodsId: Number(goodsId) });
  if (existsCarts.length) {
    return res.json({ success: false, errorMessage: "이미 장바구니에 존재하는 상품입니다." });
  }

  await Cart.create({ goodsId: Number(goodsId), quantity: quantity });

  res.json({ result: "success" });
});

// 장바구니의 상품 수량 수정 API 작성
router.put("/goods/:goodsId/cart", async (req, res) => {
  const { goodsId } = req.params;
  const { quantity } = req.body;

  // 장바구니의 상품 수량 수정 API에서 수량을 1미만으로 보내면 요청 거부 기능
  if (quantity < 1) {
    res.status(400).json({ errorMessage: "수량은 1 이상이어야 합니다." });
    return;
  }

  const existsCarts = await Cart.find({ goodsId: Number(goodsId) });
  if (existsCarts.length) {
    await Cart.updateOne({ goodsId: Number(goodsId) }, { $set: { quantity } });
  }

  res.json({ success: true });
})

// 장바구니의 상품 제거 API 작성
router.delete("/goods/:goodsId/cart", async (req, res) => {
  const { goodsId } = req.params;

  const existsCarts = await Cart.find({ goodsId });
  if (existsCarts.length > 0) {
    await Cart.deleteOne({ goodsId });
  }

  res.json({ result: "success" });
});

// 라우터 값은 바깥으로 꺼내기 위한 코드
module.exports = router;