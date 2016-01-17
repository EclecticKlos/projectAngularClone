'use strict';

function parse (expr) {
  var lexer = new Lexer();
  var parser = new Parser();
  return parser.parse(expr);
}

function Lexer() {
}

//Executes tokenization
Lexer.prototype.lex = function(text) {
  this.text = text;     // Original string
  this.index = 0;       // Current character index in string
  this.ch = undefined;  // Current character
  this.tokens = [];     // Resulting collection of tokens

  while (this.index < this.text.length) {   // Loops over all chars in input string, forms collection of tokens
    this.ch = this.text.charAt(this.index);
    if (this.isNumber(this.ch)) {
      this.readNumber();
    } else {
      throw 'Unexpected next character: ' + this.ch;
    }
  }
  return this.tokens;
};

Lexer.prototype.isNumber = function(ch) {
  return '0' <= ch && ch <= '9';
};

// AST Builder.
function AST(lexer) {
  this.lexer = lexer;
}

AST.prototype.ast = function(text) {
  this.tokens = this.lexer.lex(text);
};

function ASTCompiler(astBuilder) {
  this.astBuilder = astBuilder;
}

ASTCompiler.prototype.compile = function(text) {
  var ast = this.astBuilder.ast(text);
};

function Parser(lexer) {
  this.lexer = lexer;
  this.ast = new AST(this.lexer);
  this.astCompiler = new ASTCompiler(this.ast);
}

Parser.prototype.parse = function(text) {
  return this.astCompiler.compile(text);
};

module.exports = parse;
