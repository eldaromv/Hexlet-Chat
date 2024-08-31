install:
	npm ci

start:
	npx start-server -s ./frontend/build

build:
	cd frontend && npm install react-scripts && npm run build

lint:
	npx eslint .

fix:
	npx eslint --fix .