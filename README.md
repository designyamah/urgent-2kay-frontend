# React + TypeScript + Vite

## 🚀 URGENT 2KAY - Frontend Collaboration Guide

Welcome to the frontend codebase for URGENT 2KAY! This document will help all team members get started and collaborate efficiently.

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

### 🔧 Setup Instructions

1. **Clone the repo:**

   ```bash
   git clone https://github.com/designyamah/urgent-2kay-frontend.git
   cd urgent-2kay-frontend
   ```

2. Install dependencies:

```bash
    npm install
```

3. Switch to the dev branch:

```bash
   git checkout dev
```

git checkout dev

4. Create your own feature branch:
   git checkout -b feature/<your-feature-name>
5. Push your branch:
   git push -u origin feature/<your-feature-name>

✅ Working on a Feature?

Always branch out from dev

Make small, atomic commits with clear messages

Open a Pull Request into dev once you're done

Request a review from the team lead or any reviewer

Only the team lead merges into main after testing
