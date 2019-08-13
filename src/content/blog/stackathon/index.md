---
title: What I learned from re-writing my hackathon project.
date: "2019-08-12"
description: About halfway through a hackathon I decided to re-write about 80% of the project.  Here are some of the reasons that I rewrote it and my takeaways from that process.
---
Our second project during the Senior Phase at Fullstack Academy was a four day hackathon called "Stackathon."  I had considered two possible ideas for my project but quickly settled on trying to recreate an electric guitar pedalboard in the browser as my other idea was closer to being a startup than a hackathon project.

Fairly quickly I narrowed down the stack that I would use to React, CSS using Styled Components, and Tone.JS.  I knew that I wanted to learn how to use React Hooks so I decided that I would only use function components so that I would have to use hooks to manage the apps state.  The only other external library I ended up using with an npm module called react-touch-knobs.  I initially wanted to recreate the look and feel of a physical knob using CSS and Javascript but that ended up being one challenge that I was not able to solve in those four days.

## Version 1
I fairly quickly got a proof of concept working, it wasn't necessarily clean but very few people would have known that without actually reading my code unless they had experience with electric guitar and knowledge about the typical ordering of different effects pedals.  I didn't even notice one of my major issues until I had completed what I had considered to be the minimum viable product for this project.  My initial inclination was that this project would be good enough and that I could take it fairly easy for the next few days.  A teaching fellow saw my code for some of the app and pushed me to consider what a better design principle might be to approach this project with.  Now that I've had what I consider to be a fairly significant breakthrough I'm less embarrassed to share a chunk of my first version of this app here.

```javascript
const DelayPedal = props => {
  const [connected, setConnected] = useState(false);
  const handleToggleOn = () => {
    if (connected) {
      props.player.disconnect(props.delay);
      setConnected(false);
    } else {
      props.player.connect(props.delay);
      setConnected(true);
    }
  };

   const handleDelayTime = event => {
    props.delay.delayTime.value = event;
  };

   const handleFeedback = event => {
    props.delay.feedback.value = event;
  };

   const handleDryWet = event => {
    props.delay.wet.value = event;
  };
```
This is just the code before I even get to the return statement of this component.  It is about twice as many lines when you account for the return function.  While I was hacking it together I felt fairly good about it but on further review there's a number of problems that I was able to identify.  The first is what the same teaching fellow I mentioned earlier calls an "anti-pattern".  I am accessing all of the different functionality from Tone by declaring it in my high level components and passing it down as props.  Not only is that part not a typical pattern but I am mutating different values on my props, which I now understand is a big no-no in react as changing props might not necessarily  cause all the other components to render properly.  A second concern with this code is the duplication of similar functionality with the different handler functions.  It took a great deal of time for me to wrap my head around what a better design might look like for this app but finally on the train ride home I had a breakthrough!

## AHA!
My app only does four things.  This could have been discouraging but for me it was a revelation in how to simplify my app and additionally set it up to be easier to improve in the future.  I simply had to be able to toggle if an effect was active or not, change the value on a knob, set an audio source, and toggle if the audio source was active or not.  The realization that I essentially had four types of actions led me to pursue a redux like pattern to my application design.  There is only one problem:  I already know Redux.  I set out on this project to learn new frameworks or tools so I wanted to find a different way to approach this problem.  The solution, while still quite similar to redux, was to implement the useReducer() and useContext() hooks in my application to create a centralized state.  Here is how my initial state became organized in it's own file:
```javascript

const SET_POT = "SET_POT";
const TOGGLE_ACTIVE = "TOGGLE_ACTIVE";
const SET_PLAYING = "SET_PLAYING";
const SET_SOURCE = "SET_SOURCE";

export const setPot = (pot, pedal) => ({
  type: SET_POT,
  pot,
  pedal
});

export const toggleActive = pedal => ({
  type: TOGGLE_ACTIVE,
  pedal
});

export const setPlaying = playing => ({
  type: SET_PLAYING,
  playing
});

export const setSource = source => ({
  type: SET_SOURCE,
  source
});

export const reducer = (state, action) => {
  //a switch with different reducers
};

const initialState = {
  //A big object related to the different settings on the different pedals.  I'll link the repo at the end of the blog if you want to see it
};

const PedalProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PedalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </PedalContext.Provider>
  );
};
```
After creating this centralized state containing all the data about my effects and wrapping my highest level components in a context provider I was able to bring state and dispatch wherever they were needed with one simple hook.
```javascript
const { state, dispatch } = useContext(PedalContext);
```
This replaces almost twenty lines of code per pedal which results to almost 100 lines of unnecessary code eliminated and a much clearer intention shown by my code.  Instead of directly mutating values on all of my Tone elements I would instead dispatch an action to my central state that would trigger a re-render.  One more hook saves the day for how to make this re-render interact with all of my Tone effects.
```javascript
useEffect(() => {
    handleStateChange(state);
  });
```
useEffect is effectively a replacement for life-cycle methods.  In my case, I made one file for all of my code related to my tone effects and exported handleStateChange().  The useEffect hook calls this helper function every time a re-render happens (because the state has changed) and calls this helper function which will then actually perform side effects in my Tone file (I'm not going to in depth about the Tone file today because that is my next target for refactoring and I would love to do a post comparing the before and after of that file).
## Version 2
So what is actually different about Version 2 of React FX?  If I were to show you a screenshot of the two versions they would appear identical because the only thing that I did not modify is the user interface.  Under the hood things function quite differently.  Because there is now a central source of data for this app there are several things that become easier or possible at all.  Now that my user interface, data, and audio files are clearly separated I can test them more easily and make changes without causing unintended bugs.  I also will be able to build in functionality to change the order in which the audio is routed through these pedals which would have been so complicated with my original code that it wouldn't have been worth pursuing.  One idea that was suggested to me that also becomes possible is that people could share their settings either locally or online and share them with each other simply by replacing the initial state with their particular data.

All in all I think that getting more experience in application architecture and design was far more important than tacking on a few additional features to an app that was already pretty cool (in my opinion).  Discovering for the first time how to break an app down to it's simplest parts gives me the confidence that I will be able to do so again in the future.  If you've made it this far I'm sure you would be interested in checking out the [repo](https://github.com/benpjenkins/react-fx).  I've got one bug I need to fix still due to webpack hashing the name of the built in mp3 file.  Unfortunately my next big project starts tomorrow and I may be unable to work on that bug for a few weeks but I do hope to get around to squashing any remaining bugs and adding additional functionality in the future.
