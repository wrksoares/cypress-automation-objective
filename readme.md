# Cypress Automation Project – QA Technical Challenge

This project was developed as part of a QA Automation technical assessment. It covers both **Frontend E2E tests** and **Backend API tests**, using Cypress.

---

## 🧪 Project Scope

The project includes:

### ✅ Frontend E2E Tests
- User login
- Product search
- Add product to cart (shopping list flow)

### ✅ API Tests
- User creation
- User login validation
- Product listing validation

---

## ⚠️ Important Note About Test Environment

The application used in this project is a **shared test environment (Serverest)**.

### 🔄 Ephemeral Database Behavior

The backend database is automatically reset every few minutes, which means:

- Created users may be deleted after a short period
- Test data is not persistent between runs
- Previous test runs cannot be relied on

---

## 🧪 Test Data Strategy

To ensure test reliability, this project follows a **fully dynamic test data approach**:

- A new user is created via API for each test run
- Unique email addresses are generated dynamically
- Tests do not rely on pre-existing users

Example:

```js
const email = `test${Date.now()}@qa.com`