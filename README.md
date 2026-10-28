<p align="center">
  <img src="https://raw.githubusercontent.com/Hollywoodchaos/iris-soccer/main/docs/banner.png" alt="Iris Soccer – Football dashboard for Home Assistant" width="100%">
</p>

<p align="center">
  <a href="https://github.com/Hollywoodchaos/iris-soccer/releases"><img src="https://img.shields.io/github/v/release/Hollywoodchaos/iris-soccer?color=e3b23c&label=version" alt="version"></a>
  <a href="https://hacs.xyz/"><img src="https://img.shields.io/badge/HACS-Custom-41BDF5.svg" alt="HACS"></a>
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="MIT">
  <img src="https://img.shields.io/badge/API%20key-not%20needed-success.svg" alt="no API key">
</p>

<h3 align="center">⚽ Matches · 📊 Standings · 🔮 Statistical predictions — right inside your Home Assistant dashboard</h3>

<p align="center">No API key. No account. No extra integration. Just add the card.</p>

---

## 📸 Screenshots

<p align="center">
  <img src="https://raw.githubusercontent.com/Hollywoodchaos/iris-soccer/main/docs/desktop.png" alt="Desktop view" width="100%">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/Hollywoodchaos/iris-soccer/main/docs/mobile.png" alt="Mobile view" width="300">
</p>

## ✨ What you get (Free)

| | |
|---|---|
| 🌍 **Country → Competition** | Portugal, England, Spain, Italy, Germany, France, Netherlands, Belgium, Turkey, Scotland, Brazil, USA and the European cups |
| 🏠 **Overview** | Next match with prediction, latest result and the top of the table |
| 📅 **Matches** | Upcoming or latest results, filter by team, one card per match (2–3 per row on large screens) |
| 🏆 **Standings** | Full table with the form of each team (last games) |
| 🔮 **Predictions** | Win / draw / loss bar and predicted score, from a Poisson model using league goals, attack/defence strength and recent form |
| 📱 **Responsive** | Looks great on phone, tablet and desktop |
| 🗣️ **Languages** | Portuguese and English |

## 🚀 Installation

### HACS (recommended)

1. HACS → ⋮ → **Custom repositories**
2. Repository: `https://github.com/Hollywoodchaos/iris-soccer` — Type: **Dashboard**
3. Install **Iris Soccer** and hard-refresh your browser (Ctrl+F5).

### Manual

1. Copy `iris-soccer.js` to `/config/www/iris-soccer/`
2. Settings → Dashboards → ⋮ → **Resources** → add `/local/iris-soccer/iris-soccer.js` as *JavaScript module*

## ⚙️ Usage

Create a dashboard view with the **Panel (1 card)** layout and add:

```yaml
type: custom:iris-soccer
country: pt          # pt, en, es, it, de, fr, nl, be, tr, sc, br, us, eu
league: por.1        # see the table below
lang: pt             # pt | en
title: IRIS SOCCER
form_games: 5        # games shown as team form
refresh_minutes: 10
```

<details>
<summary>Available leagues</summary>

| Country | Leagues |
|---|---|
| pt | `por.1` |
| en | `eng.1`, `eng.2` |
| es | `esp.1`, `esp.2` |
| it | `ita.1`, `ita.2` |
| de | `ger.1`, `ger.2` |
| fr | `fra.1`, `fra.2` |
| nl | `ned.1` |
| be | `bel.1` |
| tr | `tur.1` |
| sc | `sco.1` |
| br | `bra.1` |
| us | `usa.1` |
| eu | `uefa.champions`, `uefa.europa`, `uefa.europa.conf` |

</details>

---

## 💎 Want more? Meet **Iris Soccer Pro**

The Free edition is a complete, ready-to-use card. **Iris Soccer Pro** turns it into a full football hub — and your support through Ko-fi keeps both editions alive.

<p align="center">
  <img src="https://raw.githubusercontent.com/Hollywoodchaos/iris-soccer/main/docs/pro-desktop.png" alt="Iris Soccer Pro" width="100%">
</p>

| | Free | Pro |
|---|:---:|:---:|
| Overview, Matches, Standings, team form | ✅ | ✅ |
| Statistical predictions (win/draw/loss + score) | ✅ | ✅ |
| Country → Competition selector | ✅ | ✅ |
| Responsive layout (phone / tablet / desktop) | ✅ | ✅ |
| **Probable odds** (1 X 2 and Over/Under 2.5 goals) | – | ✅ |
| **Live matches** worldwide with goal alerts | – | ✅ |
| **Cups** (country/region → competition) | – | ✅ |
| **My club**: profile, stadium, coach, position, fixtures | – | ✅ |
| **Teams**: squads by position, photos and season stats | – | ✅ |
| **Players**: top scorers, assists, yellow and red cards | – | ✅ |
| **Transfers** market | – | ✅ |
| **News** in your language | – | ✅ |
| **TV guide**: channels for each match | – | ✅ |
| **Match summary**: timeline, lineups, stats | – | ✅ |
| **7 languages** (PT, EN, ES, FR, DE, RU, ZH) | – | ✅ |
| Extra leagues (Liga 2, League One…) | – | ✅ |

<table align="center">
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/Hollywoodchaos/iris-soccer/main/docs/pro-mobile.png" alt="Matches with probable odds" width="260"><br><sub><b>Matches + probable odds</b></sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/Hollywoodchaos/iris-soccer/main/docs/pro-mobile2.png" alt="Live matches worldwide" width="260"><br><sub><b>Live matches worldwide</b></sub></td>
  </tr>
  <tr>
    <td colspan="2" align="center"><img src="https://raw.githubusercontent.com/Hollywoodchaos/iris-soccer/main/docs/pro-mobile3.png" alt="Live matches in landscape" width="520"><br><sub><b>Landscape view, filter live matches by country</b></sub></td>
  </tr>
</table>

<p align="center">
  <a href="https://ko-fi.com/s/8d8f68edca"><img src="https://img.shields.io/badge/Get%20Iris%20Soccer%20Pro-on%20Ko--fi-FF5E5B?logo=ko-fi&logoColor=white&style=for-the-badge" alt="Get Pro on Ko-fi"></a>
</p>

> **Launch offer:** Iris Soccer Pro is available at a special launch price on Ko-fi for a limited time. One payment, personal-use license, updates included.

---

## ℹ️ Data sources and disclaimer

Data comes from ESPN's public, **unofficial** site API, requested directly from your browser. It may change or stop working at any time. This project is **not affiliated with, endorsed by or sponsored by ESPN**, any league or any club. Team names and logos belong to their respective owners and are shown only as provided by the API.

Predictions are purely statistical, for entertainment, and come with **no guarantee**. This is not betting advice.

## 🎨 About the logo

The Iris logo (dark sphere with blue filaments) and the "Iris Soccer" name were created for this project with the help of AI tools. The MIT license covers the code; the name and logo are the project's branding, so please don't reuse them for your own products or to imply endorsement.

## 📄 License

MIT © Hollywoodchaos
