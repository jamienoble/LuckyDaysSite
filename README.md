# Lucky Day Studios Website

This repository contains a simple React single-page site for Lucky Day Studios. It uses Tailwind CSS for styling and is configured for dark mode with warm accent colors.

## Structure

- `src/` - React source code, including components for Home, About, and team members.
- `public/` - Static assets such as `index.html`, video, and image placeholders.
- `tailwind.config.js`, `postcss.config.js` - Tailwind configuration.
- `package.json` - Dependencies and scripts.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Deploy

The project is set up to deploy to GitHub Pages. Update the `homepage` field in `package.json` to match your repository URL (already set to `https://jamienoble.github.io/LuckyDaysSite`). Then run:

```bash
npm run build
npm run deploy
```

The `deploy` script uses `gh-pages` to push the `build` directory to the `gh-pages` branch.

## Styling

- Dark theme with a black background.
- Warm colors: green `#34503d`, cream `#fffbf3`, plus minimal additional tones.
- No rounded corners (`rounded-none` everywhere).
- Hamburger menu toggles navigation.
- Uses `HashRouter` so routing works on GitHub Pages.

## Notes

- Replace the placeholder video (`public/portfolio.mp4`) and images (`public/scene1.jpg`, `public/scene2.jpg`) with your own assets.
- Team profiles can be updated in `src/About.js`.

Enjoy developing your studio site!