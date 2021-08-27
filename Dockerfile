# Official jekyll image (includes ruby). From docker hub
FROM jekyll/jekyll:4

# Exposing a container port means that we tell Docker that the container listens to a certain port
# This doesn’t actually do much except helps us humans with the configuration.
EXPOSE 4000

# Use /usr/src/app as our workdir. The following instructions will be executed in this location.
WORKDIR /usr/src/app

# Copy the all the contents from this location (.) to /usr/src/app/ creating /usr/src/app/<all_contents_from_repo>
COPY . .

# Install all dependencies from Gemfile (Gemfile copied on previous step) 
RUN bundle install 

# Creates a non-root user with an explicit UID and adds permission to access the /usr/src/app folder
# For more info, please refer to https://aka.ms/vscode-docker-python-configure-containers
RUN adduser -u 5678 --disabled-password --gecos "" appuser && chown -R appuser /usr/src/app
USER appuser

CMD ["jekyll", "serve" , "--host", "0.0.0.0", "--port", "$PORT"]