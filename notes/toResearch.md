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
    This is synonymous with digestion cycle
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
  _.forEach LowDash
  Dot Rule of attribute shadowing (https://www.youtube.com/watch?feature=player_detailpage&v=ZhfUv0spHCY#t=1758s)
  Array.every (JS)
  LoDash _.forOwn function and _.forEach function


PART 2: EXPRESSIONS AND FILTERS
X  Expressions
    Bind behavior and data to HTML markup using directives (like ngClass/ngClick) and to contents and attributes of DOM elements using interpolation syntax {{}}
    Custom designed to access and manipulate data on scope objects, and not much  else
X  Filters
    Run by adding Unix-style pipe '|' chars to expressions to modify their return values
    Extend JS functionality, thus not pure Javascript
X  with()
    Forbidden in ECMAScript 5 strict mode
  Content Security Policy
  Literal Expressions
    Simple data expressions that represent themselves (like numbers, strings arrays)
  Tokens:
    In this case, an object that gives the AST Builder all the info it needs to construct an abstract syntax tree.
      1. The text taht the token was parsed from
      2. The numeric value of the token
      EX: Num 42
        {
          text: '42',
          value: 42
      }
  Lexicographical comparison vs numeric comparison (JS)


  EXPLAIN:
  X  $watch
      - When a databinding is created in view to a variable on the $scope object, a watch is created in Angular internally, ie Angular is watching the variable.
      - Created using $scope.$watch()
      - Passed two functions as parameters:
          Value function
            Returns the value which is being watched
            Angular then checks the value returned against the last call for changes
          Listener function

              EX: $scope.$watch(function(scope) { return scope.data.myVar; },
                                function(newValue, oldValue) {
                                  document.getElementById("").innerHTML =
                                    "" + newValue + "";
                                }
                                );
      http://tutorials.jenkov.com/angularjs/watch-digest-apply.html

X    $digest
      - Is what triggers the databinding to update
      - Iterates through all watches on $scope object (and child $scope objects, if any) and checks if any of the watched variables have changed.
      - If watched variable has changed, listener function called
        - EX: listener function may change the HTML text to reflect new value of watched variable

X    $apply
      - If $scope.$watch/$scope.$digest not called automatically by Angular.
      - $scope.$apply executes some code, then calls $scope.$digest (thus all watches checked, corresponding listeners called).
      - Useful for integrating Angular with other code
      EX:
        $scope.$apply(function() {
          $scope.data.myVar = "Another value";
        });
    Performance advantages of watches
    Difference between $timeout and $evalAsync
    Function from PAGE 30:
      while (this.$$asyncQueue.length) {
      var asyncTask = this.$$asyncQueue.shift();
      asyncTask.scope.$eval(asyncTask.expression);
    }
    Why is "allows destroying a $watch during a digest" test dirty on first loop? (pg 52)
    59 New and old values
    Prototypical inheritance (JS va Angular) (DailyJS for prototypes and inheritance?)
    Constructor functions JS
    Object.create(this) vs ChildScope.prototype = this in:
      Scope.prototype.$new = function() {
        var ChildScope = function() { };
        ChildScope.prototype = this;
        var child = new ChildScope();
        return child;
      };
    Attribute shadowing
    $digest vs $apply
    Reference v value
      - Two different strategies for identifying changes in watches
      - Chosen between the two by passing boolean flag to $watch function
    $watchCollection
    DOM NodeList https://developer.mozilla.org/en/docs/Web/API/NodeList
X    Scope event system, a publish-subscribe messaging pattern ("pub/sub")
      - When something significant happens, you can publish that information on the scope as an event. Other parts of app may subscribe ("listeners") to receive the event and be notified.
      - The scope acts as a mediator between blind publishers and blind subscribers (ie, scope decouples sublishers from subscribers)
      - Diff with Angular (vs JQuery/Backbone): Baked into scope hierarchy
        - See: http://api.jquery.com/trigger/ and http://backbonejs.org/#Events
      - Can choose between two propagation modes: up scope hierarchy or down the scope hierarchy
        - Up = emitting: subscribers on current and ancestor scopes get notified
        - Down = broadcasting: subscribers on current and descendants scopes notified
      - Scope event system does not propagate native DOM events such as clicks or resizes--that's for angular.element
    Isolated children and why they don't have their own $$listeners collection
    Non-angular apply (page 138) method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
    Difference between Jasmine toBe and toEqual
    $$everyScope function (in $$digestOnce) = depth-first traversal of tree -- explain!
      - Why is broadcasting more expensive than emitting?
        - Two reasons (one hint: stopping)
    For security, why limited to executing in the context of a scope rather than a global object (like window)? 159
    $parse
      Whenever expressions used in Angular, JS functions get generated behind under the hood, which get repeatedly executed when the expressions are evaluated during digests.
      FOUR COMPONENTS OF PARSE SERVICE:
        Lexer
          Takes original expression string and returns an array of tokens parsed from that string.
            EX: "a + b" results in a, +, b.
        AST Builder
          Takes the array of tokens generated by the lexer, builds up Abstract Syntax Tree (AST) from them.
          Tree represents syntactic structure of the expresses as nested JS objects
          EX:
            a, +, b
            {
              type: AST.BinaryExpression,
              operator: '+',
              left: {
                type: AST.Identifier,
                name: 'a'
              },
              right: {
                type: AST.Identifier,
                name: 'a'
              },
            }
        AST Compiler
          Compiles AST (Abstract Syntax Tree) into a JS function that evaluates the expression represented in the tree.
            EX:
              function(scope) {
              return scope.a + scope.b
            }
        Parser
          Responsible for combining low-level steps above.
          Delegates heavy liftiing to the Lexer, AST Builder, AST Compiler





GENERAL
  Lexical scoping
  Memoization








  NOT COVERED/IMPLEMENTED:
  - Very clear error messages: bookkeeping done by angular includes tracking locations of characters and tokens in input strings.
  - In the presence of an HTML Content Security Policy, Angular switches to interpreted mode. This will only have a compiled mode and thus would not work with a CSP.


