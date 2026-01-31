FROM php:8.2-apache

# Enable Apache rewrite
RUN a2enmod rewrite

# Install MySQL PDO
RUN docker-php-ext-install pdo pdo_mysql

# Copy backend code
COPY . /var/www/html

# Set permissions
RUN chown -R www-data:www-data /var/www/html \
 && chmod -R 755 /var/www/html

# Set Apache document root to /public
ENV APACHE_DOCUMENT_ROOT=/var/www/html/public

RUN sed -ri -e 's!/var/www/html!/var/www/html/public!g' \
    /etc/apache2/sites-available/*.conf \
    /etc/apache2/apache2.conf

EXPOSE 80
