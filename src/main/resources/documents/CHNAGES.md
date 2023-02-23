# Changes Per Version

## Changes in version 2.0.0
##### FEATURE:  Import / Export configuration - Backend only:
            1. Add the ability to export the configuration using the REST API
            2. Add the ability to import the configuration using the REST API
            3. Add the ability to delete / clear the configuration using the REST API

##### FEATURE:  Charts Dashboard - Backend and Frontend:
            Create the dashboard screen with relevant charts, like:
            1. Deposit and Withdraw chart
            2. Withdraw chart
            3. Deposit Per Person
            4. Deposit per month
            5. Withdraw Per reason

##### ENHANCE:  UI production build:
            1. run the UI npm build in pom.xml when running mvn clean install command
            2. copy the ui build folder to target/classes/static folder

##### BUG FIX:  Fix the BrowserRoute issue:
            1. add the MainController class to return the public/index.html file to any request
            2. copy the index.xml file to resource/public folder


## Changes in version 1.0.0
