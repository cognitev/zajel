FROM node:8.12.0
WORKDIR /opt/zajel/
ADD . /opt/zajel/
RUN npm install
EXPOSE 8000
CMD ["npm,start"]
