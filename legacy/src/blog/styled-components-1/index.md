---
title: Building my own component library pt.1
date: "2019-10-10"
description: How I'm using styled components to build my own flexible component library for my new side project.
---

I'm in the early stages of working on a new side project and it's way too early to share about it in detail. I can gladly share that my tech stack includes GraphQL via Apollo Client and Server, SSR via Next.js, and styled components. I've used styled components for several projects as a student at Fullstack Academy but am now discovering just how powerful and flexible it can be.

I'll be using a fairly simple button component as an example of how I am implementing some custom button components in React that can easily be tweaked to fit my projects color scheme.

##Color Scheme
Step one was figuring out how to even begin building my color scheme. I was tempted to use something like [coolers](https://coolors.co/) but found that I didn't really know how to take 4 or 5 colors and expand that into a useable theme for a site. I found [this](https://refactoringui.com/previews/building-your-color-palette/) article along with [this](http://www.colorbox.io/) tool from Lyft which helped me define a palette of six colors which a wide variety of shades that I could use throughout this project. My primary theme for example looks something like this.

```
const primary = {
  1000: "#002D87",
  900: "#0036A0",
  800: "#003EB8",
  700: "#0046CD",
  600: "#0751DD",
  500: "#2367E9",
  400: "#4984F2",
  300: "#7AA7F9",
  200: "#B5CEFD",
  100: "#D3E2FE",
  50: "#F2F6FF"
};
```

I have similar objects for my secondary, neutral, success, warning, and danger colors to give me a consistent palette with a range of shades to use across this project.

##Styled Components Props
Next up I learned that styled components are able to accept props. At first I expected to make new buttons or other components for each color I might need but instead I learned how to make one button component that could use any color from my palette and bring a ton of reusability to a small snippet of code.

```
const Button = styled.button`
  background: ${props => props.color || primary[400]};
  color: ${neutral[100]};
  border: 2px solid ${neutral[100]};
  &:hover {
    color: ${props => props.color || primary[400]};
    background: ${neutral[100]};
    border: 1px solid ${props => props.color || primary[500]};
  }
```

I deleted some of the other styling like the fonts and the sizes so that I could focus on the cool parts here. A few bits of styling here are hard-coded as one of my lightest neutral colors but quite a few are utilizing props with an alternative value of the primary color of my site. Whenever I need to render a button on my page I can import this component and the correct object for the part of my color palette that I would like to use and do something like this...

```
<Button color={primary[400]}>Sign Up</Button>
```

By passing in a variable from my palette object I know that I will be using a color that fits the theme of my site. I could have instead used the success or danger colors depending on the intent of the button. By using styled components in this way I have been able to implement an easily reusable button while keeping a great degree of flexibility in how and when I can use it.

This same pattern has thus far extended pretty well to anything I have tried applying it to. In the instance that I get to a point where it doesn't work the great thing about styled components is that I can make a new component that adds additional CSS onto a previous styled component. All in all styled components are pretty rad so unless you totally hate the idea of CSS in JS you should totally check it out. If you are wondering what those buttons actually like like they are similar but not identical to the ones on the contact form on my site.
