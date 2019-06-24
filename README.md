# FEBootcamp2019 - Angular Presentation Day1

Bootcamp participants'exercises - 1_Fundamentals_ComponentsTemplates

Events: choose one, like city events, movie events, musical events etc.

1. As a user I want to have a component in order to represent an event, ex:'cgk-event-info', into html (use data binding)
Use the new component into app.component

2. As a user I want to see more events displayed, using the existing created component. 
The events can be mocked in the event-list component.
- use ngFor

3. As a user I want to see only the events that are 7 days older
- so the mocked list of events needs to be changed to have events older or newer

3. Create a sub-component of 'cgk-event-info' and use inline template

4. Add more properties to the model representing the Event, in order to have more informations on the screen. Ex: name, creation date, due date, description etc..

5. Use ngIf by displaying an element like <div> Online Url: {{ event.onlineUrl }} if the type of event is 'online'. 
Hide other properties if make sense.
  
6. Add a property of 'Country' to this event and use ngSwitch in order to display a different 'div', the container event element should have a different class, so that the Country text will have a different color:
- if UK, display blue 
- if RO, display green
- if other countries, display default text.

Or if bootstrapp used, add .text-success or .text-warning or nothing.

7. Move logic of 6) to typescript logic in order to use 'bind class' with a model property.

8. Adapt this binding class in order to add more class names, ex: after it's done, to have in DOM something like:
 < div class="my-blue-class item-class flex-item">...< /div>
 
 9. Add a button to each Event cart, "Show more info". 
 The button should display more Event description. From UI perspective, in the same Event container, display more information
 
 10. Using point 9), make click event to take the index of Event and update 'description' property in order to include the date: currentDate. The year of current day should be +index. SO if currentDate is 05-05-2019 and index is 5, I want to display the: "description event..asdasdasd asd asd. Date 05-05-2024"
 
