let currentLanguage = "jp";

const langText = {
  jp: {
    mainEyebrow: "インタラクティブな日本地図",
mainTitle: "ビーチへの旅行や近隣の宿泊施設を探す",
regions: {
  Hokkaido: "北海道",
  Tohoku: "東北",
  Kanto: "関東",
  Chubu: "中部",
  Kansai: "関西",
  Chugoku: "中国",
  Shikoku: "四国",
  Kyushu: "九州"},

    subtitle: "日本のビーチ旅行ガイド",
    hint: "地図上の地域をクリックし、ビーチカードを選択すると、より詳細な地図とAgodaでの宿泊施設検索が表示されます。",
    eyebrow: "インタラクティブな日本地図",
    mainTitle: "ビーチへの旅行や近隣の宿泊施設を探す",
    mapTitle1: "日本の地域",
    mapTitle2: "Japan Regions",
    reset: "リセット",
    chatTitle: "🌤 AIチャットボット",
    welcome: "まず地域を選んでください。",
    beachListTitle: "おすすめのビーチと宿泊施設の詳細情報",
    bestFor: "おすすめ",
    map: "地図",
    info: "情報",
    agoda: "宿泊検索",
    agodaExact: "Agoda詳細検索",
    moodQuestion: "どんな雰囲気が好きですか？",
    quiet: "静かで景色が良い",
    lively: "賑やかで行きやすい",
    stay: "泊まり旅行",
    purposeQuestion: "一番の目的は何ですか？",
    photo: "写真を撮りたい",
    swim: "泳ぎたい",
    date: "デート・カフェ",
    relax: "ゆっくりしたい",
    recommendation: "おすすめは:",
    type: "タイプ",
    openMap: "地図を開く",
    agodaNearby: "近くの宿泊施設",
    restart: "リスタート",
    selectRegion: "地域を選択してください",
    selectRegionDesc: "おすすめのビーチやステイケーションのリンクがここに表示されます",
    langButton: "EN"
  },

  en: {
    mainEyebrow: "Interactive Japan Map",
    mainTitle: "Find beach trips and nearby stays",
    regions: {
  Hokkaido: "Hokkaido",
  Tohoku: "Tohoku",
  Kanto: "Kanto",
  Chubu: "Chubu",
  Kansai: "Kansai",
  Chugoku: "Chugoku",
  Shikoku: "Shikoku",
  Kyushu: "Kyushu"
  },
    subtitle: "Japan Beach Travel Guide",
    hint: "Click a region on the map, then choose a beach card to see the detailed map and Agoda stay search.",
    eyebrow: "Interactive Japan Map",
    mainTitle: "Find beach trips and nearby stays",
    mapTitle1: "Japan Regions",
    mapTitle2: "日本の地域",
    reset: "Reset",
    chatTitle: "🌤 AI Chatbot",
    welcome: "Please choose a region first.",
    beachListTitle: "Recommended beaches and stay links",
    bestFor: "Best for",
    map: "Map",
    info: "Info",
    agoda: "Agoda stays",
    agodaExact: "Agoda exact search",
    moodQuestion: "What kind of beach mood do you prefer?",
    quiet: "Quiet & scenic",
    lively: "Lively & easy access",
    stay: "Staycation",
    purposeQuestion: "What is your main purpose?",
    photo: "Take photos",
    swim: "Swimming",
    date: "Date or cafe",
    relax: "Relaxing trip",
    recommendation: "My recommendation is:",
    type: "Type",
    openMap: "Open Map",
    agodaNearby: "Agoda stays nearby",
    restart: "Restart",
    selectRegion: "Select a region",
    selectRegionDesc: "Recommended beaches and staycation links will appear here.",
    langButton: "JP"
  }
};
const data = {
  Hokkaido: {
    jp: "北海道",
    cities: ["Sapporo", "Otaru", "Hakodate"],
    beaches: [
      { en: "Otaru Dream Beach", jp: "おたるドリームビーチ", area: "Otaru, Hokkaido", type: "Lively", bestFor: "friends, summer events" },
      { en: "Ishikari Bay New Port Beach", jp: "石狩湾新港海水浴場", area: "Ishikari, Hokkaido", type: "Wide coast", bestFor: "sunset, open beach" },
      { en: "Zenibako Beach", jp: "銭函海岸", area: "Otaru, Hokkaido", type: "Easy access", bestFor: "short trip from Sapporo" }
    ]
  },
  Tohoku: {
    jp: "東北",
    cities: ["Sendai", "Aomori", "Miyako"],
    beaches: [
      { en: "Jodogahama Beach", jp: "浄土ヶ浜", area: "Miyako, Iwate", type: "Scenic", bestFor: "photos, calm sea" },
      { en: "Natsudomari Peninsula", jp: "夏泊半島", area: "Hiranai, Aomori", type: "Nature", bestFor: "quiet drive trip" },
      { en: "Wakamiya Beach", jp: "若宮海水浴場", area: "Yamagata Prefecture", type: "Local", bestFor: "relaxed beach day" }
    ]
  },
  Kanto: {
    jp: "関東",
    cities: ["Tokyo", "Yokohama", "Chiba", "Kamakura"],
    beaches: [
      { en: "Kujukuri Beach", jp: "九十九里浜", area: "Kujukuri, Chiba", type: "Long coast", bestFor: "surfing, road trip" },
      { en: "Enoshima Beach", jp: "江の島海岸", area: "Fujisawa, Kanagawa", type: "Lively", bestFor: "date, food, sunset" },
      { en: "Zushi Beach", jp: "逗子海岸", area: "Zushi, Kanagawa", type: "Easy access", bestFor: "Tokyo day trip" }
    ]
  },
  Chubu: {
    jp: "中部",
    cities: ["Nagoya", "Shizuoka", "Izu", "Fukui"],
    beaches: [
      { en: "Tatadohama Beach", jp: "多々戸浜", area: "Shimoda, Shizuoka", type: "Beautiful water", bestFor: "swimming, photos" },
      { en: "Suishohama Beach", jp: "水晶浜", area: "Mihama, Fukui", type: "Clear water", bestFor: "summer trip" },
      { en: "Utsumi Beach", jp: "内海海水浴場", area: "Minamichita, Aichi", type: "Resort town", bestFor: "Nagoya weekend" }
    ]
  },
  Kansai: {
    jp: "関西",
    cities: ["Osaka", "Kyoto", "Kobe", "Wakayama"],
    beaches: [
      { en: "Shirarahama Beach", jp: "白良浜", area: "Shirahama, Wakayama", type: "Resort", bestFor: "staycation, onsen" },
      { en: "Suma Beach", jp: "須磨海水浴場", area: "Kobe, Hyogo", type: "City beach", bestFor: "easy train access" },
      { en: "Kotohikihama Beach", jp: "琴引浜", area: "Kyotango, Kyoto", type: "Natural", bestFor: "quiet scenery" }
    ]
  },
  Chugoku: {
    jp: "中国",
    cities: ["Hiroshima", "Okayama", "Hagi"],
    beaches: [
      { en: "Kikugahama Beach", jp: "菊ヶ浜", area: "Hagi, Yamaguchi", type: "Historic town", bestFor: "castle town walk" },
      { en: "Iwami Seaside Park", jp: "石見海浜公園", area: "Hamada, Shimane", type: "Park beach", bestFor: "camping, family" },
      { en: "Shibukawa Beach", jp: "渋川海岸", area: "Tamano, Okayama", type: "Family", bestFor: "Seto Inland Sea view" }
    ]
  },
  Shikoku: {
    jp: "四国",
    cities: ["Matsuyama", "Takamatsu", "Kochi"],
    beaches: [
      { en: "Katsurahama Beach", jp: "桂浜", area: "Kochi, Kochi", type: "Famous view", bestFor: "sightseeing, photos" },
      { en: "Chichibugahama Beach", jp: "父母ヶ浜", area: "Mitoyo, Kagawa", type: "Mirror sunset", bestFor: "Instagram photos" },
      { en: "Odo Coast", jp: "大堂海岸", area: "Otsuki, Kochi", type: "Wild coast", bestFor: "nature lovers" }
    ]
  },
  Kyushu: {
    jp: "九州",
    cities: ["Fukuoka", "Nagasaki", "Miyazaki"],
    beaches: [
      { en: "Momochi Seaside Park", jp: "シーサイドももち", area: "Fukuoka, Fukuoka", type: "City beach", bestFor: "cafes, city stay" },
      { en: "Itoshima Beaches", jp: "糸島の海岸", area: "Itoshima, Fukuoka", type: "Stylish coast", bestFor: "cafes, driving" },
      { en: "Aoshima Beach", jp: "青島ビーチ", area: "Miyazaki, Miyazaki", type: "Tropical", bestFor: "surfing, resort" }
    ]
  }
};

