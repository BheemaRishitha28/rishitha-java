JAVA RECORD - static website (HTML + CSS + JS only)

Folder layout
  index.html        page shell
  css/style.css     all styling (colours are CSS variables at the top)
  js/script.js      weeks data + routing and UI (the PROFILE block is near the middle)
  (data and app code are in one file; search for "const PROFILE" to edit the owner)
  assets/           put your photo here as  profile.png

To change the owner: edit only the PROFILE block at the top of js/app.js and
the <title> in index.html, then replace assets/profile.png.

Deploy: drag the whole folder into Vercel (or push to GitHub and import it).
No build step is needed. Pages use #/ links, so no rewrite rules are required.
