Problem Statement
1. Develop 2 microservices (any language) that communicates with one another using either gRPC
or HTTP. (This choice of protocol is left to the person attempting the assignment)
2. Lets say:
a. 1st Microservice: M1
b. 2nd Microservice: M2
3. M1 is a client facing microservice that exposes a simple REST endpoint to input a message
from the user in JSON format.
4. M1 then relays the received message to M2 by communicating over gRPC or HTTP.
5. M2 then stores this message either in a local storage (say file based storage) or uses a remote
database. (either one is ok)
6. After storage, M2 then integrates with a sample Slack app and sends this message(received
from M1) to any one of the slack channels.
7. Feel free to Create your own slack app for demo purposes
8. Slack API documentation: https://api.slack.com/

install docker, start docker and run below commands to start microservices.

```docker build -t assignment .```

```docker run -p 80:80 assignment```

or run using direct command using existing image.

```docker run -p 80:80 janumpally/assignment```


Test Micro Services using below command, json is stored in sqlite db locally and description is slack message.

```curl --location --request POST 'http://15.206.66.177' \
   --header 'Content-Type: application/json' \
   --data-raw '{
       "id": 1,
       "description": "Hi How are You?"
   
   }'```



