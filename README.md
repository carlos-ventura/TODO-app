# TODO app with react and .Net

## To run frontend

```
cd frontend
npm install
npm start
```

## To run backend

```
cd backend
cd backend
dotnet run --project .\backend.csproj
```

## Requirements and Assumptions

1. For the app to work it requires an SQL server
2. Connection String needs to be configured for external use
    1. Required database TodoApp

## Allowed usernames for operations on the website

1. root
2. admin
3. superuser

## Bugs and considerations

### Frontend
1. Refreshing the page will cause the authentication to reset, needing a login
2. Deleting a task will shot it deleted the last one, going back to Home and back to the Todo page fixes it
