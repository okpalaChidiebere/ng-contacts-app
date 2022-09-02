# NgContactsApp

I made a contacts app that includes:

- Rendering a list of contacts. With Each contact having an avatar, name and twitter handle.
- You can filter the contacts with a search bar at the top
- On the search list page, we also added a button that allows you to reset the search results state to get back all of the contacts
- We add a button that allows you to remove a contact
- We added a button in the list contacts page(home page) that routes you to the page where you can create a new contact
- In the create contacts page, you enter the name, handle and upload an avatar. Then you can add the contact to the list of contacts.

## Rendering UI with Angular

- You build a large application by building out the smaller Components and putting it all together. Components helps us break the UI into smaller pieces with each pieces having their own responsibilities. This help working on tiny pieces of the app without inadvertently affecting the rest of the app.
- The create thing about Component is that they encourage us to build application using composition instead of inheritance. Eg If you have built a Native mobile application in Android or iOS it makes extensive use of inheritance where if you want to make a UI View/Component, have to have your class extends the predefined class made for the UI you want. In Angular, instead of extending base components to add more UI or behavior, we compose elements in different ways using [nesting](https://angular.io/guide/component-interaction) and [inputs binding](https://angular.io/api/core/Component#setting-component-inputs). You ultimately want your UI components to be independent, focused, and reusable.
- Angular using string templates to render the UI. Alternatively, you can pass in html file which is preferred by developers n general because sometimes your template can be large and you can take advantage of your IDE autoCompletes for more pleasant developer experience while coding.
- When building up ur UI, you will run to cases where you have to conditionally render part of the the UI Components. This is where built in directives in in like `NgFor`, `NgIf`, etc. Learn more [here](https://angular.io/guide/built-in-directives). More video tutorials [here](https://codecraft.tv/courses/angular/built-in-directives/overview/)
- To generate a new component using angular CLI run `ng generate component component-name` or `ng g c component-name`

## Add State To A Component

- When creating a class Component, all the properties of the class you defined are pretty much the state of the class. The [Type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) of the properties can by whatever you want like string, number, boolean, object, arrays, enums, etc.
- After you render that class property in the UI and you update the property during runtime of your app, angular knows to update your UI template accordingly as well.
- **Update state**: In general, state are being updated after user UI events like clicks, dragging view elements if enabled, on App load (right after Component mounts) etc. You can see an example of click handling [here](https://angular.io/tutorial/toh-pt2#add-a-click-event-binding)

## Controlled Components

- A component controlled is a result of the state (component class properties being defined) being rendered in the UI and then modified after. You controlled components can also be in a form as well. Learn about forms in angular [here](https://angular.io/guide/reactive-forms) and [here](https://blog.angular-university.io/introduction-to-angular-2-forms-template-driven-vs-model-driven/)
- A component can be controlled using [built-in(]https://angular.io/guide/built-in-directives) or [custom](https://codecraft.tv/courses/angular/custom-directives/creating-a-custom-directive/) directives as well.

## Lifecycle Events

- Lifecycle events are special methods that each component has that allows us to run custom behavior during certain time of the Component life. See the full list [here](https://angular.io/guide/lifecycle-hooks#sequence-and-frequency-of-all-lifecycle-events) and [here](https://www.stackchief.com/blog/ngOnInit%20Example%20%7C%20Angular)
- Why Lifecycle events are important because you know when and where to run asynchronous events like Server fetch, etc

## Routing and Navigation

We control the browser navigation using Javascript. We make the browser request just once to load the page and the rest of the time its just javascript. The browser back button will work just as the user expects while on our application. You don't want to break that back button feature

- Learn [more](https://angular.io/guide/router) and [here](https://codecraft.tv/courses/angular/routing/overview/)

- On thing to note is that a Screen is still a Component when whenever you navigate to a screen (onInit), it goes through all the angular component life cycle from scratch.

- Using the angular CLI you can add routing to an existing app using `ng generate module app-routing --flat --module=app`

## Angular Services and Observables

- You use **Services** to keep tasks that can be centralized at one place so that you don't have to repeat thesame logic again through out application. Learn more abou Services [here](https://angular.io/tutorial/toh-pt4#why-services). One important thing to know about service is that it follows an hierarchical structure. If you initialize the service class, by adding it to the providers array property, all children of that class will use thesame instance of that class.
- To generate a Service using the Angular CLI run `ng generate service contacts`. [See](https://angular.io/cli/generate#service)
- On this Contacts app, We think that the Contacts needs a service because other part of the application like the ListContactsComponent and the CreateContactComponent will need to person tasks on thesame ContactsList.
- We now made the ContactsList and **observable** because we wanted to listen for changes to the list when the AppComponent make a http request to initialize that list. Observables treats any data you store in it like a stream where parts of your application can subscribe to the stream of data of your observable. Learn more [here](https://blog.angular-university.io/how-to-build-angular2-apps-using-rxjs-observable-data-services-pitfalls-to-avoid/). More example on Angular and Rxjs Observables [here](https://codecraft.tv/courses/angular/reactive-programming-with-rxjs/rxjs-and-angular/)

## Core HTTP API

- The Http client is a service that you can inject into your classes in Angular to use to easily make http request to your backend server. It uses [Reactive programming](https://rxjs.dev/guide/observable) under the hood
- Learn [more](https://angular.io/guide/http)

## Few Aha Moment

- The way [styles](https://angular.io/guide/component-styles#using-component-styles) were applied to Components. It was not as free flowing as React in terms of passing style class names from parent to a child component
