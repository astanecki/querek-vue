

# querek [![Build Status](https://travis-ci.org/astanecki/querek-vue.svg?branch=master)](https://travis-ci.org/astanecki/querek-vue)
Installing signed mobile application without using official store

This app gives you possibility to distribute your app over the air. That means, you can share it in non-market manner for you and your friends in the team. Just scan QR code and install Android & iOS app directly from URL.

How to run
-  
 Init submodule with server 
```
git submodule init
```
Update submodule 
``` 
git submodule update
```
Start mongodb from submodule as admin
```
.querek-server/scripts/mongodb
```
Start server from package.json
```
npm run server
```
Start web app
```
npm run web
```  
Upload & install apps 