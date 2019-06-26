# FEBootcamp2019 - day 2

Bootcamp participants'excercises for the second Angular presentation

## Template form

1. As a user I want to be able to create new Events
    - Add a new Event button on the top of the list
    - Generate a create new Event component
    - Create a template form representing the data for the new Event.
      Can contain the following details:
        - title
        - type
        - creation / due date
        - country
        - description
    - Add submit button and on click append the Event to the existing Event list
    - Add template form validations
        - title and description -> required, minlength 3
        - creation / due date -> valid date
        - type (enum) -> required, dropdown
        - submit -> disabled if there is any invalid field
    - Show custom error message for name (use css/directives)

## Reactive form

1. Tech task - refactore Template form to use Reactive form 
In order to have a history, create a new component 'create-event-reactive.component.ts' and use this new component to create Events.
    - Add validators to FormControl
    - Add FormGroup for title and details(for rest of properties)

## Routing

1. As a user I want to have a home component (Show a home message)
The Event list should always be displayed and a content given by the router

2. As a user I want to have a home component route
3. As a user I want to be redirected to another page when a user clicks "More info"
4. As a user I want to see the content based on the selected "More info" and render event informations. (event/{id})
5. As a user I want to have a not found route for an unmatched url
6. As a user I want to have in navigation a link to display home component(logo)
7. Add prevent navigation back while user details form is dirty (user can dismiss changes)

## Directives

1. Tech task - refactor validators on create Event form to use build-in directives (ex: ngIf, ng-container)
2. Tech task - Generate custom directive to add a RebeccaPurple border if field starts with an upper-case letter, for example 'J' on the Event name

## Pipes

1. As a user I want to change the format of the Creation Date in event (ex: MM-DD-YY h)
2. As a user I want to add dynamic text to Description for Events created after 2015.
"After 2015: description asd asd" if creation date > 2015.

## Services

1. Tech task - Genereate an user-info-service
2. Tech task - Move the mocked data to the service

## Server communication

1.   Tech task - Create a new method to get Event list to return a promise and use then
2.   Tech task - Create a new method to get Events using Observable.of and use subscribe to get the data
3.   Tech task - Use the async pipe on the observable method defined earlier
4.   Tech task - Use two operators from RxJS (ex: map, filter, catchError) -> return just the online Events



