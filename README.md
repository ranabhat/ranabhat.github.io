# Resume template

*A simple Jekyll + GitHub Pages powered resume template.*

![img](images/screenshot.png)

## Contents
- [Requirements](#requirements)
- [Running Locally](#running)
- [Docker](#docker)
- [Basic Customization](#config)
- [Editing Content Configuration](#edit)
- [Publishing to GitHub](#publish)
- [Configure with your domain name](#domain)
- [License](#license)



## <a name="requirements">Requirements</a>

1. Install a full [Ruby development environment](https://jekyllrb.com/docs/installation/)
2. Install Jekyll and [bundler](https://jekyllrb.com/docs/ruby-101/#bundler) [gems](https://jekyllrb.com/docs/ruby-101/#gems)
```gem install jekyll bundler```

## <a name="running">Running Locally</a>

To test locally, run the following in your terminal:

1. Clone repo locally
2. `cd to the project root folder`
3. `bundle install`
4. `bundle exec jekyll serve`
5. Open your browser to `localhost:4000`

## <a name="docker">If Docker Installed (save time in configuring Ruby Jekyll in work machine)</a> 
1. You can ignore *Requirements* and *Running locally* steps
2. `cd to the project root folder`
3. Run ` docker run --rm --volume="$PWD:/srv/jekyll" --volume="$PWD/vendor/bundle:/usr/local/bundle" --env JEKYLL_ENV=development -p 4000:4000 jekyll/jekyll:3.8 jekyll serve `
4. Start editing your file according to your need.

## <a name="config">Basic Customization</a>

Most of the basic customization will take place in the `/_config.yml` file. Here is a list of customizations available via `/_config.yml`:

[...write these out...]

## <a name="edit">Editing Content</a>

Most of the content configuration will take place in the `/_layouts/resume.html` file. Simply edit the markup there accordingly

## <a name="publish">Publishing to Github</a>

[GitHub Pages](https://pages.github.com/) will host this for free with your GitHub account. 

## <a name="domain">Configuring with your own domain name</a>

To setup your GH Pages site with a custom domain, [follow the instructions](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/) on the GitHub Help site for that topic.


## <a name="license">License</a>

The code and styles are licensed under the MIT license. [See project license.](LICENSE) Obviously you should not use the content of this repo in your own resume. :wink:


