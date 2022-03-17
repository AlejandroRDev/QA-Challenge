

Feature: Validate if the user is able to create a board.

    As a QA Engineer this REST API testing involves testing of CRUD (Create-Read-Update-Delete) 
    actions with methods POST and GET respectively.

    Scenario Outline: Try new User board creation.

        Given User with id and token exists and has a list of boards
        When A POST request is made to create a new board named: <name>
        Then Get the HTTP status code <code>

  Examples:
    |name | code |
    |Challenge | 200 |
    |       | 400 |