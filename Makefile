# Установка зависимостей
install:
	npm ci

# Локальный запуск игры
brain-games:
	node bin/brain-games.js

# Тест публикации
publish:
	npm publish --dry-run

# Обновить локально
update:
	npm link

# Запуск линтера
lint:
	npx eslint .