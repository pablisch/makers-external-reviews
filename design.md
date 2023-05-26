# Makers review 3 design notes

Mega soft weird make word processors.
feature spell checker.

input string - "words"	"words".
output string to be highlighted with tilde - "wrds"	"~wrds~".

arg error if not a string.
no input when empty string provided.
number and symbols ok unless they result in a spelling error.

Initially working with a small wordset.
This test will use a wordset, one to six as words.

Case remains the same 
"WRDS"	"~WRDS~"
"WordS"	"WordS"

input  |  output
"words"	"words"
"wrds"	"~wrds~"
"WRDS"	"~WRDS~"
"WordS"	"WordS"

