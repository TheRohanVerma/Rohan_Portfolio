# Rohan Verma's Portfolio

Welcome to my personal portfolio repository. This project showcases my professional experience, skills, and publications.

## Project Structure

- `portfolio-v2/`: A modern, responsive version of my portfolio built with React, Vite, and Tailwind CSS.
- `assets/`: Image assets and styles for the legacy version of the site.
- `index.html`: The legacy version of the portfolio.

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

- **Workflow**: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)
- **Deployment URL**: [https://therohanverma.github.io/Rohan_Portfolio/](https://therohanverma.github.io/Rohan_Portfolio/)

The deployment process builds the `portfolio-v2` project and serves the static files from the `dist` directory.

## Development

To work on the new version of the portfolio:

1. Navigate to the `portfolio-v2` directory:
   ```bash
   cd portfolio-v2
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```
