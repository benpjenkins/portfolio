---
title: Javascript Gotchas and Trivia
date: "2019-10-25"
description: Some common misunderstandings and Javascript trivia that I have run into recently.
---
Recently I learned a little about how Automatic Semicolon Insertion works in Javascript and wanted to try to put together a list of some of the things I know about Javascript that are confusing or problematic in my opinion.  These are probably aimed more for beginners than experienced Javascript developers but I hope to keep expanding on this post as I think of some more good examples (really I just want more people to know about Automatic Semicolon Insertion and wanted to pad it out with a few more things I've developed some opinions about).

##Automatic Semicolon Insertion

What is the output of this function?
```javascript
const returnObject = () => {
  return
    {
      isBenAwesome: true;
    }
}
```
It seems intended to return an object telling you that I'm awesome but this function actually returns undefined thanks to Automatic Semicolon Insertion.  Douglas Crockford splits Javascript into the good parts, the bad parts, and the awful parts (which are bad parts that you can't avoid using).  Automatic Semicolon Insertion fits under the awful parts and after learning more about it feels like an incredibly dangerous language feature.  If a program is being parsed and finds code that it expects to be terminated with a semicolon that doesn't seem to be following Javascript's grammar rules it will insert one automatically.  The previous example ends up running more like this:
```javascript
const returnObject = () => {
  return;
    {
      isBenAwesome: true;
    }
}
```

This theoretically makes it easier to write Javascript that can successfully be executed but in every example I have ever found it only causes things to behave in strange and unexpected ways.  If it were up to me I would choose to throw syntax errors instead of having semicolons inserted because it would cause the edge cases where ASI happens and causes trouble to be much easier to reason about.  Unfortunately this isn't an option so the next best choice is to strictly follow the rules and allows use semicolons in your code.  Linters, opinionated code formatters, and a solid understanding of correct Javascript syntax is about the only option here.

##The ++ Operator
This is a simpler than ASI but can still be problematic if multiple contributors to a code base are using the ++ operator in different ways.  What is the difference between these two snippets?

```javascript
let i = 0;
i++;
++i;
```
In some situations these two examples of incrementing might result in the same observable behavior but they are actually doing slightly different things.  In the first example (postfix) returns the value and then increments it while the second increments it and then returns it.

Why is this a problem?  For me it's just confusing that incrementing can be done differently in different situations. It might result in situations where it's a little tough to track down why a value seems to be off by 1 at a given time.  My preferred way to increment at the moment is...
```javascript
let i = 0;
i += 1;
```
The syntax isn't as nice to look at but I like that this method always does the same thing.  If I were working on a project as part of a team that used += instead of ++ I could know for sure that incrementing was working the same way throughout the entire application and would feel more confident that we wouldn't encounter any off by 1 errors.

##+ and ==
This heading might lead you to believe that this is a similar problem to the last section but it's actually quite different;
Take this code for example:
```javascript
let sum = 1 + 2;
//sum === 3
let concatenatedString = 'a' + 'b';
//concatenatedString === 'ab'
```
Neither of these examples are doing anything too wild or difficult to reason about but it illustrates why the + operator can be problematic.  It is doing completely different work in these two examples!  It becomes even more problematic because we can do something like this:
```javascript
let something = 1 + "2";
```
I'm know that there are specific rules about how Javascript deals with every way you can use the + operator on both a string and a number but it's not intuitive or easy to reason about.  Anytime a computer is implicitly changing the type of something feels scary to me.  I don't expect people with lots of experience in Javascript to be doing something like the example above but it is possible and if it is happening in a code base it isn't immediately clear that there is an issue because it is valid Javascript.

== also opens up a whole world of trouble.  Now things like 2 == '2' and null == undefined are true.  I have never encountered an example where I would prefer to use == over ===.

If I do need to coerce a value to a different type I explicitly do that before I try to evaluate it in any way so that there are clear steps I can look at in the future and see that I explicitly intended to turn a string into a number or vice versa.
I might be able to remember a day later that I was trying to use one of these operators on two different types of values but 3-4 months down the line it will be almost impossible and will make debugging a real pain.

##NaN

NaN represents when something when a number or math function can't be parsed but has a variety of interesting behaviors when comparing it to certain values or when using isNaN() to calculate other values.  Let's just jump right into some examples.
```javascript
typeof NaN
//number, i know right....

NaN === NaN
//false

isNaN(NaN);
//true
```
NaN isn't something I have explicitly tried to use and often indicates for me that I have done something seriously wrong with a calculation somewhere.  I have to say that after seeing some examples of comparing NaN and using isNaN() I would not be very confident in maintaining a code base that used these.  There is just too much odd behavior to remember for something that would be necessary so rarely (if ever).

##Takeaways

The big takeaway from me briefly mentioning all of these is that they might introduce confusion into a program and the way code is executing.  They are also unnecessary complications in most situations and almost always have alternatives that will result in more readable code that can be more easily understood and therefore easier to reason about.
