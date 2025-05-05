# Family_Todo
## General Overview:
For familes who want to add a little organization to their lives.
In today's world it's easy to get overwhelmed with task and errands.
All to often we forget to do something. That is the problem that this App fixes!

Every member has there own personal list of things they need to do.
Members part of a family have access to the family's todos as well.

I have made a video tutorial showing
how to build this application step by step.

link to video: [Flask CRUD API Tutorial](https://www.youtube.com/watch?v=qKOCXL5ZseA)

An Flask API used to perform 
CRUD(Create, Read, Update, Delete) on:
- Family Objects
- Member Objects
- TodoItem Objects

## Tech Used:

1. Flask
2. SQLAlchemy
3. Pyjwt
4. Python-dotenv
5. PostgreSQL

## Key Features:

### Family objects

1. Contains a list of Members
2. Contains a list of TodoItems

### Member objects 

3. Contains a list of TodoItems
4. May be a Member of a Family
 
### TodoItem objects 

5. Contains a Description field
6. Contains a Urgency field
7. Contains a Completed field

## Setup

First step is install **virtualenv**:

``` bash
pip install virtualenv

```

Next is to create a **virutal enviroment**:

``` bash
python -m venv venv-name

```

Then activate the **virtual enviroment**:

-For **Windows**

``` bash
path\to\venv-name\Scripts\activate.bat

```

-For **Linux**

``` bash
source path/to/venv-name/bin/activate

```

In the the main directory there is a **requirements.txt** file.
Which is used to install the required dependencies 

How to use **requirements.txt**:

``` bash
pip install -r requirements.txt

```

Add your own **.env** file to your project.
Put your environment properties in there.


To start the Flask Application on a development server 
run command in your application main folder:

``` bash
flask --app app run

```

## Usage

### Admin/Member endpoints:

1. Create Member

  - ``` bash
    [POST] http://127.0.0.1:5000/admin/signup
    ```
   
2. Login Member
  
  - ``` bash
    [POST] http://127.0.0.1:5000/admin/login
   
    ```
   After login get token from response and in your Headers create **Key** Authorization and set the **token** as the **value**. The below endpoints require this to access the data.
   
4. Get Member
  
  - ``` bash
    [GET] http://127.0.0.1:5000/member/
   
    ```
   
5. Get Member By Id
  
  - ``` bash
    [GET] http://127.0.0.1:5000/member/<id>
   
    ```
   
6. Update Member 
  
  - ``` bash
    [PUT] http://127.0.0.1:5000/member/update
   
    ```

7. Delete Member
  
  - ``` bash
    [DELETE] http://127.0.0.1:5000/member/delete/<id>
   
    ```
### Family endpoints:

1. Create Family
  
  - ``` bash
    [POST] http://127.0.0.1:5000/family/create
   
    ```
   
2. Get Family
  
  - ``` bash
    [GET] http://127.0.0.1:5000/family/
   
    ```

3. Update Family
  
  - ``` bash
    [PUT] http://127.0.0.1:5000/family/update
   
    ```

4. Add Member to Family
  
  - ``` bash
    [PUT] http://127.0.0.1:5000/family/member/add
   
    ```

5. Remove Family Member By Id
  
  - ``` bash
    [DELETE] http://127.0.0.1:5000/family/member/<id>
   
    ```

6. Delete Family
  
  - ``` bash
    [DELETE] http://127.0.0.1:5000/family/delete
   
    ```
   
### TodoItem endpoints:

1. Create Member TodoItem
  
  - ``` bash
    [POST]http://127.0.0.1:5000/todos/create
   
    ```
   
2. Create Family TodoItem
  
  - ``` bash
    [POST] http://127.0.0.1:5000/todos/family/create
   
    ```

3. Get TodoItem By Id
  
  - ``` bash
    [GET] http://127.0.0.1:5000/todos/<id>
   
    ```

4. Get All Member TodoItems
  
  - ``` bash
    [GET] http://127.0.0.1:5000/todos/all
   
    ```

5. Get All Family TodoItems
  
  - ``` bash
    [GET] http://127.0.0.1:5000/todos/family/all
   
    ```

6. Update Todo Item By Id
  
  - ``` bash
    [PUT] http://127.0.0.1:5000/todos/update/<id>
   
    ```

7. Delete Todo Item By Id
  
  - ``` bash
    [DELETE] http://127.0.0.1:5000/todos/delete/<id>
   
    ```

## Project Status

- In progress

## Room for Improvement

- Implement feature to allow a family member to add todo 
from family's todo list to member todo list.

- Return family todo's when getting family object.

## Acknowledgements/Resources

- https://www.patricksoftwareblog.com/

- https://www.youtube.com/watch?v=OLsVfmjEpSc

- https://flask.palletsprojects.com/en/2.3.x/patterns/appfactories/
















