#docker file for development environment that should mount code file to /opt/
FROM kennylee26/node

MAINTAINER zezhang,Beacon Co,Ltd

#add main web user & change ownership
RUN useradd -d /opt -g staff -r web

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
RUN mkdir -p /opt/

# change project ownership
RUN chown web /opt -R

# fix system ownership
RUN chown root:staff /usr/local/* -R
RUN chmod 775 /usr/local/* -R

#switch user
USER web

RUN cnpm install nodemon -g

# From here we load our application's code in
# "layer" thats been cached will be used if possible
WORKDIR /opt/lasweb

#run, should mount src to /opt/lasweb
CMD ["nodemon",  "/opt/lasweb/server.js"]

EXPOSE 3000

#docker start command
#docker run -d -p 3000:3000 --name webdev --link db:db -e MONGO_URI="mongodb://nefadmin:123456@db/nef?authSource=nef"  -v D:\git\lasweb:/opt/lasweb viperking/laswebdev

#dependency: mongodb
#mongodb image：tutum/mongodb
#start command:
#docker run -d --name db -p 27017:27017 -p 28017:28017 -e MONGODB_USER="nefadmin" -e MONGODB_PASS="123456" -e MONGODB_DATABASE="nef"  tutum/mongodb