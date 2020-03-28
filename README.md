# Covid19 Supply Chain and Management System

### Setup

- `bundle install`
- `cp .env.example .env` and place all the variable values
- `rails db:setup`

### Docker Setup

- `cp .env.example .env` and place all the variable values
- `docker-compose run web rails db:setup`
- `docker-compose up -d`
