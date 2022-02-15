# pull official base image
FROM node:latest


# set working directory
WORKDIR /app/frontend



# install app dependencies
COPY package.json ./
RUN npm install 
RUN npm install react-scripts@4.0.1 -g


# add app
COPY . ./

EXPOSE 3000
# start app
CMD ["npm", "start"]