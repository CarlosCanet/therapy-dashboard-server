# Therapy Dashboard Server

This repository contains the backend for the Therapy Dashboard application, implemented using [json-server](https://github.com/typicode/json-server) to provide a REST API that feeds data into the React frontend application.

---- 

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/CarlosCanet/therapy-dashboard-server.git
```

2. Install dependencies:
```bash
cd therapy-dashboard-server
npm install
```

3. Start the server:
```bash
npm run start
```

The server will be available at `http://localhost:5005`

-----

## 🛠️ Server Structure

### Data Collections

#### Patients
```javascript
{
  id: string,
  firstName: string,
  lastName: string,
  age: number,
  diagnosis: string,
  startDate: string,
  status: "active" | "inactive"
}
```

#### Sessions
```javascript
{
  id: string,
  patientId: string,
  date: string,
  notes: string,
  progress: number,
  duration: number
}
```

## 🚀 API Endpoints

| Method | URL                                   |                                Request body                                |                   Description                    |
| :----: | :-----------------------------------: | :------------------------------------------------------------------------: | :----------------------------------------------: |
|  GET   | `/patients`                           |                                    n/a                                     | Returns all patients                             |
|  GET   | `/patient/:patientId`                 |                                    n/a                                     | Return info about a patient                      |
|  GET   | `/patient/:patientId?_embed=sessions` |                                    n/a                                     | Returns a single patient with all their sessions |
|  POST  | `/patients`                           |    {Name, Age, Gender, Issues, Sessions,  Treatments, Activities done}     | Creates a patient                                |
| PATCH  | `/patients/:patientId`                |    {Name, Age, Gender, Issues, Sessions,  Treatments, Activities done}     | Updates some details of a single patient         |
| DELETE | `/patients/:patientId`                |                                    n/a                                     | Deletes a single patient                         |
|  GET   | `/sessions`                           |                                    n/a                                     | Return all sessions                              |
|  GET   | `/sessions/:sessionId`                |                                    n/a                                     | Return an object with the info about sessionId   |
|  GET   | `/sessions/:sessionId?expand=patient` |                                    n/a                                     | Return an object with the info about sessionId   |
|  POST  | `/sessions`                           | {PatientId, Date, Description, Problems, Activities, Info about treatment} | Creates a session                                |
| PATCH  | `/sessions/:sessionId`                |                                                                            | Updates some details of a single session         |
| DELETE | `/sessions/:sessionId`                |                                    n/a                                     | Deletes a single session                         |

## 🛡️ Technologies Used

- [JSON Server](https://github.com/typicode/json-server) - Mock REST API
- Node.js
- Express.js

---- 

## 🔗Links
- [Client repository](https://github.com/CarlosCanet/therapy-dashboard-client)
- [GitHub Project](https://github.com/users/CarlosCanet/projects/16)
- [Slides](https://docs.google.com/presentation/d/1PIrIcs4Ebyq9k7FFdz_cXba-nmvnWTsG7B0uOu2ort8/edit?usp=sharing)
- [Deployed API](https://therapy-dashboard-server.onrender.com/)