const content = {
    hero: "Ever wondered how a simple clculator actually works? In this turtorial, we'll dive into the world of stack data structure and how this data structure is used in the workings of a calculator.",
    problemStatement: {
        intro : "Let’s say we are trying to add two numbers:",
        simpleExpresion: "Seems pretty easy to handle with code, doesn’t it? Maybe we run a loop, remember the numbers and the “+” sign. At the end, we add both the numbers. If we encountered a “*” sign, we’d have multiplied both the numbers. However, let’s say we’re trying to solve the following:",
        complexExpression: "Now suddenly everything has become much more complex. Imagine the number of times we’ll have to iterate over the expression, how to decide/store which expression to solve for first etc. Don’t even start on the time complexity! Hold on. Not all hope is lost. To our rescue, comes the Stack data structure. Okay, let’s take a quick detour. We’ll come back to the calculator problem shortly"
    },
    stack: {
        intro: "A Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out). LIFO implies that the element that is inserted last, comes out first and FILO implies that the element that is inserted first, comes out last. It behaves like a stack of plates, where the last plate added is the first one to be removed."
        
    }
}

export {content}