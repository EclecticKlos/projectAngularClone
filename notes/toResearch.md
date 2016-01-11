SETUP
X  Jasmine
    Behavior driven JS testing framework, influenced by RSpec
X  PhantomJS headless browser
    Provides automated control of a webpage without a UI, useful for testing; render/understand HTML same way as browser (style, layout, color, font, execution of JS/Ajax)
X  Karma
    JS test runner that is test framework agnostic.
X  Browserify
    "we can use a tool called Browserify to bring the module capabilites to our client-side code. It will process all our files and output a bundle that can be run in a web browser (such as the PhantomJS browser for testing)." Enables NodeJS-style modules on the browser
X  Sinon
    Test spies/stubs/mocks for JS--no dependencies, any testing framework.
X  Stubbing
    Stubbing means replacing a method, function or an entire object with a version that produces hard-coded responses. This is typically used to isolate components from each other, and your code from the outside world. For example, stubbing is often used to decouple tests from storage systems and to hard-code the result of HTTP requests to test code that relies on data from the internet.
X  Mocking
    Mocking is a form of testing that involves verifying behaviour by checking which methods are called during a test. Like stubbing, it involves replacing methods with fake versions, but it also means setting expectations that those methods must be called. This is used to specify contracts between layers of an application, and to test side-effects.
X  Side-effects
    A function or expression that modifies some state or has an observable interaction with calling functions/outside world/scope. Or, a procedure that changes a variable outside its scope.
X  Spies
    Get information about function calls; watch functions and report on how they are called. Ex:
      - How many times a function was called
      - Checking which arguments were passed to a function
X  Preprocessors (xi)
    They do exactly what you think they do.
X  Behavior driven development (https://en.wikipedia.org/wiki/Behavior-driven_development)
    TDD incorporating natural language constructs that express behavior and outcomes
X  Unit testing
    Software development process in which smallest testable parts of app ("units") are individually/independently tested.
X  (Lodash) Array and object manipulation, such as equality checking and cloning (Lo-Dash)
    Lodash enables, among other things, data manipulation in a browser/native-agnostic fashion and with better performance


PART 1: SCOPES
X  ES5 Strict Mode
    1. Throws errors where normal code often silent. 2. Also fixes mistakes that other where engines may have trouble making optimizations (identical code in strict mode may run faster), 3. Prohibts syntax likely to be defined in future ACMAScript
X  Jasmine spys: http://jasmine.github.io/2.0/introduction.html#section-Spies
    Stub any function and tracks it
X  $ (what does it do?)
    Doesn't seem to do anything, just another character(?)
X  Two-way data binding
    1. When properties in model get updated, so does UI
    2. When UI elements get updated, changes propagated to model
  Dirty checking
  beforeEach
  var self = this; pattern: http://alistapart.com/article/getoutbindingsituations
  Reference values in JS
  Idempotence
  !! (JS)
  $eval (JS--likely without $)
  Timout Service (Angular) https://docs.angularjs.org/api/ngMock/service/$timeout
  Side effects
  toBe vs toEqual
  LoDash _.bind === ECMAScript 5 Function.prototype.bind
  forEach ECMA
  Dot Rule of attribute shadowing (https://www.youtube.com/watch?feature=player_detailpage&v=ZhfUv0spHCY#t=1758s)
  Array.every (JS)


  EXPLAIN:
    - $watch and $digest
    - Performance advantages of watches
    - Difference between $timeout and $evalAsync
    - Function from PAGE 30:
      while (this.$$asyncQueue.length) {
      var asyncTask = this.$$asyncQueue.shift();
      asyncTask.scope.$eval(asyncTask.expression);
    }
    - Why is "allows destroying a $watch during a digest" test dirty on first loop? (pg 52)
    - 59 New and old values
    - Prototypical inheritance (JS va Angular) (DailyJS for prototypes and inheritance?)
    - Constructor functions JS
    - Object.create(this) vs ChildScope.prototype = this in:
      Scope.prototype.$new = function() {
        var ChildScope = function() { };
        ChildScope.prototype = this;
        var child = new ChildScope();
        return child;
      };
    - Attribute shadowing


GENERAL
  Lexical scoping
  Memoization