let step = 0;
let userPref = {};

const regionDisplay = document.getElementById("regionDisplay");
const chatBody = document.getElementById("chatBody");
let chatOptions = document.getElementById("chatOptions");

function makeLinks(beach) {
  const exactQuery = `${beach.en} ${beach.area} Japan`;
  const hotelQuery = `hotels near ${beach.en} ${beach.area} Japan`;
  return {
    search: `https://www.google.com/search?q=${encodeURIComponent(exactQuery)}`,
    maps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(exactQuery)}`,
    agoda: `https://www.agoda.com/search?textToSearch=${encodeURIComponent(hotelQuery)}`,
    agodaGoogle: `https://www.google.com/search?q=${encodeURIComponent(`site:agoda.com ${hotelQuery}`)}`
  };
}

function updateRegion(regionName) {
  const region = data[regionName];
  const t = langText[currentLanguage];

  document.querySelectorAll(".region").forEach(r => r.classList.remove("active"));
  const active = document.getElementById(regionName);
  if (active) active.classList.add("active");

  let html = `
    <div class="region-header-card">
      <p class="eyebrow">${currentLanguage === "jp" ? region.jp : regionName}</p>
      <h2>${regionName}</h2>
      <p>${region.cities.join(" ・ ")}</p>
    </div>
    <div class="beach-list-title">${t.beachListTitle}</div>
  `;

  region.beaches.forEach(beach => {
    const links = makeLinks(beach);
    html += `
      <article class="beach-card">
        <div class="beach-topline">
          <h3>${beach.en}</h3>
          <span>${beach.type}</span>
        </div>
        <p class="jp-name">${beach.jp}</p>
        <p class="area">📍 ${beach.area}</p>
        <p class="best">${t.bestFor}: ${beach.bestFor}</p>
        <div class="card-actions">
          <a href="${links.maps}" target="_blank" rel="noopener">${t.map}</a>
          <a href="${links.search}" target="_blank" rel="noopener">${t.info}</a>
          <a href="${links.agoda}" target="_blank" rel="noopener">${t.agoda}</a>
          <a href="${links.agodaGoogle}" target="_blank" rel="noopener">${t.agodaExact}</a>
        </div>
      </article>
    `;
  });

  regionDisplay.innerHTML = html;
}

