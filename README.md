# ecomm

Projeto de Ecommerce criando durante o programa LevelUp da Alura

## 12 Factor App
[The Twelve-Factor App](https://12factor.net/)

Analysis of the application on the twelve factors to be applied of the methodology for building software as a service. Resume about every factor and explanation if the factor itself is applied

1. [x] **Codebase**

    This Factor says your codebase needs to be versionated and have an one-to-one correlation between the codebase and the app.
    
    - This application is using the fist factor once it's on a controled git repository and 
    
1. [x] **Dependencies**

    This Factor says all the dependencies used on the application need to be well documented and isolated to avoid machine-to-machine errors.

    - This application is using the second factor with the NPM package.json and the Docker compose files.

1. [x] **Config**

    This Factor says all the configs such as enviroment params and external variables must be isolated from the code.
    
    - This application is using the third factor with the .env and the docker compose file.
    
1. [x] **Backing services**

    This Factor says all backing service connections should not chance the application itself, being able to switch a database or a querying system with a simple URL.
    
    - This application is using the forth factor with the help of the mongoose ORM.
    
1. [ ] **Build, release, run**

    This Factor says the stages of build, release and execution should be strict separeted.
    
    - This application does not have an release and run stage yet so the factor does not applie.
    
1. [x] **Processes**

    This Factor says the application should be stateless and between microservices it should have no exchange of informations or states. 
    
    - This application is using the sixth factor, being stateless and saving all necessery information on a database.
    
1. [x] **Port binding**

    This Factor says all comunication between services should be made using port-binding. Helping the application be more scalable.
    
    - This application is using the seventh factor, all ports are binded and communication between services are being made through it.
    
1. [ ] **Concurrency**

    This Factor says that when thinking of scalability instead of makeing a new instance in a better machine you should be able to duplicate the current instance.
    
    - Don`t know
    
1. [ ] **Disposability**

    This Factor says the application should have a fast inicialization and a gracefull stop, witch means it should stop with a SIGTERM signal, showing that the application exited in an expected way, freeing the resources correctly and saving the state if necessary.
    
    - Don`t know

1. [ ] **Dev/prod parity**

    This Factor says the development, production and test enviroment should be as similar as possible. This includes the code version, the team itself and configuration.
    
    - Don`t know
    
1. [x] **Logs**

    This Factor says an application should not attempt to write to or manage logfiles. Instead, each running process writes its event stream, unbuffered, to ```stdout```.
    
    - This application is using the eleventh factor, all logs are directed to the standart output and separeted between messages and errors.
    
1. [ ] **Admin processes**

    This Factor says One-off admin processes should be run in an identical environment as the regular long-running processes of the app and Admin code must ship with application code to avoid synchronization issues.
    
    - Don`t know
