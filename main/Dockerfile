# We are using WhatsAsena's Dockerfile
# But We will not be a Fake bot of WhatsAsena
# We are Only using the Dockerfile & Base
# © WhatsAlexa, Made by TOXIC-DEVIL

FROM fusuf/whatsasena:latest

RUN git clone https://github.com/TOXIC-DEVIL/WhatsAlexa /root/WhatsAlexa
WORKDIR /root/WhatsAlexa/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
