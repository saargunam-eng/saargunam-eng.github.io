# Saargunam Venkatesh — Portfolio Website

A fast, zero-dependency, modern developer portfolio tailored for a **Platform Engineer & DevOps Lead** with 11+ years of experience.

## ✨ Features
- **Modern Dark Aesthetic**: Sleek glassmorphism, glowing gradients, cyan/blue accent palettes, and responsive design.
- **Dynamic Micro-Interactions**: Typewriter animation in hero header, animated metric counters, interactive timeline.
- **Recruiter & Hiring Manager Focused**:
  - Highlights business and engineering metrics: 40% FinOps savings, 1,000+ engineers supported, sub-15m Kafka RTO.
  - Complete 11-year career journey.
  - CNCF Certified Kubernetes Administrator (CKA) and AWS Solutions Architect certifications.
  - Direct links to LinkedIn, GitHub, and email.
- **100% Free Hosting on GitHub Pages**: No build tools, zero npm dependencies, static HTML/CSS/JS.

---

## 🚀 How to Host on GitHub Pages for Free

### Option 1: Using your user page (`<your-username>.github.io`)
1. Create a public repository on GitHub named **`<your-username>.github.io`** (e.g., `saargunam.github.io`).
2. Copy the files inside the `portfolio/` folder (`index.html`, `style.css`, `script.js`) into the root of that repository.
3. Commit and push:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
4. Within 1-2 minutes, your website is live worldwide at `https://<your-username>.github.io`!

---

### Option 2: Hosting as a Project Page (e.g., `https://<your-username>.github.io/portfolio`)
1. In your existing repo or a new repo, push the `portfolio/` folder.
2. In GitHub, go to **Settings** > **Pages**.
3. Under **Build and deployment > Source**, choose **Deploy from a branch**.
4. Select `main` branch and `/portfolio` (or `/root` if moved to root) and click **Save**.
