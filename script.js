var rarities = [
  {
    type: 'SSR',
    ratio: 10,
  },
  {
    type: 'SR',
    ratio: 20,
  },
  {
    type: 'R',
    ratio: 70,
  },
];

var characters = [
  // SSR
  {
    name: 'アイザワ',
    rarity: 'SSR',
    ratio: 50,
  },
  {
    name: 'イチカワ',
    rarity: 'SSR',
    ratio: 10,
  },
  {
    name: 'フクヤマ',
    rarity: 'SSR',
    ratio: 40,
  },
// SR
  {
    name: 'ナガオカ',
    rarity: 'SR',
    ratio: 20,
  },
  {
    name: 'ハギワラ',
    rarity: 'SR',
    ratio: 50,
  },
  {
    name: 'モリカツ',
    rarity: 'SR',
    ratio: 30,
  },
// R
  {
    name: 'タナカ',
    rarity: 'R',
    ratio: 20,
  },
  {
    name: 'スズキ',
    rarity: 'R',
    ratio: 50,
  },
  {
    name: 'サトウ',
    rarity: 'R',
    ratio: 30,
  },
];

// btnのDOMの取得
var gachaBtn = document.getElementById('gacha-btn');
// 結果を表示するエリアのDOMの取得
var resultArea = document.getElementById('result-area');
// console.dir(resultArea);


function drawRarity() {
  var r = Math.random() * 100;
  var resultBydrawRarity;
  // if (0 <= r && r < 10) {
  //   console.log(rarities[0].type);
  // } else if (10 <= r && r < 30) {
  //   console.log(rarities[1].type);
  // } else { (30 <= r && r <= 100)
  //   console.log(rarities[2].type);
  // }
  var minRatio = 0;
  var maxRatio = 0;

  for (var i = 0; i < rarities.length; i++) {
    // 前回のmax値が今ループのmin値となる。
    minRatio = maxRatio;
    // max値に今ループのratioを追加する。
    // maxRatio = maxRatio + rarities[i].ratio;
    maxRatio += rarities[i].ratio;
    if (minRatio <= r && r < maxRatio) {
      resultBydrawRarity = rarities[i].type;
    }
  }
  drawCharacter(resultBydrawRarity);
}
// drawRarity();

function drawCharacter(rarity) {
  var r = Math.random() * 100;
  var resultBydrawCharacter;
  var minRatio = 0;
  var maxRatio = 0;
  for (var i = 0; i < characters.length; i++) {
    // console.log(characters[i]);
    // レアリティに応じてフィルタリングを行う。
    // drawRarityでの抽選結果で場合分けを行う。
    if (characters[i].rarity === rarity) {
      minRatio = maxRatio;
      maxRatio = maxRatio + characters[i].ratio;
      if (minRatio <= r && r < maxRatio) {
        resultBydrawCharacter = characters[i].name;
      }
    }
  }
  resultArea.innerHTML = 'レアリティは、' + rarity + '。 キャラクターは、' + resultBydrawCharacter;
  // console.log('レアリティは、' + rarity + '。 キャラクターは、' + resultBydrawCharacter);
}
// drawCharacter();

// DOM.addEventListener('イベント名', 実行処理);
gachaBtn.addEventListener('click', drawRarity);

var count = 0;
gachaBtn.addEventListener('click', function() {
  count++;
  console.log('ガチャ' + count + '回目');
});
