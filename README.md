# FEBootcamp2019
Bootcamp participants'excercises for the 3 presentation

Events = chosen event started in Session 1.
Adapt 'Sessions' and 'Speakers' to your chosen 'Event'

## Testing 

Checkout branch '3_Fundamentals_RxjsUnitTests'

1. Tech task - refactor failing tests. Run ng test 
2. Tech task - Change user info tests to pass
3. Tech task - Refactor tests for user list to pass (include it for some tests) 
4. Tech task - Add tests for create user component (include empty tests)

## Feature modules

1. Tech task - refactor and move chosen Events components to Event module
2. Tech task - refactor and move to Share module all the components / directives / pipes which can be shared for other pages as well

## Routing

1. Add go from Events to 'Sessions' and 'Speakers'. 
Add new components

2. Tech task - Implement a routing resolver on 'chat/:id' to resolve the UserId from BE.
Meaning we should show the user details in chat.component if the user exists.

## Dynamic component

1. As a user I want to use a colapsable/button to show/hide user details when I am discussing with a friend (in chat.component).
Create a new component if easier.

## Change detection

1. Refactor add Event to be immutable 
2. Create a long Event list mock and refactor the Event list component using OnPush (check profile render speeds)

## RxJS

1. Add search logic for Event list (use distinctUntilChange, skipWhile)
2. Remove all promises and use only Observables
