# Iris Soccer

A football dashboard card for [Home Assistant](https://www.home-assistant.io/): upcoming matches with **statistical win/draw/loss predictions**, latest results, league standings and team form. No API key, no account, no extra integration.

> **Free edition.** Looking for more? **Iris Soccer Pro** adds probable odds, live matches worldwide, cups, "My club", squads, players, transfers, news, TV guide and 7 languages — available to supporters on [Ko-fi](https://ko-fi.com/) (link coming soon).

## Features

- Country → Competition selector (Portugal, England, Spain, Italy, Germany, France, Netherlands, Belgium, Turkey, Scotland, Brazil, USA, European cups)
- **Overview**: next match with prediction, latest result, top of the table
- **Matches**: upcoming / latest results, filter by team, one card per match (2–3 per row on large screens)
- **Standings** with form (last games)
- Statistical prediction bar (Poisson model from league goals, team attack/defence strength and recent form)
- Responsive: phone, tablet and desktop
- Languages: Portuguese and English

## Installation

### HACS (custom repository)

1. HACS → ⋮ → **Custom repositories**
2. Repository: `https://github.com/Hollywoodchaos/iris-soccer` — Type: **Dashboard**
3. Install **Iris Soccer** and reload the browser (hard refresh).

### Manual

1. Copy `iris-soccer.js` to `/config/www/iris-soccer/`
2. Settings → Dashboards → ⋮ → **Resources** → add `/local/iris-soccer/iris-soccer.js` as *JavaScript module*

## Usage

```yaml
type: custom:iris-soccer
country: pt          # pt, en, es, it, de, fr, nl, be, tr, sc, br, us, eu
league: por.1        # see the list below
lang: pt             # pt | en
title: IRIS SOCCER
form_games: 5        # games shown as team form
refresh_minutes: 10
```

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

## Data sources and disclaimer

Data comes from ESPN's public, **unofficial** site API, requested directly from your browser. It may change or stop working at any time. This project is **not affiliated with, endorsed by or sponsored by ESPN**, any league or any club. Team names and logos belong to their respective owners and are shown only as provided by the API.

Predictions are purely statistical, for entertainment, and come with **no guarantee**. This is not betting advice.

## About the logo

The Iris logo (dark sphere with blue filaments) and the "Iris Soccer" name were created for this project with the help of AI tools. The MIT license covers the code; the name and logo are the project's branding, so please don't reuse them for your own products or to imply endorsement.

## License

MIT © Hollywoodchaos
