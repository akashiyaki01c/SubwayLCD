"use strict";

const data = {
    stationInfo: {}, // ファイル分割
    typeInfo: {}, // ファイル分割
    nextStringInfo: {
        "0": { ja: "", en: "", zh: "", ko: "" },
        "1": { ja: "つぎは", en: "Next", zh: "下一站", ko: "다음은" },
        "2": { ja: "まもなく", en: "Next", zh: "即将到达", ko: "잠시후" },
        "3": { 
            ja: `<span style="display: inline-block; transform: scaleX(calc(4 / 5)); transform-origin: left;">つぎは終点</span>`, 
            en: `<span style="display: inline-block; transform: scaleX(calc(4 / 7)); transform-origin: left;">Next Last Stop</span>`, 
            zh: `<span style="display: inline-block; transform: scaleX(calc(4 / 6.5)); transform-origin: left;">下一站 终点站</span>`, 
            ko: "" 
        },
        "4": { 
            ja: `<span style="display: inline-block; transform: scaleX(calc(4 / 6)); transform-origin: left;">まもなく終点</span>`, 
            en: `<span style="display: inline-block; transform: scaleX(calc(4 / 7)); transform-origin: left;">Next Last Stop</span>`, 
            zh: `<span style="display: inline-block; transform: scaleX(calc(4 / 7.5)); transform-origin: left;">即将到达 终点站</span>`, 
            ko: "" 
        },
    },
    carsInfo: {
        ja: "号車", en: "Car No.", zh: "号车厢", ko: "호차"
    },
    viaInfo: {
        "0": { ja: "", en: "", zh: "", ko: "" },
        "1": { ja: "三宮", en: "Sannomiya", zh: "三宫", ko: "산노미야" }
    },
    destStringInfo: {
        dest: {
            ja: sta => `${sta}ゆき`,
            en: sta => `For ${sta}`,
            zh: sta => `开往 ${sta}`,
            ko: sta => `${sta} 행`
        },
        via: {
            ja: (sta, via) => `<span style="font-size: 0.75em;">${via}方面 </span>${sta}ゆき`,
            en: (sta, via) => `For ${sta}<span style="font-size: 0.75em;"> via ${via}</span>`,
            zh: (sta, via) => `<span style="font-size: 0.75em;">${via}方向 </span>开往 ${sta}`,
            ko: (sta, via) => `<span style="font-size: 0.75em;">${via}방면 </span>${sta} 행`,
        }
    },
    lineInfo: {
        "00": { cssClass: "line-none" },
        "01": { cssClass: "line-passed" },
        "02": { cssClass: "line-subway" },
        "03": { cssClass: "line-hokushin" },
        "04": { cssClass: "line-hk-kobe" },
        "05": { cssClass: "line-hk-takarazuka" },
        "06": { cssClass: "line-hk-kyoto" },
        "07": { cssClass: "line-nose" },
        "08": { cssClass: "line-sakaisuji" },
    },
    positionInfo: {
        "0": "leftedge",
        "1": "left",
        "2": "center-left",
        "3": "center-right",
        "4": "right",
        "5": "rightedge"
    }
};

async function init() {
    // idName から、日本語やその他言語のSpanを生成する関数
    function makeJaEnHrZhKo(idName) {
        let elem = document.getElementById(idName);
        elem.innerHTML = `
            <span id="${idName}-ja" class="ja"></span>
            <span id="${idName}-en" class="en"></span>
            <span id="${idName}-hg" class="hg"></span>
            <span id="${idName}-zh" class="zh"></span>
            <span id="${idName}-ko" class="ko"></span>
        `;
    }

    function initCarsInfo() {
        document.getElementById("cars-number-info-ja").innerHTML = data.carsInfo.ja;
        document.getElementById("cars-number-info-en").innerHTML = data.carsInfo.en;
        document.getElementById("cars-number-info-hg").innerHTML = data.carsInfo.ja;
        document.getElementById("cars-number-info-zh").innerHTML = data.carsInfo.zh;
        document.getElementById("cars-number-info-ko").innerHTML = data.carsInfo.ko;
    }

    function init6StaDisplay() {
        function initRow(name) {
            let html = "";
            html += `<tr class="sta-6-${name}">`;
            html += `<td id="sta-6-${name}-leftedge-0" class="sta-6-${name}-leftedge sta-6-leftedge sta-6-${name}"></td>`;
            for (let i = 0; i < 6; i++) {
                html += `<td id="sta-6-${name}-left-${i}" class="sta-6-${name}-left sta-6-left sta-6-${name}"></td>`;
                html += `<td id="sta-6-${name}-center-${i}" class="sta-6-${name}-center sta-6-center sta-6-${name}"></td>`;
                html += `<td id="sta-6-${name}-right-${i}" class="sta-6-${name}-right sta-6-right sta-6-${name}"></td>`;
            }
            html += `<td id="sta-6-${name}-rightedge-5" class="sta-6-${name}-rightedge sta-6-rightedge sta-6-${name}"></td>`;
            html += `</tr>`;
            return html;
        }
        function initCenterLine() {
            for (let i = 0; i < 6; i++) {
                document.getElementById(`sta-6-line-center-${i}`).innerHTML = `
                    <div id="sta-6-line-center-left-${i}" class="sta-6-line-center-left"></div>
                    <div id="sta-6-line-center-right-${i}" class="sta-6-line-center-right"></div>
                    <div id="sta-6-line-center-sta-${i}" class="sta-6-line-center-sta en"></div>`;
            }
        }

        let html = "";
        // 駅名
        html += initRow("name");
        // 駅番号
        html += initRow("no");
        // ライン
        html += initRow("line");
        // 乗り換え
        html += initRow("transfar");

        document.getElementById("sta-6-main").innerHTML = html;

        for (let i = 0; i < 6; i++)
            makeJaEnHrZhKo(`sta-6-name-right-${i}`);
        initCenterLine();
    }

    makeJaEnHrZhKo("type");
    makeJaEnHrZhKo("dest");
    makeJaEnHrZhKo("cars-number-info");
    makeJaEnHrZhKo("next-str");
    makeJaEnHrZhKo("next-sta-name");
    makeJaEnHrZhKo("subname-inner");
    initCarsInfo();
    init6StaDisplay();

    
    data.stationInfo = await (await fetch("./station.json")).json();
    data.typeInfo = await (await fetch("./type.json")).json();
}