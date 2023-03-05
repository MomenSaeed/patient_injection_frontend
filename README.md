# Patient Injection Front-End

Front-End Implementation For [Patient Injection API](https://github.com/MomenSaeed/patient_injection)

## Getting Started

The Front is built using

- [React](https://reactjs.org/).
- [Type Script](https://www.typescriptlang.org/).
- [React Router](https://reactrouter.com/en/main/components/routes).
- [Matrial UI](https://mui.com/material-ui/getting-started/overview/).
- [ReactQuery](https://tanstack.com/query/v4/docs/react/overview) for api requests with [graphql client](https://github.com/graphql/graphql-js).
- [React Charts](https://react-charts.tanstack.com/) for adherence graph charts.

### Prerequisites

- Setup [Docker](https://www.docker.com/).
- [Backend](https://github.com/MomenSaeed/patient_injection) up and running on [localhost:3000](http://localhost:3000/)

### Installing

runing docker-compose is enough:

```bash
$ docker-compose up
```

When containers are up and running you can access the front through [localhost:3001](http://localhost:3001).

To access react container you can run:

```bash
$ docker exec -it patient-injection-front-end bash
```

## Api Documentation

To clarify project endpoints requests details.

- Published [Postman](https://documenter.getpostman.com/view/15636958/2s93CSpr19).

### Code Linting

using eslint

```bash
$ docker exec -it patient-injection-front-end npm run lint
```

## Code Structure

- [App.tsx](https://github.com/MomenSaeed/patient_injection_frontend/blob/main/src/App.tsx) the root component to set the project setup and structure.
- [Routes.tsx](https://github.com/MomenSaeed/patient_injection_frontend/blob/main/src/Routes.tsx) to list the project routes.
- [Pages/](https://github.com/MomenSaeed/patient_injection_frontend/tree/main/src/pages) project pages components which the route starts from.
- [api/](https://github.com/MomenSaeed/patient_injection_frontend/tree/main/src/api) containes the Api requests by react-query and the request types.
- [components/](https://github.com/MomenSaeed/patient_injection_frontend/tree/main/src/components) containes shared components through different pages.
- [PatientContext.tsx](https://github.com/MomenSaeed/patient_injection_frontend/blob/main/src/context/Patient.tsx) which handle the current patient session.
