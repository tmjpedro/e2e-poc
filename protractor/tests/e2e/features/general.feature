Feature: General
    Scenario: Login to see greeting message
        Given The user go to "http://app-local.COMPANY.com:8080/auth/login/"
        When The user fill "#INSERT_EMAIL#" in the email field
        When The user fill "#INSERT_PASSWORD#" in the password field
        When The user clicks on "submit" button
        Then The user should see "Hi, Tiago"
    @login
    Scenario: Create New App
        Given The user go to "http://app-local.COMPANY.com:8080/dashboard/apps/"
        When The user clicks on "button" button
        Then The user should see new "Untitled app 1" is created
    @login
    Scenario: Rename App
        Given The user go to "http://app-local.COMPANY.com:8080/dashboard/apps/"
        When The user click on edit name and delete text, add "New App" and press Enter
        Then The user should be able to see app name is updated to "New App"
    
   
