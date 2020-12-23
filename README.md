# personList
List of persons from randomuser.me api

That is a simple app consuming an api from randomuser.me to learn get info from an api using AXIOS.

_________________________
Actualizations:

I changed randomuser.me for json server.
To use it I installed this service in my computer and for start I have to call the above command on the folder of this service:

json-server --watch db.json

NOTE: In the json server documentation says that we have to use (localhost:3000) like baseURL but with EXPO I musted change it to "http://10.0.2.2:3000/".

At this project I'm using Navigation Stack to navigate between components.

Functionalities:
* List all persons
* Update a alredy recorded person
* Include a new person
* Search persons for or email or name
* Show Details of one person

The list of persons should show:
* A small photo
* Name of person
* Email of person

The Detail should show:
* One Photo
* Name
* Full adress
* Email
* Phone
* etc

The search function must be like a modal and return a filtred list of persons (filtred by or name or email)

I'll build it with functional componets (useCalback, useEffect, useSate...) 

