FROM nginx
COPY ./templates/default.conf /etc/nginx/templates/default.conf.template
EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]
