FROM node:20-alpine

WORKDIR /app

RUN npm i -g @angular/cli

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4200

CMD [ "ng", "serve", "--host", "0.0.0.0", "--port", "4200" ]

# cmds to build and run the docker container:
# 
# 
# docker build -t angular-e-learning .
# docker run --name angular-e-learning-cont -p 4200:4200 angular-e-learning