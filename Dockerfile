FROM node:13-buster-slim as build
WORKDIR /root
ADD . /root
RUN sed -i  's/[a-z]\+\.[a-z]\+\.[a-z]\+/mirrors.aliyun.com/' /etc/apt/sources.list && \
    apt update && apt -y install git ncat && \
    sed -i '$a \ \ \ \ StrictHostKeyChecking no' /etc/ssh/ssh_config && \
    sed -i '$a \ \ \ \ Proxycommand    ncat --proxy 47.102.48.135:1080 --proxy-type socks5 %h %p' /etc/ssh/ssh_config && \
    npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm config set puppeteer_download_host https://mirrors.huaweicloud.com && \
    npm config set sass_binary_site https://mirrors.huaweicloud.com/node-sass && \
    npm install && \
    npm run build:envparameter


FROM nginx:1.18
COPY --from=build /root/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN chown -R nginx:nginx  /usr/share/nginx/html
