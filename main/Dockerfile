FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Kaweeshachamodk/Stefanie- /root/WhatsAlexa

WORKDIR /root/bady/

ENV TZ=Europe/Istanbul

RUN npm install supervisor -g

RUN yarn install --no-audit

CMD ["node", "bot.js"]
