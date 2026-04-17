# KeenKeeper

A personal shelf for maintaining meaningful friendships — track the people who matter most, log interactions, and never let relationships fade.

---

## 🛠️ Technologies

| Technology | Purpose |
|---|---|
| React.js | UI component framework |
| React Router DOM | Client-side navigation |
| Recharts | Friendship analytics pie chart |
| Vite | Fast build tool |
| CSS (vanilla) | Component-scoped styling |

---

## ✨ Key Features

1. **Friend Cards Grid** — Browse all friends in a clean 4-column responsive grid with status badges (On Track / Almost Due / Overdue).
2. **Friend Detail Page** — Two-column layout showing profile info, stats, relationship goals, and a Quick Check-In panel to log Calls, Texts, and Video calls with toast notifications.
3. **Timeline & Analytics** — A filterable timeline of all logged interactions plus a Recharts pie chart showing your interaction breakdown.

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📂 Project Structure

```
src/
  components/     # Navbar, Banner, FriendList, FriendCard, Footer
  context/        # TimelineContext, ToastContext
  pages/          # HomePage, FriendDetailPage, TimelinePage, StatsPage, NotFoundPage
  styles/         # CSS files per component/page
friends.json      # Local friend data
```

---

Built for Batch 13 — Assignment 07.


The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
