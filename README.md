# Memoiries: Memoir & Memory App

## Overview
Memoiries is a memoir and memory app that allows users to document their thoughts, reflect on their daily experiences, and track their emotional well-being. Users can create daily notes and rate their mood on a scale from 1 to 10. Built with **React**, **TypeScript**, **Tailwind CSS**, and **Supabase**, Memoiries offers a sleek and modern interface for journaling and mood tracking. The app is designed to promote mindfulness by helping users maintain a daily reflection practice.

### Resources and Technologies Used:
- **Technologies:**
  - **ReactJS**
  - **TypeScript**
  - **Tailwind CSS**
  - **Supabase** (Backend for database and authentication)

- **Supabase Docs:** [Supabase Docs](https://supabase.com/docs)
- **Tailwind CSS Docs:** [Tailwind CSS Docs](https://tailwindcss.com/docs)
- **ReactJS Docs:** [ReactJS Docs](https://reactjs.org/docs/getting-started.html)

## App Description
Memoiries is an app designed to help users track their daily thoughts and emotional state. With a focus on simplicity and ease of use, it allows users to write notes, rate their mood, and reflect on their experiences. All data is securely stored in the cloud using **Supabase**, providing both authentication and database functionality.

### Key Features:
- **Create Daily Notes:** Users can write daily notes about their thoughts, events, or anything else they'd like to document.
- **Mood Rating:** Rate your mood on a scale from 1 to 10 to track your emotional state over time.
- **View Past Entries:** View and review your previous notes and mood ratings for reflection and self-awareness.
- **Authentication:** Users can sign up, log in, and access their entries securely via **Supabase Authentication**.
- **Responsive Design:** The app is fully responsive and works seamlessly on mobile and desktop devices.
- **Minimalistic Interface:** The design focuses on providing a clean and distraction-free experience for users to freely express themselves.
- **Real-Time Syncing:** All data is synced in real time, ensuring that users' notes and mood ratings are updated across all devices.

Memoiries leverages **ReactJS** and **TypeScript** for a smooth and type-safe development process. The UI is built using **Tailwind CSS**, allowing rapid styling and customization. **Supabase** serves as the backend, handling user authentication and storing entries in a database.

## What I Learned
- **Supabase Integration:** Gained experience in integrating **Supabase** for backend features such as authentication, real-time data storage, and querying the database.
- **TypeScript:** Improved my understanding of **TypeScript** and its benefits in maintaining a type-safe codebase, especially for managing user data and form validation.
- **ReactJS:** Enhanced my skills in building dynamic and interactive user interfaces with **ReactJS**, using hooks such as `useState`, `useEffect`, and `useContext` for state management.
- **Tailwind CSS:** Deepened my knowledge of **Tailwind CSS** and its utility-first approach, which allowed me to quickly build a responsive and modern design.
- **User Authentication:** Worked with **Supabase Authentication** to implement secure user sign-up, login, and session management for protecting user data.

## Potential Future Upgrades
- **Mood Analytics:** Add a feature that analyzes mood trends over time and provides insights, such as average mood, mood changes over time, and more.
- **Rich Text Editing:** Enhance the note-writing experience with rich text formatting (bold, italics, lists) for better customization.
- **Media Attachments:** Allow users to attach images, audio, or videos to their daily entries, capturing a more complete reflection of their day.
- **Tags and Categories:** Implement tagging and categorizing notes to organize and filter entries based on themes or topics (e.g., work, family, personal growth).
- **Search and Filter:** Add powerful search and filtering options, so users can quickly find entries based on keywords, dates, or mood ratings.
- **Export Data:** Allow users to export their journal entries and mood data into PDF or CSV format for offline use or sharing.
- **Push Notifications:** Implement reminders and push notifications to encourage daily journaling and mood tracking.

## Getting Started

To get started with Memoiries, follow these steps:

### Prerequisites:
- **npm** or **yarn** as the package manager
- A **Supabase** account to set up the database and authentication.

### Installation:
1. Clone the repository:
   ```bash
   git clone https://github.com/derickcnguyen/memoiries.git
   cd memoiries

   .env file
   VITE_SUPABASE_URL
   VITE_SUPABASE_ANON_KEY

   npm install
   npm audit fix
   npm run dev
