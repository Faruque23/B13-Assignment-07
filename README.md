# KeenKeeper

We're all guilty of it — letting months slip by without reaching out to people we genuinely care about. KeenKeeper is a small personal tool I built to fix that. It gives you a simple, honest view of your friendships: who you've been in touch with recently, who's overdue for a call, and a quick way to log an interaction whenever you do reach out.

No social media noise. No algorithms. Just you and the people who matter.

---

## What it does

- **Friend list** — All your friends on one page, shown as cards with a status badge (On Track, Almost Due, or Overdue) so you can see at a glance who needs some attention.
- **Friend detail page** — Click any card to see the full picture: bio, tags, contact stats, and a one-click check-in to log a call, text, or video chat.
- **Timeline** — Every interaction you log shows up here with the date and type. You can filter by call, text, or video.
- **Analytics** — A simple pie chart (powered by Recharts) breaking down your interaction history so you can see how you've been keeping in touch.
- **Toast notifications** — A small confirmation pops up whenever you log a check-in, so you know it was saved.
- **404 page** — A clean fallback for any route that doesn't exist.

---

## Tech stack

| Technology | Why I used it |
|---|---|
| React.js | Component-based UI — easy to split into reusable pieces |
| React Router DOM | Handles page navigation without full page reloads |
| Recharts | Straightforward charting library that plays well with React |
| Vite | Fast dev server and build tool |
| Vanilla CSS | Kept it simple — no framework overhead for a project this size |

---

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173). That's it.

---

## Folder structure

```
src/
  components/     # Shared UI — Navbar, Banner, FriendList, FriendCard, Footer
  context/        # Global state — TimelineContext, ToastContext
  pages/          # One file per route — Home, FriendDetail, Timeline, Stats, 404
  styles/         # CSS files, one per component or page
friends.json      # The friend data (lives at the project root)
```

---

## A note on data

Right now the friend data lives in `friends.json` at the root of the project. It's loaded at runtime — there's no backend or database. Timeline entries are stored in React context, so they reset on page refresh. A future version could wire this up to localStorage or a proper API.

---

Built as part of Batch 13, Assignment 07.
