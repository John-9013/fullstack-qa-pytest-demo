# Full-Stack QA & Automated Testing Demo

A modular repository demonstrating automated testing practices, backend API validation, and multi-language project organization across **Python (FastAPI + pytest)**, **TypeScript**, and **Node.js**.

## Repository Structure

* `fullstack/backend/` — FastAPI application, `pytest.ini`, `requirements.txt`, and `tests/test_main.py`
* `fullstack/frontend/` — Frontend application structure
* `node/` — Node.js module and test setup
* `python/` — Standalone Python testing scripts
* `typescript/` — TypeScript setup and unit test examples

## Tech Stack

* **Backend & API:** Python 3.13, FastAPI
* **Automated Testing (Python):** `pytest`, `httpx` / FastAPI `TestClient`
* **Typed & JS Environments:** TypeScript, Node.js
* **Version Control & Isolation:** Git, GitHub, Python Virtual Environments (`.venv`)

## Running the Backend Tests Locally

1. Navigate to the backend directory:
   `cd fullstack/backend`
2. Create and activate a virtual environment:
   `python -m venv .venv` and `.\.venv\Scripts\Activate.ps1` (Windows) or `source .venv/bin/activate` (Linux/macOS)
3. Install dependencies:
   `pip install -r requirements.txt`
4. Run the automated test suite:
   `pytest -v`

## Verified Test Output

`tests/test_main.py::test_health PASSED [100%]`

---
*Maintained by John Edison Sarmiento Jaimes — Full-Stack Software Developer & QA Automation.*
