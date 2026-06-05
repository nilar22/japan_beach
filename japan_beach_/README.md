**🇯🇵 Japanese version is available below.**
**日本語版は下部にあります。**

# 🌊 Japan Beach Guide | 日本ビーチガイド

> Interactive web app to discover Japan's best beaches and nearby accommodations by using recommendations

![Status](https://img.shields.io/badge/status-active-brightgreen)
![Languages](https://img.shields.io/badge/languages-EN%2FJP-brightblue)

#What is This? 

**Japan Beach Guide** is an interactive web application that helps you find the perfect beach in Japan based on your preferences! 

Whether you're looking for:
-  Instagram-worthy scenic spots
-  Great swimming beaches
-  Romantic date locations  
-  Peaceful relaxation spots

Our AI chatbot will recommend the best beach for you, show it on a map, and help you find nearby hotels on Agoda!

#Key Features

 **Interactive Japan Map** - Click on 8 regions (Hokkaido, Tohoku, Kanto, Chubu, Kansai, Chugoku, Shikoku, Kyushu)

 **AI Chatbot Recommendations** - Answer just 2 questions about your mood and purpose, get personalized beach suggestions

 **Bilingual Support** - Switch between English and Japanese instantly

 **Dark/Light Mode** - Choose your preferred theme with one click

 **Direct Integrations**
- Google Maps for navigation
- Agoda for hotel searches
- Google Search for beach info

**Responsive Design** - Works perfectly on desktop, tablet, and mobile

###Tech Stack

Frontend:
- HTML5 - Semantic markup
- CSS3 - Modern styling with variables and animations
- Vanilla JavaScript 
- SVG - Interactive map rendering


###  Installation

No installation needed! Just open in your browser.

# 1. Clone the repository
git clone https://github.com/yourusername/japan-beach-guide.git

# 2. Navigate to the project
cd japan-beach-guide

# 3. Open in your browser
open index.html
# or
start index.html  # Windows



### How the Chatbot Works

javascript
// Simple preference-based recommendation system
// Step 1: User selects region
// Step 2: Chatbot asks "What mood?" 
//         → Quiet & scenic / Lively & easy / Staycation
// Step 3: Chatbot asks "What's your purpose?"
//         → Photos / Swimming / Date / Relaxing
// Step 4: AI recommends best beach based on scoring algorithm
```

**Example Chatbot Flow:**

Bot: "Please choose a region first."
User: Clicks "Kanto / 関東"

Bot: "What kind of beach mood do you prefer?"
User: "Lively & easy access" 

Bot: "What is your main purpose?"
User: "Take photos"

Bot: "My recommendation is: Enoshima Beach 
      Best for: date, food, sunset"


###  Project Structure

```
japan-beach-guide/
├── index.html          # Main HTML structure
├── style.css           # Styling & themes
├── script.js           # Core functionality
│   ├── Language system (JP/EN)
│   ├── Beach data (8 regions × 3 beaches)
│   ├── Recommendation algorithm
│   ├── Chat interface logic
│   └── Theme toggle
└── README.md           # This file



###  Data Overview

**24 Beaches Across 8 Regions:**

| Region | Cities | Beaches |
|--------|--------|---------|
|  Hokkaido | Sapporo, Otaru, Hakodate | 3 beaches |
|  Tohoku | Sendai, Aomori, Miyako | 3 beaches |
|  Kanto | Tokyo, Yokohama, Chiba, Kamakura | 3 beaches |
|  Chubu | Nagoya, Shizuoka, Izu, Fukui | 3 beaches |
|  Kansai | Osaka, Kyoto, Kobe, Wakayama | 3 beaches |
|  Chugoku | Hiroshima, Okayama, Hagi | 3 beaches |
|  Shikoku | Matsuyama, Takamatsu, Kochi | 3 beaches |
|  Kyushu | Fukuoka, Nagasaki, Miyazaki | 3 beaches |



###  External Links (Built-in)

The app integrates with:
-  Google Maps API - Navigate to beaches
-  Google Search - Get detailed information
-  Agoda - Search and book hotels
-  Direct web search - Find beach reviews



###  Future Improvements

- [ ] Add more beaches (30+ total)
- [ ] User reviews and ratings
- [ ] Save favorite beaches
- [ ] Weather API integration
- [ ] Best visiting season info
- [ ] Parking and facilities info
- [ ] Share recommendations on social media
- [ ] Progressive Web App (PWA) support
- [ ] Offline mode
- [ ] Real-time hotel availability


----------------------------------------------------------------------------------
---

# 🇯🇵 日本語版

## このアプリについて

Japan Beach Guide は、ユーザーの好みに合わせて日本各地のビーチをおすすめするWebアプリです。

静かに過ごしたい、写真を撮りたい、海水浴を楽しみたい、デートスポットを探したいなど、目的に応じて最適なビーチを提案します。

AIチャットボットが簡単な質問を行い、その回答をもとにおすすめのビーチを表示します。また、Google MapsやAgodaと連携し、周辺情報や宿泊施設も簡単に確認できます。

## 主な機能

- インタラクティブな日本地図
- AIチャットボットによるビーチ推薦
- 日本語・英語の切り替え機能
- ダークモード・ライトモード対応
- Google Maps連携
- Agoda連携
- スマートフォン対応レスポンシブデザイン

## 使用技術

### フロントエンド

- HTML5
- CSS3
- JavaScript
- SVG

## チャットボットの利用方法

1. 地域を選択する
2. 好みの雰囲気を選択する
3. 利用目的を選択する
4. おすすめのビーチを確認する

## 今後の改善予定

- ビーチ情報の追加
- 天気情報の表示
- お気に入り保存機能
- ユーザーレビュー機能
- PWA対応