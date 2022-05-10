FROM cypress/included:6.8.0
RUN mkdir /cypress-docker
WORKDIR /cypress-docker
COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress.json .
COPY ./cypress.env.json .
COPY ./cypress ./cypress
RUN npm install
RUN npm run test
ENTRYPOINT ["npm", "run"]