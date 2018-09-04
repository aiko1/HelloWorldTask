# HelloWorldTask

Этот проект отображает слова "Hello world!" при переходе на страницу проекта в браузере.
- Клиент реализован при помощи Angular.
- Сервер обращается в реляционную базу данных (H2).
- Для обращения в базу данных используется MyBatis.
- На сервере реализован подход MVC (Model-View-Controller).
- Приложение собираться и разворачиваться при помощи Maven.

#### Необходимо

- JDK 8
- Maven 3.0+
- Node.js и npm
- Angular CLI

### Инструкция для запуска

#### Чтобы скачать с гитхаба проект запускаем команду:

```
git clone https://github.com/aiko1/HelloWorldTask.git
```

## Сначала запускаем серверную часть

#### Заходим в папку:

      /HelloWorldTask
      
#### Далее запускаем команду:   

```
mvn clean install
```
Далее:
```
mvn spring-boot:run
```
   
## После успешного запуска сервера запускаем клиент

#### Заходим в папку:

      /HelloWorldTask/src/client
      
#### Вводим команду:   

```
npm install
```
Далее:
```
ng serve --open
```
#### Затем клиент автоматически запустится в браузере по адресу:

      http://localhost:4200
Здесь отображается "Hello world!".
   
#### Для доступа к консоли БД необходимо перейти по адресу:
      http://localhost:8080/h2-console/
- JDBC URL должен быть jdbc:h2:mem:testdb

#### Протестировать работу приложения (изменить значение "Hello world!") можно:
##### - через консоль, введя следующий запрос:
          
      update content set value='ASD' where id = 1;
          
##### - изменив значение "Hello world!" в файле БД `/HelloWorldTask/src/main/resources/schema.sql`
(в этом случае, если приложение запущено из командной строки, то нужно перезапустить серверную часть, чтобы увидеть изменение)
##### - после изменения значения необходимо обновить страницу в браузере.
