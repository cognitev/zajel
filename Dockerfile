FROM node:NODE_VERSION
WORKDIR /mc/zajel/
RUN apt-get update && apt-get install -y unzip
RUN wget https://releases.hashicorp.com/envconsul/0.6.1/envconsul_0.6.1_linux_amd64.zip && unzip envconsul_0.6.1_linux_amd64.zip\
&& ln -sf $PWD/envconsul /usr/local/bin
ADD package.json /mc/zajel/
RUN npm install
ADD . /mc/zajel/
EXPOSE 8000
CMD ./run.sh
