# React - Phaser - ThreeJS Game


### Screenshots

![Screenshot 1](https://i.imgur.com/lzqwTrA.png)
![Screenshot 2](https://i.imgur.com/PJo9mjn.png)

### What kind of game is this?

This game is an idle/merger game. If you don't know what it is, please google it.


### Technical stuff

It combines the power of React, PhaserJS and ThreeJS.

The logic is simple. The background is rendered using PhaserJS but the GUI elements and animations are used via React and css keyframes. I realized it is much more efficient to render the GUI and manage the state in React instead of relying on Phaser alone.

ThreeJS is also integrated. (There is a function called getBoxes on home screen if you want to see how it is done.) It uses @react-three/fiber on the background so ThreeJS objects can be rendered as ReactJS objects.

It was integrated to create some particle effects around monsters and maybe some fancy 3D animations. (e.g scene changes, meteor effects.)

The React architecture was created by me on top of create-react-app so it is integrated with Redux-saga, Redux, @connect annotations, static proptypes, sass, component auto loading etc. To see customizations you can check scripts folder.

For testing it has Jest integrated but we don't have tests.

### To install

Make sure that you have a NodeJS version 14 and above.

    npm i
    npm start
    
 Browse localhost:3000 and that's all. No other dependencies required.
 
### Is this production ready?

Depends. It has the bare minimum features to be playable but still misses many production features. (e.g There is no Shop, no payments system, no offline income, no google auth.) The codebase is pretty simple and isolated to you can play with it. I think I spent only around 2-3 days for the whole thing so don't expect much. :)

### Credits

The assets used in this game are from https://craftpix.net/ and they are all under free license. Sounds are from https://freesound.org/.

### License

MIT
