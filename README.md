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



