---
title: Implementing maps with React Native
date: "2019-09-06"
description: My reflections about my capstone project at Fullstack Academy and what I learned about working with maps.
---

For my capstone project at Fullstack Academy my group created Stroll, an app for finding or creating nearby walking tours.  Now that the project is complete I feel like I have an informed opinion on working with maps in react native and some of the important choices to make along the way.

##Map Provider

This is a choice that you should make early on if you are planning on working with maps in any way.  Who is your map coming from?  Do you care?  Do you need to display a route on the map?  If so who are you planning on getting that from?

My group chose from the outset to use the react-native-maps library from Airbnb which gave us access to the native map of whichever operating system our app was running on.  This is something that we had felt was important to us but that we had to deviate from later.

React-native-maps allowed us to very quickly have a visible map and display markers or polylines between an array of coordinates.  These polylines were simply connecting the dots and didn't map to any roads or sidewalk but we felt that we had achieved our proof of concept quickly.

##Intelligent Polylines

React native maps had given us the ability to easily grab the coordinates from a tap on the screen and utilize that in many ways.  What we didn't yet have was the ability to make our polylines correspond to any of the actual features on the map.

Here we found a new library to add on top of our existing choice.  React-native-maps-directions allowed us to use the array of coordinates we already had to generate a polyline connecting them all in a way that corresponded to roads or walkways that people could actually use.  A little digging led us to discover that this was simply making calls to the Google Directions API which posed a problem that, while easy to fix, didn't conform to one of our hopes for the app.  Google's terms of use state that if you use their directions API it must be displayed on a map provided by Google.  React-native-maps allowed us to specify that we wanted to use Google as our provider but we found that the performance in certain use cases in our app was not as good as the native Apple map.  React-native-maps really is a wonderful library that helped us so much but I would urge anyone working on software involving maps to see what alternative options might be and weigh the pros and cons are before commiting to one over the other.

##Written Directions

As we continued to add features from our wish list we found another painful spot with our choice of libraries.  We knew that React-Native-Maps-Directions was making calls to the Google Directions API and that it gave us back certain information such as the walk distance and estimated duration.  We assumed that because all the information existed somewhere that it would be trivial to access a list of written directions as well.  It turns out that, although the response this library received from Google had to include this information, it was not accessible to us in any way.  We also learned that making the API calls on our own was tricky as it did not respond well to us adding waypoints into our request.  To solve this problem we had to make a call for the directions from the first to second point, then another call for the second to third, etc...Our API key usage increased in a way where we couldn't possibly implement it in an actual production app as the costs would skyrocket as the app gained users.

While we had our list of written directions I do have to wonder if we would have had less pain points if we had chosen a different way to implement these features.  In the future if I had more time I would definitely dedicate more time to research and or prototyping in order to make sure that I fully understood the benefits and drawbacks of any technology choices.

