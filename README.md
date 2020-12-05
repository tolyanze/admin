# admin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Server setting

1.Генерируем ssh-ключ с помощью утилиты ssh-keygen
2.Добавление ssh-ключ на место расположения проекта github, gitlab  или bitbucket

### Deploy

1.Подключаемся к удаленому серверу по ssh 
2.Заходим в папку "www" и создаем директорию для новой версии
3.В созданой директории иницилизируем git и pull-им новую версию приложения (в данный момент с github)
4.В корневой директории делаем замену всех папок и файлов на необходимую версию из папки dist




