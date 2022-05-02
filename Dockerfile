FROM node:18

# set the working dir for container
WORKDIR /frontend

# copy the json file first
COPY ./package.json /frontend
COPY ./yarn.lock /frontend

# install npm dependencies
RUN yarn install

# copy other project files
COPY . .

# build the folder
CMD [ "yarn", "start" ]
