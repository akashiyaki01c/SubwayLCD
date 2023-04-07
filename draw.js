const draw = {
    // 多言語の文字列を適用させる関数
    // 更新しないものには null を代入する
    drawMultiString: (id, ja, en, hg, zh, ko) => {
        if (ja != null)
            document.getElementById(`${id}-ja`).innerHTML = ja;
        if (en != null)
            document.getElementById(`${id}-en`).innerHTML = en;
        if (hg != null)
            document.getElementById(`${id}-hg`).innerHTML = hg;
        if (zh != null)
            document.getElementById(`${id}-zh`).innerHTML = zh;
        if (ko != null)
            document.getElementById(`${id}-ko`).innerHTML = ko;
    },
    // 次駅の描画を行う関数
    drawNextStation: (id) => {
        function getStationNumberHtml(staNumber, type) {
            if (staNumber == "")
                return "";
            switch (type) {
                case "SeishinYamate":
                    return `<span id="next-sta-no" class="nextnumber-inner subway"><span class="en">${staNumber}</span></span>`;
                case "Hokushin":
                    return `<span id="next-sta-no" class="nextnumber-inner hokushin"><span class="en">${staNumber}</span></span>`;
                case "HankyuKobe":
                    return `<span id="next-sta-no" class="nextnumber-inner hk-kobe"><span class="stano-hk-hk en">HK</span><span class="stano-hk-no en">${staNumber.substring(2)}</span></span>`;
                case "HankyuTakarazuka":
                    return `<span id="next-sta-no" class="nextnumber-inner hk-takarazuka"><span class="stano-hk-hk en">HK</span><span class="stano-hk-no en">${staNumber.substring(2)}</span></span>`;
                case "HankyuKyoto":
                    return `<span id="next-sta-no" class="nextnumber-inner hk-kyoto"><span class="stano-hk-hk en">HK</span><span class="stano-hk-no en">${staNumber.substring(2)}</span></span>`;
                case "Nose":
                    return `<span id="next-sta-no" class="nextnumber-inner nose"><span class="stano-hk-hk en">NS</span><span class="stano-hk-no en">${staNumber.substring(2)}</span></span>`;
                case "Sakaisuji":
                    return `<span id="next-sta-no" class="nextnumber-inner sakaisuji"><span class="en">${staNumber}</span></span>`;
                default:
                    return staNumber;
            }
        }
        function changeStationSubNameColor(type) {
            let classes = ["subway", "hokushin", "hk-kobe", "hk-takarazuka", "hk-kyoto", "nose", "sakaisuji"];
            document.getElementById("subname-outer").classList.remove(...classes);
            switch (type) {
                case "SeishinYamate": return document.getElementById("subname-outer").classList.add("subway");
                case "Hokushin": return document.getElementById("subname-outer").classList.add("hokushin");
                case "HankyuKobe": return document.getElementById("subname-outer").classList.add("hk-kobe");
                case "HankyuTakarazuka": return document.getElementById("subname-outer").classList.add("hk-takarazuka");
                case "HankyuKyoto": return document.getElementById("subname-outer").classList.add("hk-kyoto");
                case "Nose": return document.getElementById("subname-outer").classList.add("nose");
                case "Sakaisuji": return document.getElementById("subname-outer").classList.add("sakaisuji");
            }
        }
        function getStringCss(str) {
            switch (str.length) {
                case 1: return str;
                case 2: return `<span style="display: inline-block; letter-spacing: 1em; text-indent: 1em;">${str}</span>`;
                case 3: return str;
                case 4: return str;
                case 5: return str;
                default: return `<span style="display: inline-block; position: absolute; transform: translateX(-50%) scaleX(calc(6 / ${str.length}));">${str}</span>`;
            }
        }
        function getStringCssEn(str) {
            document.getElementById("next-sta-name-en-tmp").innerHTML = str;
            let width = document.getElementById("next-sta-name-en-tmp").clientWidth;
            if (width < 370)
                return str;
            return `<span style="display: inline-block; position: absolute; transform: translateX(-50%) scaleX(calc(370 / ${width}));">${str}</span>`;
        }

        let sta = data.stationInfo[id];
        draw.drawMultiString("next-sta-name", 
            getStringCss(sta.JaName), 
            getStringCssEn(sta.EnName), 
            getStringCss(sta.HiraganaName), 
            getStringCss(sta.ZhName),
            getStringCss(sta.KoName)
        );
        document.getElementById("nextnumber-outer").innerHTML = getStationNumberHtml(sta.StaNo, sta.StaNoType);
        draw.drawMultiString("subname-inner", sta.JaSubName, null, sta.HiraganaSubName, null, null);
        changeStationSubNameColor(sta.StaNoType);
    },
    // つぎは, まもなく などの描画を行う関数
    drawNextString: (id) =>  {
        draw.drawMultiString(
            "next-str", 
            data.nextStringInfo[id].ja,
            data.nextStringInfo[id].en,
            data.nextStringInfo[id].ja,
            data.nextStringInfo[id].zh,
            data.nextStringInfo[id].ko
        );
    },
    // 種別の描画を行う関数
    // 表示しない場合はNullを代入
    drawType: (id) => {
        function getStringCss(str) {
            switch (str.length) {
                case 1: return str;
                case 2: return `<span style="display: inline-block; letter-spacing: 1em; text-indent: 1em;">${str}</span>`;
                case 3: return str;
                case 4: return str;
                default: return `<span style="display: inline-block; position: absolute; transform: translateX(-50%) scaleX(calc(4 / ${str.length}));">${str}</span>`;
            }
        }
        function getStringCssEn(str) {
            document.getElementById("type-en-tmp").innerHTML = str;
            let width = document.getElementById("type-en-tmp").clientWidth;
            if (width < 100)
                return str;
            return `<span style="display: inline-block; position: absolute; transform: translateX(-50%) scaleX(calc(80 / ${width}));">${str}</span>`;
        }

        if (id == null) {
            document.getElementById("type-outer").classList.add("non-type");
            return;
        }
        document.getElementById("type-outer").classList.remove("non-type");
        draw.drawMultiString(
            "type",
            getStringCss(data.typeInfo[id].JaName),
            getStringCssEn(data.typeInfo[id].EnShortName),
            getStringCss(data.typeInfo[id].JaName),
            getStringCss(data.typeInfo[id].ZhName),
            getStringCss(data.typeInfo[id].KoName)
        );
        let classes = ["type-local", "type-semi-exp", "type-express", "type-ltd-exp"];
        document.getElementById("type-outer").classList.remove(...classes);
        switch (data.typeInfo[id].Color) {
            case "Local": return document.getElementById("type-outer").classList.add("type-local");
            case "SemiExp": return document.getElementById("type-outer").classList.add("type-semi-exp");
            case "Express": return document.getElementById("type-outer").classList.add("type-express");
            case "LtdExp": return document.getElementById("type-outer").classList.add("type-ltd-exp");
        }
    },
    // 行き先を描画する関数
    drawDest: (destId, viaId) => {
        if (destId == 0) {
            draw.drawMultiString("dest", "", "", "", "", "");
            return;
        }
        if (viaId == 0) {
            draw.drawMultiString(
                "dest",
                data.destStringInfo.dest.ja(data.stationInfo[destId].JaName),
                data.destStringInfo.dest.en(data.stationInfo[destId].EnName),
                data.destStringInfo.dest.ja(data.stationInfo[destId].JaName),
                data.destStringInfo.dest.zh(data.stationInfo[destId].ZhName),
                data.destStringInfo.dest.ko(data.stationInfo[destId].KoName),
            );
        } else {
            draw.drawMultiString(
                "dest",
                data.destStringInfo.via.ja(data.stationInfo[destId].JaName, data.viaInfo[viaId].Ja),
                data.destStringInfo.via.en(data.stationInfo[destId].EnName, data.viaInfo[viaId].En),
                data.destStringInfo.via.ja(data.stationInfo[destId].JaName, data.viaInfo[viaId].Ja),
                data.destStringInfo.via.zh(data.stationInfo[destId].ZhName, data.viaInfo[viaId].Zh),
                data.destStringInfo.via.ko(data.stationInfo[destId].KoName, data.viaInfo[viaId].Ko),
            );
        }
    },
    // 6駅画面での駅を描画する関数
    draw6StaDisplayStation: (index, id) => {
        function toDisplayString(name) {
            if (name.length === 1) {
                return `　${name}　`;
            } else if (name.length === 2) {
                return `${name.charAt(0)}　${name.charAt(1)}`;
            }
            return name;
        }
        function getTransformCss(jaHeight, otherHeight) {
            if (otherHeight < jaHeight) {
                return ``;
            }
            return `transform: scaleY(${jaHeight / otherHeight});`;
        }
        function getHeight(id, name) {
            document.getElementById(id).innerHTML = name;
            return document.getElementById(id).clientHeight;
        }

        let jaName = data.stationInfo[id].Sta6DisplayJa == ""
            ? toDisplayString(data.stationInfo[id].JaName) 
            : data.stationInfo[id].Sta6DisplayJa;
        let jaHeight = getHeight(`sta-6-name-tmp`, jaName);
        let enHeight = getHeight(`sta-6-name-en-tmp`, data.stationInfo[id].EnName);
        let zhHeight = getHeight(`sta-6-name-zh-tmp`, data.stationInfo[id].ZhName);
        let koHeight = getHeight(`sta-6-name-ko-tmp`, data.stationInfo[id].KoName);

        document.getElementById(`sta-6-name-center-${index}`).innerHTML = jaName;
        document.getElementById(`sta-6-name-right-${index}-en`).innerHTML
            = `<span class="sta-6-name-inner" style="height: ${Math.max(enHeight, jaHeight)}px; ${getTransformCss(jaHeight, enHeight)}">${data.stationInfo[id].EnName}</span>`;
        document.getElementById(`sta-6-name-right-${index}-zh`).innerHTML
            = `<span class="sta-6-name-inner" style="height: ${Math.max(zhHeight, jaHeight)}px; ${getTransformCss(jaHeight, zhHeight)}">${data.stationInfo[id].ZhName}</span>`;
        document.getElementById(`sta-6-name-right-${index}-ko`).innerHTML
            = `<span class="sta-6-name-inner" style="height: ${Math.max(koHeight, jaHeight)}px; ${getTransformCss(jaHeight, koHeight)}">${data.stationInfo[id].KoName}</span>`;
        document.getElementById(`sta-6-no-center-${index}`).innerHTML = data.stationInfo[id].StaNo; 
    },
    draw6StaDisplayStations: (id) => {
        for(let i = 0; i < 6; i++)
            draw.draw6StaDisplayStation(i, id[i]);
    },
    drawLine: (index, position, id) => {
        let positionName = data.positionInfo[position];
        let className = data.lineInfo[id].cssClass;
        let classes = ["line-none", "line-passed", "line-subway", "line-hokushin", "line-hk-kobe", "line-hk-takarazuka", "line-hk-kyoto", "line-nose", "line-sakaisuji"];
        let idName = `sta-6-line-${positionName}-${index}`;
        document.getElementById(idName).classList.remove(...classes);
        document.getElementById(idName).classList.add(className);
    },
    drawLines: (index, ids, edgeType) => {
        let classes = ["line-edge", "line-arrow"];
        for (let i = 1; i < 5; i++) {
            let elem = document.getElementById(`sta-6-line-${data.positionInfo[i]}-${index}`);
            draw.drawLine(index, i, ids[i-1]);
            elem.classList.remove(...classes);
        }
        switch (edgeType) {
            case "0": return;
            case "1": // 左端丸
                document.getElementById(`sta-6-line-left-${index}`).classList.add("line-edge");
                return;
            case "2": // 右端丸
                document.getElementById(`sta-6-line-right-${index}`).classList.add("line-edge");
                return;
            case "3": // 左端矢印
                document.getElementById(`sta-6-line-left-${index}`).classList.add("line-arrow");
                return;
            case "4": // 右端矢印
                document.getElementById(`sta-6-line-right-${index}`).classList.add("line-arrow");
                return;
        }
    },
    drawStopStation: (stopStas) => {
        for (let i = 0; i < 6; i++) {
            let stop = stopStas[i] === "0" ? "sta-stop" : "sta-pass";

            document.getElementById(`sta-6-name-center-${i}`).classList.remove("sta-stop", "sta-pass");
            document.getElementById(`sta-6-name-right-${i}`).classList.remove("sta-stop", "sta-pass");
            document.getElementById(`sta-6-line-center-sta-${i}`).classList.remove("sta-stop", "sta-pass");

            document.getElementById(`sta-6-name-center-${i}`).classList.add(stop);
            document.getElementById(`sta-6-name-right-${i}`).classList.add(stop);
            document.getElementById(`sta-6-line-center-sta-${i}`).classList.add(stop);
        }
    },
    drawArrow: (position) => {
        let pos = Number.parseInt(position, 10);
        document.getElementById("sta-6-arrow").setAttribute("style", `transform: translateX(${pos * 50}px);`);
    },
    draw6StaLcd: (typeId, destId, viaId, nextId, statusId, next6Value, cars, lineColors, stop, arrow, times) => {
        draw.drawType(typeId);
        draw.drawDest(destId, viaId);
        draw.drawNextStation(nextId);
        draw.drawNextString(statusId);
        draw.draw6StaDisplayStations(next6Value);
        document.getElementById("cars-number-inner").innerHTML = cars;
        for (let i = 0; i < 6; i++) {
            draw.drawLines(i, lineColors[i].slice(0, 4), lineColors[i][4]);
        }
        draw.drawStopStation(stop);
        draw.drawArrow(arrow);
        draw.drawTimes(times);
    },
    drawTimes: (times) => {
        for (let i = 0; i < 6; i++) {
            let time = times[i];
            document.getElementById(`sta-6-line-center-sta-${i}`).innerHTML = `<span style="display: inline-block; transform: translateY(-1px);">${time}</span>`;
        }
    }
};