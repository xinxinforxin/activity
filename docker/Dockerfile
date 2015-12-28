FROM node:0.12.7

RUN apt-get update 
RUN apt-get install -y ghostscript imagemagick graphicsmagick

RUN echo 'always-auth=true' > /root/.npmrc
RUN echo 'registry=http://m2.umiit.cn/content/groups/npm/' >> /root/.npmrc
RUN echo '_auth=dW1pOnVtaTEyMzQ=' >> /root/.npmrc
RUN echo 'email=ci@umiit.cn' >> /root/.npmrc

RUN npm install -g grunt-cli supervisor

volume /usr/src/app
workdir /usr/src/app

EXPOSE 3908