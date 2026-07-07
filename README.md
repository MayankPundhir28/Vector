# Vector 🧭

**Vector** is an adaptive study planner that builds a personalized exam-prep schedule for students — and keeps adjusting it as they actually study, not just once at the start.

Instead of a static timetable, Vector reacts to real progress: if you fall behind on a topic or rate your confidence low, it re-prioritizes your upcoming schedule automatically.

> 🚧 **Status:** Actively in development. Backend scaffolding (routes, controllers, database schema) is complete. Frontend and core scheduling logic are in progress.

---

## The Problem

Most study planning apps generate a timetable once and never touch it again — real prep never actually follows the plan exactly. Vector treats the schedule as a living thing: exam date, goals, weak subjects, and daily available time feed into an initial plan, and ongoing self-reported progress feeds back into recalculating what's next.

## Core Features

- **Personalized daily schedule** — generated from exam date, subject goals, weak areas, and daily available study time
- **Topic priority list** — weighted by weakness/confidence rating and time remaining before the exam
- **Adaptive revision timetable** — spaced-repetition style reminders for topics already covered
- **Weekly progress reports** — planned vs. actual study time, topics cleared, confidence trends
- **Plan recalculation** — schedule adjusts automatically as topics are marked done, skipped, or rated

## Planned Features

- ⏱️ Pomodoro timer integrated into study sessions
- 🔥 Study streaks and consistency rewards
- 👥 Group study mode
- 🎯 Confidence-based topic tracking
- 📺 YouTube / resource recommendations for weak topics
- 📊 Exam readiness prediction score

---

## Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS

**Backend**
- Express.js (ES Modules)
- REST API architecture (routes → controllers → services)

**Database**
- PostgreSQL (hosted on Neon)
- Prisma ORM

**Auth**
- Clerk

**Deployment**
- Frontend: Vercel
- Backend: Render

---

## Project Structure

```
vector/
├── client/              # React (Vite) frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── hooks/
│       ├── services/    # API call wrappers
│       └── utils/
│
├── server/               # Express backend
│   └── src/
│       ├── routes/       # Route definitions per resource
│       ├── controllers/  # Request/response handling
│       ├── services/     # Scheduling algorithm, revision logic, readiness scoring
│       ├── middleware/    # Auth, error handling
│       └── prisma/        # Database schema + migrations
```

## Data Model

Core entities: `User → Plan → Subject → Topic → StudySession`, with `ProgressLog` capturing actual study activity and `StudyStreak` tracking daily consistency. Each exam **Plan** is fully self-contained — subjects and topics are scoped to a single plan, so a student prepping for two different exams (e.g. JEE and Boards) can have completely independent strategies for the same subject, with zero data overlap.

---

## Running Locally

### Prerequisites
- Node.js (v18+)
- A PostgreSQL database (e.g. free tier on [Neon](https://neon.tech))
- A [Clerk](https://clerk.com) account for auth keys

### Backend
```bash
cd server
npm install
# Add your DATABASE_URL and Clerk keys to a .env file
npx prisma migrate dev
npm run dev
```

### Frontend
```bash
cd client
npm install
npm run dev
```

---

## Why I Built This

I wanted a portfolio project that went beyond basic CRUD — something with genuine logic (an adaptive scheduling algorithm) and a real product shape (input → personalized output → feedback loop → adjusted output). Vector let me practice full-stack architecture decisions end-to-end: schema design, REST API structure, auth integration, and building a system that responds to changing data over time rather than just displaying static records.

---

## License

MIT
