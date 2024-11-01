##  Technology Stack
- Frontend: Next js
- Backend: NodeJS, Express, 
- Database: MYSQL
## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm installed
## Run Locally

Clone the project


backend set up

```bash
 cd Backend

```

```bash
 create a .env file in root and paste thsese

PORT = 5000
HOST = "localhost"
DATABASE= "crud"
USER = "root"
PASSWORD = ""

```

Install dependencies

```bash
npm install
npm run dev
```


front end set up

```bash
 cd frontend
```
```bash
 create a .env file in root and paste thsese 
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
```
Install dependencies

```bash
npm install
npm run dev
