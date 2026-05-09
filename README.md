# Raven's Eye - Bird Watcher Log

A personal bird-watching tracker built as a static website on GitHub Pages. Log your sightings, track birds, and watch for patterns.

## Features (v1.0)

- **Quick-log form** for bird sightings with fields for:
  - Bird type (crow, jay, robin, raven, other)
  - Individual bird name (for named birds like Dranzer or Beckett)
  - Behavior and notes
  - Date and time (auto-filled, editable)
  - Time of day classification
  - Weather conditions
  - Surrounding conditions/location

- **Mobile-first responsive design** — works beautifully on phone and desktop
- **Corvid-themed dark aesthetic** with iridescent purple, teal, and gold accents
- **Raven logo and animations** for visual appeal

## Roadmap

- **v2**: GitHub API integration to save entries to a JSON file in the repo
- **v2**: Image upload integration with Cloudinary
- **v2**: View/list page to see all logged sightings
- **v3**: Filtering and sorting by bird type, date, individual name
- **v3**: Export to JSON and CSV
- **v4**: Stats and analytics (most frequent birds, behavior patterns, etc.)

## Running Locally

### Option 1: Using Python (Quick)
```bash
cd bird-watcher
python -m http.server 8000
```
Then open your browser to `http://localhost:8000`

### Option 2: Using Node.js
```bash
cd bird-watcher
npx http-server
```

### Testing on Your Phone
1. Find your computer's IP address:
   - **Windows**: Open Command Prompt and type `ipconfig`. Look for "IPv4 Address" (usually something like 192.168.1.x)
   - **Mac/Linux**: Open Terminal and type `ifconfig` or `hostname -I`

2. On your phone, visit: `http://<your-ip>:8000` (or your computer's IP and the port you used)

3. The form should load and be fully functional for testing

## File Structure

```
bird-watcher/
├── index.html          # Main form page
├── css/
│   └── style.css       # All styling (corvid dark theme)
├── js/
│   └── app.js          # Form handling and local logic
└── README.md           # This file
```

## Deploying to GitHub Pages

1. Make sure you have this repo set up on GitHub
2. Go to repo Settings → Pages
3. Set the source to "Deploy from a branch"
4. Select the branch `main` (or `master`) and folder `/root`
5. Your site will be live at `https://yourusername.github.io/bird-watcher` (or your custom domain)

Whenever you push changes to GitHub, they'll automatically deploy.

## Notes for Development

- **No build process needed** — this is pure HTML, CSS, and JavaScript
- **No external dependencies** — everything loads from the CDN or is local
- **Secure form validation** — form data is validated before being used
- **localStorage ready** — the app structure is ready to store entries locally before pushing to GitHub

## Future: GitHub Integration

When we add GitHub API support (v2), entries will be:
1. Logged through this form
2. Saved to `data/sightings.json` in the repo
3. Committed via GitHub API with your personal access token
4. Immediately visible on the View page

This keeps everything in your GitHub repo, making it your own personal database.

---

**Status**: v1.0 — Form complete and ready for local testing
**Next**: GitHub API integration for data persistence
