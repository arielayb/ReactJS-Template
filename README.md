# ReactJS Template

The purpose of the ReactJS template is to provide the user
a frontend that can send packets to the backend using the
socket.io library.

### Step 1:

Open a terminal to install npm (Node Package Manager) in your Linux box:

```shell
sudo yum install npm
```

NOTE: For Debian based Linux Distro:

```shell
sudo apt-get install npm
```

### Step 2:

Install WebPack using npm:

```shell
sudo npm install -g webpack
```

### Step 3:

Traverse into the ReactJS-Template folder (Or where you cloned the repo) and

type this command in the terminal:

```shell
npm install
```

### Step 4:

Once the installation is complete, you need to build the web application.

Type this command in the terminal:

```shell
webpack
```

### Step 5:

The reactjsTemplate folder should contain a dist folder after the webpack command. 

Finally, start the web server!

```shell
node server.js
```
  
