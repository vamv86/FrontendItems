# Etapa 1: Compilar la aplicación Angular
FROM node:18 AS build

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos del proyecto
COPY package*.json ./
RUN npm install

COPY . .

# Compilar la aplicación para producción
RUN npm run build --prod

# Etapa 2: Servir la aplicación con un servidor web
FROM nginx:alpine

# Copiar la aplicación compilada al directorio de nginx
COPY --from=build /app/dist/items.client /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]

