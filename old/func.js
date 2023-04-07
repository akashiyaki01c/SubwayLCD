let global = {};

(function() {
  // 行先を描画する関数
  function drawDest(start, end, pos)
  {
    let ja = "", en = "", zh = "", ko = "";

    if (end == 1 && pos > 3) {
      // 県庁前以西の谷上ゆき (三宮・新神戸方面)
      ja = STATION_INFO.getDestStringJa(end, 2);
      en = STATION_INFO.getDestStringEn(end, 2);
      zh = STATION_INFO.getDestStringZh(end, 2);
      ko = STATION_INFO.getDestStringKo(end, 2);
    } else if (end == 2 && pos > 3) {
      // 県庁前以西の新神戸ゆき (三宮方面)
      ja = STATION_INFO.getDestStringJa(end, 1);
      en = STATION_INFO.getDestStringEn(end, 1);
      zh = STATION_INFO.getDestStringZh(end, 1);
      ko = STATION_INFO.getDestStringKo(end, 1);
    } else if (end > 3 && pos < 3) {
      // 新神戸以東の三宮以西ゆき (三宮方面)
      ja = STATION_INFO.getDestStringJa(end, 1);
      en = STATION_INFO.getDestStringEn(end, 1);
      zh = STATION_INFO.getDestStringZh(end, 1);
      ko = STATION_INFO.getDestStringKo(end, 1);
    } else {
      ja = STATION_INFO.getDestStringJa(end, 0);
      en = STATION_INFO.getDestStringEn(end, 0);
      zh = STATION_INFO.getDestStringZh(end, 0);
      ko = STATION_INFO.getDestStringKo(end, 0);
    }
    document.getElementById("dest-ja").innerHTML = ja;
    document.getElementById("dest-kt").innerHTML = ja;
    document.getElementById("dest-en").innerHTML = en;
    document.getElementById("dest-zh").innerHTML = zh;
    document.getElementById("dest-ko").innerHTML = ko;
  }
  global.drawDest = drawDest;

  // 次駅を描画する関数
  function drawNextStation(id)
  {
    document.getElementById("next-sta-ja").innerHTML = STATION_INFO[id].nextname.ja;
    document.getElementById("next-sta-en").innerHTML = STATION_INFO[id].nextname.en;
    document.getElementById("next-sta-kt").innerHTML = STATION_INFO[id].nextname.kt;
    document.getElementById("next-sta-zh").innerHTML = STATION_INFO[id].nextname.zh;
    document.getElementById("next-sta-ko").innerHTML = STATION_INFO[id].nextname.ko;
  }
  global.drawNextStation = drawNextStation;

  // "次は" を描画する関数
  function drawNextString(id)
  {
    switch (id) {
      case 0: // (表示なし)
        document.getElementById("next-str-ja").innerHTML = "";
        document.getElementById("next-str-en").innerHTML = "";
        document.getElementById("next-str-kt").innerHTML = "";
        document.getElementById("next-str-zh").innerHTML = "";
        document.getElementById("next-str-ko").innerHTML = "";
        break;
      case 1: // 次は
        document.getElementById("next-str-ja").innerHTML = "つぎは";
        document.getElementById("next-str-en").innerHTML = "Next";
        document.getElementById("next-str-kt").innerHTML = "つぎは";
        document.getElementById("next-str-zh").innerHTML = "下一站";
        document.getElementById("next-str-ko").innerHTML = "다음은";
        break;
      case 2: // まもなく
        document.getElementById("next-str-ja").innerHTML = "まもなく";
        document.getElementById("next-str-en").innerHTML = "Next";
        document.getElementById("next-str-kt").innerHTML = "まもなく";
        document.getElementById("next-str-zh").innerHTML = "";
        document.getElementById("next-str-ko").innerHTML = "";
        break;
      case 3: // 次は終点
        document.getElementById("next-str-ja").innerHTML = "つぎは終点";
        document.getElementById("next-str-en").innerHTML = "Next Last Stop";
        document.getElementById("next-str-kt").innerHTML = "つぎは終点";
        document.getElementById("next-str-zh").innerHTML = "下一站";
        document.getElementById("next-str-ko").innerHTML = "다음은";
        break;
      case 4: // まもなく終点
        document.getElementById("next-str-ja").innerHTML = `<span style="display: inline-block; transform: scaleX(0.8);">まもなく終点</span>`;
        document.getElementById("next-str-en").innerHTML = `<span style="display: inline-block; transform: scaleX(0.75);">Next Last Stop</span>`;
        document.getElementById("next-str-kt").innerHTML = "まもなく終点";
        document.getElementById("next-str-zh").innerHTML = "";
        document.getElementById("next-str-ko").innerHTML = "";
        break;
    }
  }
  global.drawNextString = drawNextString;

  // 副駅名を描画する関数
  function drawSubStationName(id)
  {
    document.getElementById("subname-ja").innerHTML = STATION_INFO[id].subname.ja;
    document.getElementById("subname-kt").innerHTML = STATION_INFO[id].subname.kt;
  }
  global.drawSubStationName = drawSubStationName;

  // 駅番号を描画する関数
  function drawStationNumber(id)
  {
    document.getElementById("next-sta-no").innerHTML = STATION_INFO.getStationId(id);
  }
  global.drawStationNumber = drawStationNumber;
  
  // 下の駅を描画する関数
  function drawLineStation(no, id)
  {
    document.getElementById(`station-${no}-ja`).innerHTML = STATION_INFO[id].linename.ja;
    document.getElementById(`station-${no}-en`).innerHTML = STATION_INFO[id].linename.en;
    document.getElementById(`station-${no}-zh`).innerHTML = STATION_INFO[id].linename.zh;
    document.getElementById(`station-${no}-ko`).innerHTML = STATION_INFO[id].linename.ko;
    document.getElementById(`station-${no}-no`).innerHTML = STATION_INFO.getStationId(id);
  }
  global.drawLineStation = drawLineStation;

  // 線を黒色にする関数
  function drawBlackLine(id, pos)
  { 
    // id= 左から何番目の駅か
    // pos= 0: 駅間左側, 1: 駅左側, 2: 駅右側, 3: 駅間右側
    document.getElementById(`line-${id}-${pos}`).classList.remove("hokushin", "line-none");
    document.getElementById(`line-${id}-${pos}`).classList.add("passed");
  }
  global.drawBlackLine = drawBlackLine;

  // 線を通常にする関数
  function drawNormalLine(id, pos)
  { 
    // id= 左から何番目の駅か
    // pos= 0: 駅間左側, 1: 駅左側, 2: 駅右側, 3: 駅間右側
    document.getElementById(`line-${id}-${pos}`).classList.remove("passed", "hokushin", "line-none");
  }
  global.drawNormalLine = drawNormalLine;

  // 駅を北神にする関数
  function drawHokushinLine(id, pos)
  { 
    // id= 左から何番目の駅か
    // pos= 0: 駅間左側, 1: 駅左側, 2: 駅右側, 3: 駅間右側
    document.getElementById(`line-${id}-${pos}`).classList.remove("passed", "line-none");
    document.getElementById(`line-${id}-${pos}`).classList.add("hokushin");
  }
  global.drawHokushinLine = drawHokushinLine;

  // 線を消す関数
  function drawNoneLine(id, pos)
  {
    document.getElementById(`line-${id}-${pos}`).classList.remove("passed", "hokushin");
    document.getElementById(`line-${id}-${pos}`).classList.add("line-none");
  }
  global.drawNoneLine = drawNoneLine;

  // 矢印の位置を変更する関数
  function changeArrow(pos)
  { // 左から順番に0, 1, 2, ...
    for (let i = 0; i < 13; i++)
    {
      document.getElementById(`arrow-${i}`).classList.add("hidden");
    }
    document.getElementById(`arrow-${pos}`).classList.remove("hidden");
  }
  global.changeArrow = changeArrow;

  // 左からの路線図を描画する関数
  function drawLeft(staList, pos, isBetween)
  { // isBetween == true なら、一つ手前にする。

    function drawEastLineNormal() {
      // 東行の終端処理無しバージョン
      let leftsta = pos;
      // 矢印
      isBetween ? changeArrow(0) : changeArrow(1);
      // 背景
      if (pos == 0) {
        document.getElementById("line-1-0-0").classList.add("line-none");
        document.getElementById("line-1-0-1").classList.add("line-half0-left");
      } else {
        document.getElementById("line-1-0-0").classList.remove("line-none");
        document.getElementById("line-1-0-1").classList.remove("line-half0-left");
      }
      if (staList.length - pos != 6) {
        document.getElementById("line-6-3-0").classList.remove("line-half0-right");
      } else {
        document.getElementById("line-6-3-0").classList.add("line-half0-right");
      }
      if (pos != 0) {
        document.getElementById("line-1-0-0").classList.remove("hokushin");
        document.getElementById("line-1-0-0").classList.add("passed");
        if (!isBetween) {
          drawBlackLine(1, 1);
          document.getElementById("line-1-0-1").classList.remove("hokushin");
          document.getElementById("line-1-0-1").classList.add("passed");
        } else {
          document.getElementById("line-1-0-1").classList.remove("passed", "hokushin");
        }
      } else {
        document.getElementById("line-1-0-0").classList.remove("hokushin", "passed");
        document.getElementById("line-1-0-1").classList.remove("hokushin", "passed");
      }
      // 駅名
      for (let i = 0; i < 6; i++) {
        drawLineStation(i+1, staList[leftsta+i])
      }
    }

    function drawEastLineEnd() {
      // 東行の終端処理ありバージョン
      let leftsta = staList.length - 6;
      let remaining = staList.length - pos;
      // 矢印
      if (isBetween) {
        changeArrow((6-remaining) * 2);
      } else {
        changeArrow((6-remaining) * 2 + 1);
      }
      // 背景
      document.getElementById("line-1-0-0").classList.remove("line-none");
      document.getElementById("line-6-3-0").classList.add("line-half0-right");
      document.getElementById("line-1-0-0").classList.remove("hokushin");
      document.getElementById("line-1-0-0").classList.add("passed");
      drawBlackLine(1, 1);
      document.getElementById("line-1-0-1").classList.remove("hokushin");
      document.getElementById("line-1-0-1").classList.add("passed");
      for (let i = 1; i < 6-remaining+1; i++)
      for (let j = 0; j < 4; j++) {
        drawBlackLine(i, j);
      }
      if (!isBetween) {
        drawBlackLine(6-remaining+1, 0);
        drawBlackLine(6-remaining+1, 1);
      }

      // 駅名
      for (let i = 0; i < 6; i++) {
        drawLineStation(i+1, staList[leftsta+i])
      }
    }

    function drawEastLineShort() {
      // 6駅以下の描画
      let leftstart = 6 - staList.length;
      let remaining = staList.length - pos;
      // 矢印
      if (isBetween) {
        changeArrow((leftstart+pos) * 2);
      } else {
        changeArrow((leftstart+pos) * 2 + 1);
      }
      // 背景
      document.getElementById("line-1-0-0").classList.remove("line-none");
      document.getElementById("line-6-3-0").classList.add("line-half0-right");
      document.getElementById("line-1-0-0").classList.remove("hokushin");
      document.getElementById("line-1-0-0").classList.add("passed");
      drawBlackLine(1, 1);
      document.getElementById("line-1-0-1").classList.remove("hokushin");
      document.getElementById("line-1-0-1").classList.add("passed");
      if (staList.length != 6) {
        document.getElementById("line-1-1").classList.add("passed");
        document.getElementById("line-1-2").classList.add("passed");
        document.getElementById("line-1-3").classList.add("passed");
      }
      for (let i = 2; i < 6-remaining+1; i++)
      for (let j = 0; j < 4; j++) {
        drawBlackLine(i, j);
      }
      if (!isBetween) {
        drawBlackLine(6-remaining+1, 0);
        drawBlackLine(6-remaining+1, 1);
      }
      if (staList.length != 6) {
        document.getElementById("line-1-0-0").classList.add("line-none");
        document.getElementById("line-1-0-1").classList.add("line-none");
        document.getElementById("line-1-1").classList.add("line-none");
        document.getElementById("line-1-2").classList.add("line-none");
        document.getElementById("line-1-3").classList.add("line-none");
      }
      for (let i = 2; i < leftstart+1; i++)
      for (let j = 0; j < 4; j++) {
        drawNoneLine(i, j);
      }
      if (staList.length != 6) {
        document.getElementById(`line-${leftstart+1}-0`).classList.add("line-half0-left");
      } else {
        document.getElementById("line-1-0-0").classList.add("line-none");
        document.getElementById(`line-1-0-1`).classList.add("line-half0-left");
      }
      
      // 駅名
      let voidstalength = 6 - staList.length;
      for (let i = 0; i < voidstalength; i++)
        drawLineStation(i+1, 0);
      for (let i = 0; i < staList.length; i++) {
        drawLineStation(i+voidstalength+1, staList[i])
      }
    }

    for (let i = 1; i < 7; i++)
    for (let j = 0; j < 4; j++)
      drawNormalLine(i, j);
    for (let i = 1; i < 7; i++)
    for (let j = 0; j < 4; j++)
      document.getElementById(`line-${i}-${j}`).classList.remove("line-half0-left");
    if (staList.length < 7) {
      drawEastLineShort();
    } else if (staList.length-pos > 6) {
      drawEastLineNormal();
    } else {
      drawEastLineEnd();
    }
  }
  global.drawLeft = drawLeft;

  // 駅を描画する関数
  function redrawLeftStation(staList, pos, isBetween) {
    drawLeft(staList, pos, (isBetween!=0));
    drawDest(staList[0], staList[staList.length-1], staList[pos]);
    drawNextStation(staList[pos]);
    drawSubStationName(staList[pos]);
    drawStationNumber(staList[pos]);
    if (isBetween==0) {
      drawNextString(0);
    } else if (isBetween==1 && staList.length-1 == pos) {
      drawNextString(3); // 次は終点
    } else if (isBetween==1 && staList.length-1 != pos) {
      drawNextString(1); // 次は
    } else if (isBetween==2 && staList.length-1 == pos) {
      drawNextString(4); // まもなく終点
    } else if (isBetween==2 && staList.length-1 != pos) {
      drawNextString(2); // まもなく
    }
    
  }
  global.redrawLeftStation = redrawLeftStation;
})();

