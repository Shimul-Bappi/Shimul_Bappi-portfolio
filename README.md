# Shimul Bappi — Research Portfolio

A fully responsive personal research portfolio for **Md. Shimul Ahmed Bappi**, Undergraduate Researcher in the Department of Statistics and Data Science (SDS), Jahangirnagar University, Bangladesh.

🔗 **Live site:** `https://Shimul-Bappi.github.io/Shimul_Bappi-portfolio/`

## Overview

This site presents an academic profile, research publications, technical skills, and contact information in a single self-contained page, with full standalone research articles linked from the Research section. Built with plain HTML/CSS/JS — no build tools or frameworks required.

## Features

- Responsive layout (mobile, tablet, desktop)
- Animated hero section with typewriter effect and floating skill cards
- About, Research, Skills, and Contact sections
- Smooth-scroll navigation with active-section highlighting
- Mailto-based contact form (no backend needed)
- Direct links to full research articles (read in-browser or download)

## Tech Stack

- HTML5 & CSS3 (custom properties, flexbox, grid, animations)
- Vanilla JavaScript (no dependencies)
- Google Fonts (Inter)

## Project Structure

```
Shimul_Bappi-portfolio/
├── index.html
├── images/
│   └── profile.png
├── research/
│   ├── 10_Most_Discussed_Characters_in_the_Naruto_Franchise.html
│   └── Toy_Story5_Research_Article.html
├── README.md
└── LICENSE
```

> **Note:** the "Anime Sentiment Analysis" card on the Research section is marked **Coming Soon** until that article file is added to `research/`.

## Running Locally

Clone the repo and open `index.html` directly in a browser, or serve it locally:

```bash
git clone https://github.com/Shimul-Bappi/Shimul_Bappi-portfolio.git
cd Shimul_Bappi-portfolio
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying on GitHub Pages

1. Push this repository to GitHub under the name `Shimul_Bappi-portfolio`.
2. Go to **Settings → Pages** in the repository.
3. Under **Build and deployment → Source**, select **Deploy from a branch**.
4. Choose the `main` branch and the `/ (root)` folder, then click **Save**.
5. Wait a minute or two — GitHub will publish the site at:
   `https://Shimul-Bappi.github.io/Shimul_Bappi-portfolio/`
6. Make sure the `images/` and `research/` folders stay in the repo alongside `index.html` — the page references them with relative paths.

## Updating Content

- **Profile photo:** replace `images/profile.png` (keep the same filename, or update the `src` in `index.html`).
- **Research articles:** drop new `.html` files into `research/` and update the matching link(s) in the `<!-- RESEARCH -->` section and the footer's "Research Articles" list. To activate the "Anime Sentiment Analysis" card, add `research/Anime_Sentiment_Analysis.html` and restore its link/button markup.
- **Contact details:** update the email address and social links in the `<!-- CONTACT -->` and `<!-- FOOTER -->` sections.

## Author

**Md. Shimul Ahmed Bappi**
Department of Statistics and Data Science, Jahangirnagar University
📧 shimulbappi.sds49@gmail.com
🔗 [ResearchGate](https://www.researchgate.net/profile/Md-Bappi-2) · [LinkedIn](https://www.linkedin.com/in/shimul-bappi/) · [GitHub](https://github.com/Shimul-Bappi)

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details. The code is free to reuse and adapt; please don't reuse the photo, name, or personal research content as your own.
