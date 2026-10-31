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

https://github.com/user-attachments/assets/90bd3465-ffd5-4ea8-b2c0-fda1dcb12af1

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
| eu | `uefa.champions`,
