# 📦 Project Overview

This project is a full-fledged, production-grade web application developed for a client during a gap year after B.Tech graduation. It demonstrates end-to-end system design and development, including authentication, subscription management (planned), CI/CD, and deployment using modern technologies.

---

## 🚀 Tech Stack

- **Frontend:** SvelteKit (SSR + SPA hybrid)  
- **Backend:** Node.js via SvelteKit endpoints with Express middleware  
- **Database:** MongoDB (accessed via Mongoose ORM)  
- **Authentication:** JWT-based, with session/device enforcement (currently disabled)  
- **Deployment:** GitHub + Render (auto-deploys on new commits)  
- **Version Control:** Git / GitHub  
- **Security:** Session rotation, single-device restriction (currently disabled)  
- **Billing (Planned):** Razorpay (rejected integration)  

---

## 🛠 Additional Technologies & Middleware

- **Express** — Server middleware for routing and API handling alongside SvelteKit endpoints  
- **bcryptjs** — Password hashing and security  
- **body-parser** — Parsing incoming request bodies  
- **cookie-parser** — Cookie parsing and management  
- **cors** — Cross-Origin Resource Sharing configuration  
- **dotenv** — Environment variable management for configuration and secrets  
- **express-validator** — Validation middleware to sanitize and validate incoming requests  
- **jsonwebtoken** — JWT creation, verification, and rotation for authentication  
- **mongoose** — MongoDB ORM for schema-based data modeling  
- **nodemailer** — Email service integration for notifications or verification  
- **pkg** — Packaging tool (likely for building executable bundles)  

### Development & Build Tools

- **Babel (CLI, preset-env, register)** — Transpiling modern JavaScript to compatible versions  
- **babel-plugin-transform-import-meta** — For handling `import.meta` in Babel-transpiled code  
- **nodemon** — Development utility for automatic server restarts on code changes  

---

## 🎨 Note on UI/UX

> ⚠️ **UI is function-focused, not design-focused.**

This application was developed strictly based on client requirements, which emphasized functionality and backend robustness over visual design or user experience.

- The UI is intentionally minimal.  
- No professional design system or CSS framework was used.  
- Client explicitly stated they did **not** require UI/UX enhancements.

While not visually polished, the app is fully functional, reliable, and tailored to meet all business needs for the client.

---

## 🔐 Authentication & Session Design

This app was originally designed to implement a device-bound JWT authentication system, similar to early versions of WhatsApp, where an account can only be used on one device at a time.

> ⚠️ **Note:** As per the client’s updated requirements, these features are currently disabled, since the application is used by a single user (the client only).

### 🔑 Planned Session Features (Currently Disabled)

- On successful login, a randomized session token would be generated for the device.  
- This token would be stored securely in the database and validated on every request.  
- Single-device enforcement would ensure that only the most recently logged-in session remains active.  
- Token rotation every hour was planned for added security and session expiry control.  
- Session access was tied to subscription status, automatically logging users out when their subscription expired.  

---

## 💳 Subscription Model (Not Fully Implemented)

The client initially intended to monetize the platform via a subscription model, using providers like Razorpay or similar APIs.

However:  
- Razorpay and other payment API providers declined integration approval for this specific project/website.  
- As a result, subscription logic and enforcement were not fully implemented.  
- Per the client’s instruction, all validation, security, and subscription checks were disabled, making the app freely and fully usable by the client only.  

Despite this, the core infrastructure for subscription validation (token tie-in, DB hooks, etc.) is present and can be re-enabled or extended in the future.

---

## ⚙️ CI/CD & Deployment

- The application uses Render’s CI/CD pipeline.  
- Every commit to the GitHub repository triggers an automatic deployment to Render.  
- The app is currently hosted on Render's free tier, which is sufficient for the client’s use case.  

---

## ✅ Error Handling

While full test coverage and third-party monitoring tools were not a focus, the app includes robust internal error handling:  
- Server-side validation for malformed or unauthorized requests,  
- Client-side UX safeguards for incorrect input,  
- Resilience against misconfigured or unexpected states.

This ensures stable, reliable performance even with limited infrastructure.

---

## 🧱 Architecture Summary

Client (SvelteKit Frontend)
->
Server (SvelteKit Backend API Routes + Express Middleware)
->
MongoDB (Session, User, and Subscription Data)



Middleware logic (currently disabled) was in place to:  
- Validate active session tokens,  
- Enforce single-device usage,  
- Restrict access based on subscription status.  

---

## 📁 Future Improvements

- Re-enable and refine authentication/session logic if used beyond the current client  
- Implement full subscription billing flow if provider approval is granted  
- Add unit and integration tests (e.g., for auth and API endpoints)  
- Integrate basic monitoring/logging tools (e.g., Sentry, Logtail)  
- Improve UI/UX with a proper design system or frontend framework  
- Add user-facing device management (e.g., "Logout other devices" feature)  

---

## 🧑‍💻 About the Developer

This project was developed independently by me during a one-year break after completing my B.Tech. It was a practical deep-dive into full-stack development with real-world constraints, including:

- Delivering a product for a real client  
- Building on modern frameworks like SvelteKit  
- Handling session security and device-specific access  
- Deploying through CI/CD pipelines using free-tier cloud resources  
- Navigating platform constraints (e.g., payment gateway rejections)  
- Prioritizing functionality and business goals over aesthetics, as per client direction  
