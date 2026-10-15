# Siva Analytics: Portfolio Website

```
siva-analytics/
├── index.html
├── css/style.css
├── js/main.js        <- services, projects, steps text lives here
├── assets/images/    <- put dashboard screenshots here
└── README.md
```

## 1. Replace placeholders
- **Contact** (index.html, Contact section): change `YOUR-EMAIL@example.com`, `YOUR-LINKEDIN-ID`, and `91XXXXXXXXXX` (country code + number, no + or spaces).
- **About text and skills**: index.html. SQL is commented out; remove the `<!--` and `-->` around it only after you have built that skill.
- **Projects**: edit the `projects` list at the top of js/main.js. Replace every `[Edit: ...]` with your real work. Write only results you actually produced.
- **Screenshots**: export dashboard images (Power BI: File > Export, or screenshot), blur anything private, and save them as `assets/images/sales-dashboard.png`, `inventory-dashboard.png`, `ecommerce-dashboard.png` (or change the names in main.js).
- **Never** include client data or embed private Power BI reports.

## 2. Preview locally
Double-click `index.html`. Or, for a server: open a terminal in the folder and run `python -m http.server 8000`, then visit http://localhost:8000.

## 3. GitHub setup (beginner)
1. Create a free account at github.com.
2. Click **New repository**, name it `siva-analytics`, choose **Public**, click **Create repository**.
3. Click **uploading an existing file**, drag in all folders and files from the siva-analytics folder, click **Commit changes**.

## 4. Publish with GitHub Pages (free)
1. Repository **Settings > Pages**.
2. Under **Build and deployment**, Source: **Deploy from a branch**. Branch: **main**, folder **/(root)**. Click **Save**.
3. Wait 1 to 2 minutes. Your site is at `https://YOUR-USERNAME.github.io/siva-analytics/`.
4. Then add that URL to the canonical tag in index.html and to your LinkedIn profile.

## 5. Testing checklist
**Desktop:** all nav links scroll to the right section; View Projects and Contact Me work; "See details" opens the right project; Email, LinkedIn and WhatsApp open correctly; hero chart draws; no console errors (F12).
**Mobile (or browser device mode, 375px wide):** Menu button opens and closes; menu closes after tapping a link; no sideways scrolling; text readable; buttons easy to tap; project details readable; screenshots fit the screen.
**Both:** Tab key reaches every link with a visible outline; screenshots load (or placeholder text shows); every project says "Portfolio demonstration"; no fake clients, testimonials or results anywhere.
