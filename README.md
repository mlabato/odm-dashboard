# Dashboard  for e-commerce website "Outlet de Mates". 

# Introduction

Once i finished my Full Stack Developer studies at Digital House i was excited about giving my first steps as a web developer, so I contacted an instagram entepreneur, Nicolas. He didn't have money to pay me and i didn't have enough experience to develop an e-commerce project alone. So i proposed him to give small steps toward the full project without the pressure of having deadlines. This helped me to keep studying and learning new things.

## Overview
First of all, i had to get in touch with Nicolas' commercial needs, so the first step was to create an SQL database (the script can be found as odm-db.sql) to store all the product's and user's data (the script can be found as odmdata.sql).
I realised that the web needed two services: a back-end and a front-end, both hosted in different servers, communicated by an API. This is the second part of the front end service: while potential consumers can dive in the principal site, i developed this dashboard to give the admins an easy way to update and manage the site.


## Functionalities
The service offer:
- Admin dashboard with CRUD for products and users administration (add, delete, edit)
- API consumption with Fetch
- Routing with react-router
- Stying with Tailwind.css
- Auth with Firebase and JWT

## Framework
- React

## Extra libraries
- Tailwind CSS
- React-Router-dom


## Run this sample!
- Run  the odm-db.sql script in MySQL Workbench or Dbeaver
- Run the odmdata.sql script in MySQL Workbench or Dbeaver
- Run the back-end service server (instructions at https://github.com/mlabato/odmexpress:)
- Open a new terminal
- Run npm install
- Clone this repository
- Run npm start

Back-end repository is hosted on https://github.com/mlabato/odmexpress:



