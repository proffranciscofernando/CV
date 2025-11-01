# Servidor NGINX mínimo para site estático
FROM nginx:alpine

# Copia seus arquivos (index.html, style.css, data.js, script.js, imagens etc.)
COPY . /usr/share/nginx/html

# Porta padrão do NGINX
EXPOSE 80
