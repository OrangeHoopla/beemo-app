# Beemo React App
## _For people who want to monitor their bees_



[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Beemo is a cloud-enabled, mobile-ready, offline-storage compatible(future),
React-powered HTML5 Markdown editor.

- runs on aws using the least amount of resources
- not able to expand as needed cause that costs more money
- ✨ Powered by my money ✨

## Features

- allows for alarms to be set(future)
- tracks data for prolonged periods of time
- allows for all hive data to be easily accessed
- Allows for many unique types of sensor data input
- Export data to user for unique data modeling

Written by me [Quade Kirby], this is part passion project,
part making a website for my mother so she doesn't have to check
her bee's all the time giving her more free time.

> Hi, if this project is gonna be open to the 
> public it should have a README smile
> [Jacob Howe]

And so the readme was created though this website will likely stay as a small
show off website or act as a spring board for other monitoring based services I
want to create for myself

## Tech

Beemo uses a number of open source projects to work properly:

- [React] - HTML enhanced for web apps!
- [AWS Cognito] - who needs their own database for users?
- [MySQL] - I do, i need a database to store everyone's info
- [React Bootstrap] - I don't have the time or will to mess with css that much
- [AWS Lambda] - evented I/O for the backend(practically free)
- [AWS API Gateway] - CORS is the bane of my existance 
- [Axios] react can be bare metal in someways huh

And of course beemo-client itself is open source with a [public repository][dill]
 on GitHub.

## Installation

Install the dependencies and devDependencies and start the server.

```sh
cd beemo-app
npm i
node app
```

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```



## Development

Want to contribute? Great!

Beemo uses react for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:

```sh
node app
```



## License

MIT

**Cause I know some of you out there aren't to be trusted**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/OrangeHoopla/Beemo-Client>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [Jacob Howe]: <https://github.com/jacob-howe>
   [Quade Kirby]: <https://orangehoopla.github.io/>