function _onclick() {
  let start = Number.parseInt(document.getElementById("form-start").value);
  let end = Number.parseInt(document.getElementById("form-end").value);
  let numarr = [];

  function getArray() {
    if (start > end) {
      for (let i = start; i >= end; i--) {
        numarr.push(i);
      }
    } else {
      for (let i = start; i <= end; i++) {
        numarr.push(i);
      }
    }
  }
  if (document.getElementById("form-stas").value != "") {
    let arr = document.getElementById("form-stas").value.split(",");
    console.log(arr);
    arr.forEach(elem => {
      console.log(elem)
      numarr.push(Number.parseInt(elem));
    }); 
  } else {
    getArray();
  }

  let pos = document.getElementById("form-pos").value;
  let type = document.getElementById("form-type").value;
  console.log(numarr, pos, type);
  global.redrawLeftStation(numarr, Number.parseInt(pos), Number.parseInt(type));
}

function _changeValue() {
  let pos = document.getElementById("form-pos").value;
  let type = document.getElementById("form-type").value;

  if (type === '1') { // 次は→まもなく
    document.getElementById("form-type").value = 2;
  } else if (type === '2') { // まもなく→停車中
    document.getElementById("form-type").value = 0;
  } else if (type === '0') { // 停車中→次駅次は
    document.getElementById("form-type").value = 1;
    document.getElementById("form-pos").value = Number.parseInt(pos) + 1;
  }
}