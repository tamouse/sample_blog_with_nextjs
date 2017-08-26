Following the tutorial at
https://medium.com/styled-components/building-a-blog-with-next-js-359cf1236574

After going through this tutorial, I'm left with no new information
about styled components or next.js.

I ended up copying most everything from his Github repo without any
explanation of what was going on, and some of the differences between
the instruction and what's in the repo are jarring.

One thing that was unclear but actually ends up being sort of cool is
in the .babelrc file: the module-resolver in the plugins section sets
the root for where to start looking at modules. This let's you specify
things from whereever the root of the app source is, instead of having
to unwind relative paths. It basically does something similar to
webpack's resolve alias section. I'm curious how it works with Jest.

My advice: if this article is your first intro to next.js or
styled-components, step back, and go read/learn/practice each of them
before you look here.
