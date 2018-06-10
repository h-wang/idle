idle.js
========

A simple javascript library to detect browser idle and perform actions.

## Installation
```
npm install @linkorb/idle
```

## Demo

Check the `demo/` directory for an demonstration + example on how to use idle.js

## How to use

To support idle.js in your application, you'll need to include a script tag in your html:

```html
<script type="text/javascript" src="../idle.js"></script>
```
You may specify some global variables to tweak the behaviors.
```js
// set redirect url (relative) after idle timeout
_idleRedirectUrl = 'demo/logout.html';
// set escaped urls that no need to detect idle, e.g. logout page
_idleEscapeUrl = ['demo/logout.html'];
// specifying a callback to replace the default redirect action
_idleCallback = function(){console.log('timeout')};
// customize idle time interval, in ms.
_idleInterval = 2000;
// enable debug mode
_idleDebug = true;
```

## Build from source
To change the source file and build, simply use `webpack`.
```
# generates dist/tweak.js
webpack -d
# generates dist/tweak.min.js
webpack -p
```

## License

MIT (see [LICENSE](LICENSE))

## Brought to you by the LinkORB Engineering team

<img src="http://www.linkorb.com/d/meta/tier1/images/linkorbengineering-logo.png" width="200px" /><br />
Check out our other projects at [linkorb.com/engineering](http://www.linkorb.com/engineering).

Btw, we're hiring!
