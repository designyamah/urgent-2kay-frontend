# React + TypeScript + Vite

## 🚀 URGENT 2KAY - Frontend Collaboration Guide

Welcome to the frontend codebase for URGENT 2KAY! This document will help all team members get started and collaborate efficiently.

\*\* This is a Living documents(its still up for regular reviews and updates)

---

### 🧰 Tech Stack

- React (via Vite)
- Context API + Redux Toolkit (RTK) for State Management
- Tailwind CSS (or preferred styling framework or Plain CSS)
- Git & GitHub for version control

---

### 🌱 Branch Strategy

We use a **Gitflow-like workflow**:

- `main` – stable code for production release
- `dev` – main development branch (all features merge here first)
- `feature/*` – for individual tasks/features (created from `dev`)

---

### ⚙️ Git Workflow Guide

#### 1. Clone the repository

```bash
   git clone https://github.com/designyamah/urgent-2kay-frontend.git
   cd urgent-2kay-frontend
```

#### 2. Install dependencies

```bash
   npm install
```

#### 3. Checkout the dev branch

```bash
   git checkout dev
   git pull origin dev # Always pull the latest changes
```

#### 4. Create a feature branch

git checkout -b yourname-feature/your-feature-name

🔸 Use clear, short names like `joseph-feature/login-form` or `chioma-feature/update-navbar`

#### 5. Work on your feature

- Make your changes
- Frequently commit your progress:
  git add .
  git commit -m "Add: implemented login form UI"

#### 6. Push your feature branch

git push -u origin feature/your-feature-name

#### 7. Create a Pull Request (PR)

- Go to GitHub
- Open a PR from `feature/your-feature-name` into `dev`
- Request a review from the team lead or another dev

❗ Do NOT push directly to `dev` or `main`. Always use feature branches and PRs.

---

### 🔒 Branch Protection

- `main` is for stable, production-ready code
- Only the **team lead** merges to `main` after testing
- All features must go through `dev` first via PRs (Pull Requests)

---

✅ Happy coding, team!
