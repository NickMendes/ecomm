# ecomm

This is a back-end application created for a ecommerce using Node.js, Express and Mongoose to help applie the acquired knowledge from the Alura Junior Dev program together with PagoNxt (A Santader company).

## 12 Factor App
[The Twelve-Factor App](https://12factor.net/)

Analysis of the application on the twelve factors to be applied of the methodology for building software as a service. Resume about every factor and explanation if the factor itself is applied.

1. [x] **Codebase**
    <details>
    <summary> Learn More </summary>
    This Factor says your codebase needs to be versionated and have an one-to-one correlation between the codebase and the app.
    
    - This application is using the fist factor once it's on a controled git repository.
    </details>

1. [x] **Dependencies**
    <details>
    <summary> Learn More </summary>
    This Factor says all the dependencies used on the application need to be well documented and isolated to avoid machine-to-machine errors.

    - This application is using the second factor with the NPM package.json and the Docker compose files.
    </details>

1. [x] **Config**
    <details>
    <summary> Learn More </summary>
    This Factor says all the configs such as enviroment params and external variables must be isolated from the code.
    
    - This application is using the third factor with the .env and the docker compose file.
    </details>
    
1. [x] **Backing services**
    <details>
    <summary> Learn More </summary>
    This Factor says all backing service connections should not chance the application itself, being able to switch a database or a querying system with a simple URL.
    
    - This application is using the forth factor with the help of the mongoose ORM.
    </details>
    
1. [ ] **Build, release, run**
    <details>
    <summary> Learn More </summary>
    This Factor says the stages of build, release and execution should be strict separeted.
    
    - This application does not have an release and run stage yet so the factor does not applie.
    </details>
    
1. [x] **Processes**
    <details>
    <summary> Learn More </summary>
    This Factor says the application should be stateless and between microservices it should have no exchange of informations or states. 
    
    - This application is using the sixth factor, being stateless and saving all necessery information on a database.
    </details>
    
1. [x] **Port binding**
    <details>
    <summary> Learn More </summary>
    This Factor says all comunication between services should be made using port-binding. Helping the application be more scalable.
    
    - This application is using the seventh factor, all ports are binded and communication between services are being made through it.
    </details>
    
1. [x] **Concurrency**
    <details>
    <summary> Learn More </summary>
    This Factor says that when thinking of scalability instead of makeing a new instance in a better machine you should be able to duplicate the current instance.
    
    - Even though it's not applied, this application is capable of scalability with little to no changes.
    </details>
    
1. [x] **Disposability**
    <details>
    <summary> Learn More </summary>
    This Factor says the application should have a fast inicialization and a gracefull stop, witch means it should stop with a SIGTERM signal, showing that the application exited in an expected way, freeing the resources correctly and saving the state if necessary.
    
    - This application is using the ninth factor with the help of Docker containerization.
    </details>

1. [x] **Dev/prod parity**
    <details>
    <summary> Learn More </summary>
    This Factor says the development, production and test enviroment should be as similar as possible. This includes the code version, the team itself and configuration.
    
    - This application is using the tenth factor using the same enviroment for development and testing and dockering the production enviroment.
    </details>
    
1. [x] **Logs**
    <details>
    <summary> Learn More </summary>
    This Factor says an application should not attempt to write to or manage logfiles. Instead, each running process writes its event stream, unbuffered, to `stdout`.
    
    - This application is using the eleventh factor, all logs are directed to the standart output and separeted between messages and errors.
    </details>
    
1. [ ] **Admin processes**
    <details>
    <summary> Learn More </summary>
    This Factor says One-off admin processes should be run in an identical environment as the regular long-running processes of the app and Admin code must ship with application code to avoid synchronization issues.
    
    - Not Implemented
    </details>

## MicroServices
[What is microservices?](https://microservices.io/)

Analysis of the application on the microservices architecture implementations.

- [x] **Domain Services**

    - Used on the Account and Order Services

- [x] **Application Service**

    - Used on the Finance and Products Services

- [ ] **API Gateway**

- [x] **Process Aggregator**

- [ ] **Edge Service**

- [ ] **Single Database**

- [x] **Mult Databases**

- [x] **Synchronous Events‌**

- [ ] **Log Aggregation**

- [ ] **Metric Aggregation**
