# A vanilla universal React server that mounts JSX into the entire DOM

A small example of how you could build a universal React app using vanilla React and the new React Router [v4](https://reacttraining.com/react-router/).

I mount React at the [`document`](https://github.com/albertstill/react-top-to-bottom/blob/7168056af14af64dca117930e8f510992eb26d82/browser.jsx#L10) so you use can use JSX the whole way down. No server template engine or [html string interpolation](https://github.com/reactjs/react-router-tutorial/blob/2d08680eca5af168e103cc4d0087b827076734de/lessons/14-whats-next/server.js#L33-L43) needed. Therefore you control the head content with React, no react-helmet needed.

Server side props are embedded into the server rendered HTML using JSX [itself](https://github.com/albertstill/react-top-to-bottom/blob/7168056af14af64dca117930e8f510992eb26d82/modules/App.jsx#L47).
