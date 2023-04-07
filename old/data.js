const STATION_INFO = {
  0: {
    name: { ja: ``, en: "", kt: "", zh: "", ko: "", },
    nextname: { ja: ``, en: "", kt: "", zh: "", ko: "", },
    linename: { 
      ja: ``, 
      en: "", 
      kt: "", 
      zh: "", 
      ko: ``,
    },
    subname: { ja: "", kt: "", },
    transfer: [
      { ja: "", en: "", zh: "", ko: "", icon: 0 }
    ],
  },
  1: {
    name: { ja: `谷上`, en: "Tanigami", kt: "たにがみ", zh: "谷上", ko: "타니가미", },
    nextname: { ja: `<span style="letter-spacing: 50px; margin-left: 50px;">谷上</span>`, en: "Tanigami", kt: "たにがみ", zh: "谷上", ko: "타니가미", },
    linename: { 
      ja: `<span class="sta-1row sta-2char">谷　上</span>`, 
      en: "Tanigami", 
      kt: "たにがみ", 
      zh: "谷　　上", 
      ko: `<span style="letter-spacing: 7.5px; margin-bottom: -7.5px;">타니가미</span>`,
    },
    subname: { ja: "", kt: "", },
    transfer: [
      { ja: "", en: "", zh: "", ko: "", icon: 0 }
    ],
  },
  2: {
    name: { ja: `新神戸`, en: "Shin-Kobe", kt: "しんこうべ", zh: "新神户", ko: "신코베", },
    nextname: { ja: `<span style="letter-spacing: 50px; margin-left: 50px;">新神戸</span>`, en: "Shin-Kobe", kt: "しんこうべ", zh: "新神户", ko: "신코베", },
    linename: {
      ja: `<span class="sta-1row sta-3char">新神戸</span>`,
      en: "Shin-Kobe", 
      kt: "しんこうべ", 
      zh: "新　神　户", 
      ko: `<span style="letter-spacing: 15px; margin-bottom: -15px;">신코베</span>`,
    },
    subname: { ja: "神戸ファッション専門学校前", kt: "こうべふぁっしょんせんもんがっこうまえ", },
    transfer: [
      { ja: "", en: "", zh: "", ko: "", icon: 0 }
    ],
  },
  3: {
    name: { ja: `三宮`, en: "Sannomiya", kt: "さんのみや", zh: "三宫", ko: "산노미야", },
    nextname: { ja: `三宮`, en: "Sannomiya", kt: "さんのみや", zh: "三宫", ko: "산노미야", },
    linename: {
      ja: `<span class="sta-1row sta-2char">三　宮</span>`,
      en: "Sannomiya",
      kt: "さんのみや",
      zh: "三　　宫",
      ko: `<span style="letter-spacing: 7.5px; margin-bottom: -7.5px;">산노미야</span>`,
    },
    subname: { ja: "神戸サウナ＆スパ前", kt: "", },
    transfer: [
      { ja: "", en: "", zh: "", ko: "", icon: 0 }
    ],
  },
  4: {
    name: { ja: `県庁前`, en: "Kenchomae", kt: "けんちょうまえ", zh: "县厅前", ko: "켄초마에", },
    nextname: { ja: `県庁前`, en: "Kenchomae", kt: "けんちょうまえ", zh: "县厅前", ko: "켄초마에", },
    linename: {
      ja: `<span class="sta-1row sta-3char">県庁前</span>`, 
      en: "Kenchomae", 
      kt: "けんちょうまえ", 
      zh: "县　厅　前", 
      ko: `<span style="letter-spacing: 7.5px; margin-bottom: -7.5px;">켄초마에</span>`, 
    },
    subname: { ja: "", kt: "", },
    transfer: [
      { ja: "", en: "", zh: "", ko: "", icon: 0 }
    ],
  },
  5: {
    name: { ja: `大倉山`, en: "Okurayama", kt: "おおくらやま", zh: "大仓山", ko: "오쿠라야마", },
    nextname: { ja: `大倉山`, en: "Okurayama", kt: "おおくらやま", zh: "大仓山", ko: "오쿠라야마", },
    linename: { 
      ja: `<span class="sta-1row sta-3char">大倉山</span>`, 
      en: "Okurayama", 
      kt: "おおくらやま", 
      zh: "大　仓　山", 
      ko: `<span style="letter-spacing: 2.5px; margin-bottom: -2.5px;">오쿠라야마</span>`, 
    },
    subname: { ja: "", kt: "", },
    transfer: [
      { ja: "", en: "", zh: "", ko: "", icon: 0 }
    ],
  },
  6: {
    name: { ja: `湊川公園`, en: "Minatogawakoen", kt: "みなとがわこうえん", zh: "凑川公园", ko: "미나토가와코엔", },
    nextname: { ja: `湊川公園`, en: "Minatogawakoen", kt: "みなとがわこうえん", zh: "凑川公园", ko: "미나토가와코엔", },
    linename: {
      ja: `<span class="sta-1row">湊川公園</span>`, 
      en: `<span style="display: inline-block; transform: scaleY(0.75); transform-origin: 0px 0px;">Minatogawakoen</span>`, 
      kt: "みなとがわこうえん", 
      zh: `<span style="letter-spacing: 10px; margin-bottom: -10px;">凑川公园</span>`, 
      ko: `<span style="letter-spacing: 0.5px; margin-bottom: -0.5px;">미나토가와코엔</span>`, 
    },
    subname: { ja: "川崎病院前", kt: "かわさきびょういんまえ", },
    transfer: [
      { ja: "", en: "", zh: "", ko: "", icon: 0 }
    ],
  },
  7: {
    name: { ja: `上沢`, en: "Kamisawa", kt: "かみさわ", zh: "上泽", ko: "카미사와", },
    nextname: { ja: `上沢`, en: "Kamisawa", kt: "かみさわ", zh: "上泽", ko: "카미사와", },
    linename: {
      ja: `<span class="sta-1row sta-2char">上　沢</span>`,
      en: "Kamisawa",
      kt: "かみさわ", 
      zh: "上　　泽", 
      ko: `<span style="letter-spacing: 7.5px; margin-bottom: -7.5px;">카미사와</span>`, 
    },
    subname: { ja: "", kt: "", },
    transfer: [
      { ja: "", en: "", zh: "", ko: "", icon: 0 }
    ],
  },
  8: {
    name: { ja: `長田`, en: "Nagata", kt: "ながた", zh: "长田", ko: "나가타", },
    nextname: { ja: `長田`, en: "Nagata", kt: "ながた", zh: "长田", ko: "나가타", },
    linename: {
      ja: `<span class="sta-1row sta-2char">長　田</span>`,
      en: "Nagata",
      kt: "ながた", 
      zh: "长　　田", 
      ko: `<span style="letter-spacing: 15px; margin-bottom: -15px;">나가타</span>`, 
    },
    subname: { ja: "", kt: "", },
    transfer: [
      { ja: "", en: "", zh: "", ko: "", icon: 0 }
    ],
  },
  9: {
    name: { ja: `新長田`, en: "Shin-Nagata", kt: "しんながた", zh: "新长田", ko: "신나가타", },
    nextname: { ja: `新長田`, en: "Shin-Nagata", kt: "しんながた", zh: "新长田", ko: "신나가타", },
    linename: { 
      ja: `<span class="sta-1row sta-3char">新長田</span>`, 
      en: `<span style="display: inline-block; transform: scaleY(0.9); transform-origin: 0px 0px;">Shin-Nagata</span>`, 
      kt: "しんながた", 
      zh: "新　长　田", 
      ko: `<span style="letter-spacing: 7.5px; margin-bottom: -7.5px;">신나가타</span>`, 
    },
    subname: { ja: "", kt: "", },
    transfer: [
      { ja: "", en: "", zh: "", ko: "", icon: 0 }
    ],
  },
  10: {
    name: { ja: `板宿`, en: "Itayado", kt: "いたやど", zh: "板宿", ko: "이타야도", },
    nextname: { ja: `板宿`, en: "Itayado", kt: "いたやど", zh: "板宿", ko: "이타야도", },
    linename: { 
      ja: `<span class="sta-1row sta-2char">板　宿</span>`, 
      en: "Itayado",
      kt: "いたやど", 
      zh: "板　　宿", 
      ko: `<span style="letter-spacing: 7.5px; margin-bottom: -7.5px;">이타야도</span>`, 
    },
    subname: { ja: "", kt: "", },
    transfer: [
      { ja: "", en: "", zh: "", ko: "", icon: 0 }
    ],
  },
  11: {
    name: { ja: `妙法寺`, en: "Myohoji", kt: "みょうほうじ", zh: "妙法寺", ko: "묘호지", },
    nextname: { ja: `妙法寺`, en: "Myohoji", kt: "みょうほうじ", zh: "妙法寺", ko: "묘호지", },
    linename: { 
      ja: `<span class="sta-1row sta-3char">妙法寺</span>`, 
      en: "Myohoji",
      kt: "みょうほうじ", 
      zh: "妙　法　寺", 
      ko: `<span style="letter-spacing: 15px; margin-bottom: -15px;">묘호지</span>`, 
    },
    subname: { ja: "", kt: "", },
    transfer: [
      { ja: "", en: "", zh: "", ko: "", icon: 0 }
    ],
  },
  12: {
    name: { ja: `名谷`, en: "Myodani", kt: "みょうだに", zh: "名谷", ko: "묘다니", },
    nextname: { ja: `名谷`, en: "Myodani", kt: "みょうだに", zh: "名谷", ko: "묘다니", },
    linename: { 
      ja: `<span class="sta-1row sta-2char">名　谷</span>`, 
      en: "Myodani", 
      kt: "みょうだに", 
      zh: "名　　谷", 
      ko: `<span style="letter-spacing: 15px; margin-bottom: -15px;">묘다니</span>`, 
    },
    subname: { ja: "須磨パティオ前", kt: "すまぱてぃおまえ", },
    transfer: [
      { ja: "", en: "", zh: "", ko: "", icon: 0 }
    ],
  },
  13: {
    name: { ja: `総合運動公園`, en: "Sogoundokoen", kt: "そうごううんどうこうえん", zh: "綜合运动公园", ko: "소고우운도우코엔", },
    nextname: {
      ja: `<span style="letter-spacing: 4px">総合運動公園</span>`,
      en: `<span style="display: inline-block; transform: scaleX(0.85); transform-origin: left;">Sogoundokoen</span>`,
      kt: `<span style="display: inline-block; transform: scaleX(0.6) translateX(-10px); transform-origin: left; letter-spacing: -5px;">そうごううんどうこうえん</span>`,
      zh: `<span style="letter-spacing: 4px">綜合运动公园</span>`,
      ko: `<span style="display: inline-block; transform: scaleX(0.85); transform-origin: left;">소고우운도우코엔</span>`,
    },
    linename: { 
      ja: `<span>総合　　<br>運動公園</span>`, 
      en: `<span style="display: inline-block; transform: scaleY(0.8); transform-origin: 0px 0px;">Sogoundokoen</span>`, 
      kt: "そうごううんどうこうえん", 
      zh: `<span style="letter-spacing: 2.5px; margin-bottom: -2.5px;">綜合运动公园</span>`, 
      ko: `<span style="display: inline-block; transform: scaleY(0.9); transform-origin: 0px 0px;">소고우운도우코엔</span>`, },
    subname: { ja: "シャルレ本社前", kt: "しゃるれほんしゃまえ", },
    transfer: [
      { ja: "", en: "", zh: "", ko: "", icon: 0 }
    ],
  },
  14: {
    name: { ja: `学園都市`, en: "Gakuentoshi", kt: "がくえんとし", zh: "学园都市", ko: "가쿠엔토시", },
    nextname: {
      ja: `<span style="letter-spacing: 10px; margin-left: 30px;">学園都市</span>`, 
      en: "Gakuentoshi", 
      kt: "がくえんとし", 
      zh: `<span style="letter-spacing: 10px; margin-left: 30px;">学园都市</span>`, 
      ko: "가쿠엔토시",
    },
    linename: {
      ja: `<span class="sta-1row">学園都市</span>`, 
      en: "Gakuentoshi", 
      kt: "がくえんとし", 
      zh: `<span style="letter-spacing: 10px; margin-bottom: -10px;">学园都市</span>`, 
      ko: `<span style="letter-spacing: 2.5px; margin-bottom: -2.5px;">가쿠엔토시</span>`,
    },
    subname: { ja: "たがみ眼科医院前", kt: "たがみがんかいいんまえ", },
    transfer: [],
  },
  15: {
    name: { ja: `伊川谷`, en: "Ikawadani", kt: "いかわだに", zh: "伊川谷", ko: "이카와다니", },
    nextname: { 
      ja: `<span style="letter-spacing: 20px; margin-left: 60px;">伊川谷</span>`, 
      en: "Ikawadani", 
      kt: "いかわだに", 
      zh: `<span style="letter-spacing: 20px; margin-left: 60px;">伊川谷</span>`, 
      ko: "이카와다니", 
    },
    linename: {
      ja: `<span class="sta-1row sta-3char">伊川谷</span>`,
      en: "Ikawadani", 
      kt: "いかわだに", 
      zh: "伊　川　谷", 
      ko: `<span style="letter-spacing: 2.5px; margin-bottom: -2.5px;">이카와다니</span>`,
    },
    subname: { ja: "落合眼科医院前", kt: "おちあいがんかいいんまえ", },
    transfer: [],
  },
  16: {
    name: { ja: `西神南`, en: "Seishin-Minami", kt: "せいしんみなみ", zh: "西神南", ko: "세이신미나미", },
    nextname: { 
      ja: `<span style="letter-spacing: 20px; margin-left: 60px;">西神南</span>`, 
      en: "Seishin-Minami", 
      kt: "せいしんみなみ", 
      zh: `<span style="letter-spacing: 20px; margin-left: 60px;">西神南</span>`, 
      ko: "세이신미나미", 
    },
    linename: { 
      ja: `<span class="sta-1row sta-3char">西神南</span>`, 
      en: `<span style="display: inline-block; transform: scaleY(0.8); transform-origin: 0px -20px;">Seishin-Minami</span>`, 
      kt: "せいしんみなみ", 
      zh: "西　神　南", 
      ko: `<span style="display: inline-block; letter-spacing: 1.5px; transform: scaleY(0.95); transform-origin: 0px 40px;">세이신미나미</span>`, 
    },
    subname: { ja: "", kt: "", },
    transfer: [
      { ja: "", en: "", zh: "", ko: "", icon: 0 }
    ],
  },
  17: {
    name: { ja: `西神中央`, en: "Seishin-Chuo", kt: "せいしんちゅうおう", zh: "西神中央", ko: "세이신추오", },
    nextname: { ja: `西神中央`, en: "Seishin-Chuo", kt: "せいしんちゅうおう", zh: "西神中央", ko: "세이신추오", },
    linename: { 
      ja: `<span class="sta-1row">西神中央</span>`, 
      en: `<span style="display: inline-block; transform: scaleY(0.9);">Seishin-Chuo</span>`, 
      kt: "せいしんちゅうおう", 
      zh: `<span style="letter-spacing: 10px; margin-bottom: -10px;">西神中央</span>`, 
      ko: `<span style="letter-spacing: 2.5px; margin-bottom: -2.5px;">세이신추오</span>`,
    },
    subname: { ja: "久保みずきレディースクリニック前", kt: "くぼみずきれでぃーすくりにっく", },
    transfer: [
      { ja: "", en: "", zh: "", ko: "", icon: 0 }
    ],
  },
  101: {
    name: { ja: `大阪梅田`, en: "Osaka-Umeda", kt: "おおさかうめだ", zh: "", ko: "", },
    nextname: { ja: `大阪梅田`, en: "Osaka-Umeda", kt: "おおさかうめだ", zh: "", ko: "", },
    linename: { ja: `<span class="sta-1row">大阪梅田</span>`, en: ``, kt: "", zh: ``, ko: ``, },
    subname: { ja: "", kt: "", },
    transfer: [
      { ja: "", en: "", zh: "", ko: "", icon: 0 }
    ],
  },
  102: {
    name: { ja: `中津`, en: "Nakatsu", kt: "なかつ", zh: "", ko: "", },
    nextname: { ja: `中津`, en: "Nakatsu", kt: "なかつ", zh: "", ko: "", },
    linename: { ja: `<span class="sta-1row">中津</span>`, en: ``, kt: "", zh: ``, ko: ``, },
    subname: { ja: "", kt: "", },
    transfer: [
      { ja: "", en: "", zh: "", ko: "", icon: 0 }
    ],
  },
  103: {
    name: { ja: `十三`, en: "Juso", kt: "じゅうそう", zh: "", ko: "", },
    nextname: { ja: `十三`, en: "Juso", kt: "じゅうそう", zh: "", ko: "", },
    linename: { ja: `<span class="sta-1row">十三</span>`, en: ``, kt: "", zh: ``, ko: ``, },
    subname: { ja: "", kt: "", },
    transfer: [
      { ja: "", en: "", zh: "", ko: "", icon: 0 }
    ],
  },
  104: {},
  105: {},
  106: {},
  107: {},
  108: {},
  109: {},
  110: {},
  111: {},
  112: {},
  113: {},
  114: {},
  115: {},
  destInfo: {
    ja: {
      0: (id) => { return `${STATION_INFO[id].name.ja}ゆき`; },
      1: (id) => { return `<span style="font-size: 70%;">三宮方面</span> ${STATION_INFO[id].name.ja}ゆき`; },
      2: (id) => { return `<span style="font-size: 70%;">三宮・新神戸方面</span> ${STATION_INFO[id].name.ja}ゆき`; },
    },
    en: {
      0: (id) => { return `For ${STATION_INFO[id].name.en}`; },
      1: (id) => { return `For ${STATION_INFO[id].name.en} <span style="font-size: 70%;">via Sannomiya</span>`; },
      2: (id) => { return `For ${STATION_INFO[id].name.en} <span style="font-size: 70%;">via Sannomiya, Shin-Kobe</span>`; },
    },
    zh: {
      0: (id) => { return `开往 ${STATION_INFO[id].name.zh}`; },
      1: (id) => { return `<span style="font-size: 70%;">三宮方向</span> 开往 ${STATION_INFO[id].name.zh}`; },
      2: (id) => { return `<span style="font-size: 70%;">三宮・新神户方向</span> 开往 ${STATION_INFO[id].name.zh}`; },
    },
    ko: {
      0: (id) => { return `${STATION_INFO[id].name.ko} 행`; },
      1: (id) => { return `<span style="font-size: 70%;">산노미야・신코베 방면</span> ${STATION_INFO[id].name.ko} 행`; },
      2: (id) => { return `<span style="font-size: 70%;">산노미야 방면</span> ${STATION_INFO[id].name.ko} 행`; },
    },
  },
  getDestStringJa: function(destId, viaId) {
    // viaId = 0: 無し, 1: 三宮方面, 2: 三宮・新神戸方面
    switch (viaId)
    {
      case 0: return STATION_INFO.destInfo.ja[0](destId);
      case 1: return STATION_INFO.destInfo.ja[1](destId);
      case 2: return STATION_INFO.destInfo.ja[2](destId);
      default: throw new Error("不明な viaId");
    }
  },
  getDestStringEn: function(destId, viaId) {
    switch (viaId)
    {
      case 0: return STATION_INFO.destInfo.en[0](destId);
      case 1: return STATION_INFO.destInfo.en[1](destId);
      case 2: return STATION_INFO.destInfo.en[2](destId);
      default: throw new Error("不明な viaId");
    }
  },
  getDestStringZh: function(destId, viaId) {
    // viaId = 0: 無し, 1: 三宮方面, 2: 三宮・新神戸方面
    switch (viaId)
    {
      case 0: return STATION_INFO.destInfo.zh[0](destId);
      case 1: return STATION_INFO.destInfo.zh[1](destId);
      case 2: return STATION_INFO.destInfo.zh[2](destId);
      default: throw new Error("不明な viaId");
    }
  },
  getDestStringKo: function(destId, viaId) {
    // viaId = 0: 無し, 1: 三宮方面, 2: 三宮・新神戸方面
    switch (viaId)
    {
      case 0: return STATION_INFO.destInfo.ko[0](destId);
      case 1: return STATION_INFO.destInfo.ko[1](destId);
      case 2: return STATION_INFO.destInfo.ko[2](destId);
      default: throw new Error("不明な viaId");
    }
  },
  getStationId: function(id) {
    if (id == 0) {
      return ``;
    } else if (id >= 0 && id < 100) {
      return `S${("0" + id.toString()).slice(-2)}`;
    } else if (id >= 100 && id < 200) {
      // 阪急線
      return `HK${("0" + (id-100).toString()).slice(-2)}`
    }
  },
  staListInfo: {
    "01_17": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    "17_01": [17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    "17_12": [17, 16, 15, 14, 13, 12]
  }
};