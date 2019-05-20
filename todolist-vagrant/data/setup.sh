#!/bin/bash
apt-get clean 
rm -rf /var/lib/apt/lists/*


apt-get update
  apt-get install -y apt-transport-https ca-certificates curl software-properties-common
 curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
 add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
 
 apt-get update
 apt-get install -y docker-ce
 apt-get install -y openjdk-8-jdk
 docker run --restart=always --name some-mongo -p 27017:27017 -d mongo

curl -sL https://deb.nodesource.com/setup_10.x |  -E bash -
 apt-get install -y nodejs
cd /root
 git clone https://github.com/aysenuroruc/todolist-ui.git
 
  git clone https://github.com/aysenuroruc/todolist-backend.git
  
nohup java -jar todolist-backend/build/libs/todolist-0.0.1-SNAPSHOT.jar &
 
 cp /data/nginx.conf /root/nginx.conf
 
 docker run -p 80:80 --restart=always --name some-nginx -v /root/nginx.conf:/etc/nginx/nginx.conf:ro -v /root/todolist-ui/build:/root/todolist-ui/build -d nginx
