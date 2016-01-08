SETUP
  Jasmine
  PhantomJS headless browser
  Karma
  Browserify
    "we can use a tool called Browserify to bring the module capabilites to our client-side code. It will process all our files and output a bundle that can be run in a web browser (such as the PhantomJS browser for testing)."
  Sinon
  Preprocessors (xi)
  Behavior driven development (https://en.wikipedia.org/wiki/Behavior-driven_development)
  Unit testing
  CommonJS
  Array and object manipulation, such as equality checking and cloning (Lo-Dash)

PART 1: SCOPES
  ES5 Strict Mode
  Jasmine spys: http://jasmine.github.io/2.0/introduction.html#section-Spies
  $ (what does it do?)
  Dirty checking
  beforeEach
  var self = this; pattern: http://alistapart.com/article/getoutbindingsituations
  Reference values in JS
  Idempotence
  !! (JS)
  $eval (JS--likely without $)
  Timout Service (Angular) https://docs.angularjs.org/api/ngMock/service/$timeout

  EXPLAIN:
    - $watch and $digest
    - Performance advantages of watches
    - Difference between $timeout and $evalAsync
    - Function from PAGE 30:
      while (this.$$asyncQueue.length) {
      var asyncTask = this.$$asyncQueue.shift();
      asyncTask.scope.$eval(asyncTask.expression);
    }


GENERAL
  Lexical scoping
  Memoization

