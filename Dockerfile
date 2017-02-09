#docker
FROM kennylee26/node

MAINTAINER zezhang,Beacon Co,Ltd

#add main web user & change ownership
RUN useradd -d /opt -g staff -r web

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
RUN mkdir -p /opt/lasweb

# From here we load our application's code in
# "layer" thats been cached will be used if possible
WORKDIR /opt/lasweb
ADD . /opt/lasweb

# change project ownership
RUN chown web /opt -R

# fix system ownership
RUN chown root:staff /usr/local/* -R
RUN chmod 775 /usr/local/* -R

#switch user
USER web

#install npm dependencies
RUN cnpm install gulp -g
RUN cnpm install nodemon -g
RUN cnpm install

#build
RUN gulp build

#run
CMD ["nodemon"]

EXPOSE 3000