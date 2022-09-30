const mongoose = require("mongoose");

// 몽구스의 스키마를 새롭게 정의 그리고 내부에 있는것들이 각각의 schema를 의미
const goodsSchema = new mongoose.Schema({
  goodsId: {
    type: Number,     // 타입
    required: true,   // 무조건 필요한지
    unique: true      // 고유인지 (동일한 데이터x)
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  thumbnailUrl: {
    type: String
  },
  category: {
    type: String
  },
  price: {
    type: Number
  }
});

// 밖으로 내보내기
module.exports = mongoose.model("Goods", goodsSchema);