function addChatMsg(text, type) {
  chatOptions = document.getElementById("chatOptions");

  const div = document.createElement("div");
  div.className = type === "bot" ? "bot-msg" : "user-msg";
  div.innerHTML = text;
  chatBody.insertBefore(div, chatOptions);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function makeOption(label, value) {
  chatOptions = document.getElementById("chatOptions");

  const btn = document.createElement("button");
  btn.className = "opt-btn";
  btn.innerText = label;
  btn.onclick = () => handleInput(label, value);
  chatOptions.appendChild(btn);
}

function initChat() {
  chatOptions = document.getElementById("chatOptions");
  chatOptions.innerHTML = "";

  Object.keys(data).forEach(region => {
    makeOption(`${region} / ${data[region].jp}`, region);
  });
}

function handleInput(text, val) {
  const t = langText[currentLanguage];

  addChatMsg(text, "user");
  chatOptions.innerHTML = "";

  if (step === 0) {
    userPref.region = val;
    updateRegion(val);

    setTimeout(() => {
      addChatMsg(t.moodQuestion, "bot");
      makeOption(t.quiet, "quiet");
      makeOption(t.lively, "lively");
      makeOption(t.stay, "stay");
    }, 350);

  } else if (step === 1) {
    userPref.mood = val;

    setTimeout(() => {
      addChatMsg(t.purposeQuestion, "bot");
      makeOption(t.photo, "photo");
      makeOption(t.swim, "swim");
      makeOption(t.date, "date");
      makeOption(t.relax, "relax");
    }, 350);

  } else if (step === 2) {
    userPref.purpose = val;

    setTimeout(() => {
      const beach = recommendBeach(userPref.region, userPref.mood, userPref.purpose);
      const links = makeLinks(beach);

      addChatMsg(`
        ${t.recommendation}<br>
        <strong>${beach.en}</strong><br>
        ${beach.jp}<br>
        📍 ${beach.area}<br>
        🌊 ${t.type}: ${beach.type}<br>
        ✨ ${t.bestFor}: ${beach.bestFor}<br><br>
        <a href="${links.maps}" target="_blank">${t.openMap}</a> ・ 
        <a href="${links.agoda}" target="_blank">${t.agodaNearby}</a>
      `, "bot");

      makeOption(t.restart, "restart");
    }, 450);

  } else {
    resetChat();
  }

  step++;
}

function recommendBeach(regionName, mood, purpose) {
  const beaches = data[regionName].beaches;

  let scores = beaches.map(beach => {
    let score = 0;
    const type = beach.type.toLowerCase();
    const best = beach.bestFor.toLowerCase();

    if (mood === "quiet") {
      if (/scenic|natural|nature|wild|clear|wide|quiet/.test(type)) score += 3;
      if (/photos|calm|quiet|nature/.test(best)) score += 2;
    }

    if (mood === "lively") {
      if (/lively|city|easy/.test(type)) score += 3;
      if (/food|date|easy|cafes|city/.test(best)) score += 2;
    }

    if (mood === "stay") {
      if (/resort|stylish|tropical/.test(type)) score += 3;
      if (/stay|onsen|cafes|resort|weekend/.test(best)) score += 2;
    }

    if (purpose === "photo") {
      if (/photo|photos|sunset|scenery|view|instagram/.test(best)) score += 4;
      if (/scenic|clear|natural|mirror/.test(type)) score += 2;
    }

    if (purpose === "swim") {
      if (/swimming|summer|clear water|beautiful water/.test(best)) score += 4;
      if (/clear|beautiful water|resort/.test(type)) score += 2;
    }

    if (purpose === "date") {
      if (/date|food|cafes|sunset|city/.test(best)) score += 4;
      if (/lively|city|stylish|resort/.test(type)) score += 2;
    }

    if (purpose === "relax") {
      if (/calm|quiet|relaxed|onsen|nature/.test(best)) score += 4;
      if (/scenic|natural|nature|wide|resort/.test(type)) score += 2;
    }

    return { beach, score };
  });

  scores.sort((a, b) => b.score - a.score);
  return scores[0].beach;
}

function resetChat() {
  step = 0;
  userPref = {};

  const t = langText[currentLanguage];

  chatBody.innerHTML = `
    <div class="bot-msg">${t.welcome}</div>
    <div class="chat-options" id="chatOptions"></div>
  `;

  chatOptions = document.getElementById("chatOptions");
  initChat();
}

function resetView() {
  const t = langText[currentLanguage];

  document.querySelectorAll(".region").forEach(r => r.classList.remove("active"));

  regionDisplay.innerHTML = `
    <div class="empty-state">
      <span>🗾</span>
      <h3 class="beach-list-header" id="recommendHeader">${t.selectRegion}</h3>
      <p class="beach-list-title" id="recommendTitle">${t.selectRegionDesc}</p>
    </div>
  `;
}
function toggleTheme() {
  document.body.classList.toggle("light-mode");

  const btn = document.querySelector(".theme-btn");

  if (document.body.classList.contains("light-mode")) {
    btn.innerHTML = "🌙 Night Mode";
  } else {
    btn.innerHTML = "☀️ Day Mode";
  }
}

function applyLanguage() {
  const t = langText[currentLanguage];

  const titleText = document.getElementById("titleText");
  if (titleText) titleText.innerText = "Japan Beach Guide";

  const subTitleText = document.getElementById("subTitleText");
  if (subTitleText) subTitleText.innerText = t.subtitle;

  const mainEyebrow = document.getElementById("mainEyebrow");
  if (mainEyebrow) mainEyebrow.innerText = t.mainEyebrow;

  const mainTitle = document.getElementById("mainTitle");
  if (mainTitle) mainTitle.innerText = t.mainTitle;

  const mapTitleJP = document.getElementById("mapTitleJP");
  if (mapTitleJP) mapTitleJP.innerText = t.mapTitle1;

  const mapTitleEN = document.getElementById("mapTitleEN");
  if (mapTitleEN) mapTitleEN.innerText = t.mapTitle2;

  const resetBtn = document.getElementById("resetBtn");
  if (resetBtn) resetBtn.innerText = t.reset;

  const hint = document.getElementById("hint");
  if (hint) hint.innerText = t.hint;

  const chatTitle = document.querySelector(".chat-header span");
  if (chatTitle) chatTitle.innerText = t.chatTitle;

  const langBtn = document.querySelector(".lang-btn");
  if (langBtn) langBtn.innerText = t.langButton;

  const labels = {
    labelHokkaido: "Hokkaido",
    labelTohoku: "Tohoku",
    labelKanto: "Kanto",
    labelChubu: "Chubu",
    labelKansai: "Kansai",
    labelChugoku: "Chugoku",
    labelShikoku: "Shikoku",
    labelKyushu: "Kyushu"
  };

  Object.keys(labels).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = t.regions[labels[id]];
  });

  resetView();
  resetChat();
}
function toggleLanguage() {
  if (currentLanguage === "jp") {
    currentLanguage = "en";
  } else {
    currentLanguage = "jp";
  }

  applyLanguage();
}


applyLanguage();
