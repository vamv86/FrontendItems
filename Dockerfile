# Etapa 1: Compilar la aplicación Angular
FROM node:18 AS build

# Crear el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos del proyecto al contenedor
COPY . .

# Compilar la aplicación Angular para producción
RUN npm run build --prod

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:alpine

# Copiar el archivo de configuración personalizado de nginx si es necesario
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar la aplicación compilada al directorio predeterminado de Nginx
COPY --from=build /app/dist/items.client/browser /usr/share/nginx/html


# Exponer el puerto 80
EXPOSE 80

# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
