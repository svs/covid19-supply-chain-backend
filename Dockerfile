FROM ruby:2.6.5
RUN apt-get update -qq && apt-get install -qq curl postgresql-client

# Install node and yarn
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash \
 && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
 && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
 && apt-get update && apt-get install -y nodejs yarn && rm -rf /var/lib/apt/lists/*

RUN mkdir /app
WORKDIR /app

# Install ruby deps
COPY Gemfile .
COPY Gemfile.lock .
RUN bundle install

# Install node deps
COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .
