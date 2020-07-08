Nrwl
ANgular Console
=====================================================================================
Create package.json using following command with default settings
npm init -y

TO install the Runtime dependencies
npm install --save <PACKAGE-NAME>

To install the dev./test time depedmnencies
npm install --save-dev <PACKAGE-NAME>
======================================================================================
Angular Decorators

- These are the objects used to define behavior for
  - Class
  - Property
  - Method
- Following Decorators
  - @NgModule
    - Applied on class to define the class as Angular Module aka Contianer
    - Properties of NgModule
      - imports: Of the type array, this is used to load standard and external Angular module in the current Application
      - declarations: Of the type array, this is used to declare references of all components, directives and pipes for the current application in the container provided by NgModule
      - providers: Of the type array, this is used to initialize the Dependency container to register all Angular Services so that they can be injected in Components/Directives/Pipes etc
      - bootstrap: Of the type array, this is used to define components to be bootstrap means rendered by the BrowserModule when the app is loaded.
  - @Component
    - Applied on class to make it as Angular Component
  - @Injectable
    - Applied on class to make it as Angular Service
  - @Directive
    - Applied on class to make it as Angular Directive
  - @Pipe
    - Applied on class to make it as Angular Pipe
  - @Input
    - Applied on Class property to accept data from the container
  - @Output
    - Applied on 'EventListener' to emit an event from child class to parent
  - @HostListener
    - Applied on method to host an event on the method, so that when an event is raised the method will be executed

======================================================================================
Angular 'Ivy' compilation

- Combination of Ahead-of-Time (AoT) and HTML Markup compression
- Reduce the Production out put at an average by 80%
- Ivy aka the Next-Generation View-Engine
  - Compile HTML Template into JSOM

=========================================================================
Programming With Angualar

1. Databinding
   1. Interpolation aka Expression Binding
      1. Read-Only Binding
      2. Syntax
         1. {{<PROPERTY-NAME>}}
         2. e.g. {{header}}
      3. Interpolation also evaluate Expression {{2+3}}
   2. Property Binding
      1. Binding public data member of Component with the Read/Write attribute of HTML element
         1. <input type="text" id="txt" name="t" [value]="<PROPERTY>">
         2. [value], [href], [checked], [disabled]
   3. Event Binding
      1. Binding a public method of the component with an event of HTML element
      2. <input type="button" value="Click Me" (click)="<METHOD>()">
      3. (click), (change) (keyup), (blur), ect
   4. Two-Way Binding
      1. Combination of Property Binding and EVent Binding
      2. [(ngModel)] = "<PROPERTY-FROM-COMPONENT>"
      3. ngModel is a Attribute Directive of Angular that is used for Two-Way binding
      4. To Excute ngModel, please import FormsModule from @angular/form in @NgModule imports array
      5. ngModel
         1. Has 'ngModelChanged' event, this will be fired for the default event of UI element on wheich ngMOdel is applied e.g. keyUp event for input-text element
         2. Read the updated value of the element, it will pass the value to the component for the property being updated.
         3. Component will be updated and it will update all properties dependeing on the updated property
         4. Component will pass the updated value back to HTML UI and HTML UI will be updated
2. Component Communication
3. HTTP Communication
4. Angular Elements
   1. LitElements
   2. Angular Elements
   3. Micro-Front-Ends
5. Cutomization
   1. Custom Directives
   2. Custom Decorators
   3. Custom Pipes
6. NGRX
7. Angular Testing
   1. Enzyme and Jest
8. Using Gulp
9. IOTA CSS

======================================================================
Angular Assignment 1
Create a Calculator like Windows Calculator
