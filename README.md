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
1. Install ruby version 2.7.1 [Ruby development environment](https://jekyllrb.com/docs/installation/)
2. Install jekyll version 4.2.0 and the correct version of bundler with ```gem install bundler:2.2.2```
3. Official Jekyll image include ruby 2.7.1 and bundler 2.2.2
4. Run `bundle install` to install all dependencies specified in the Gemfile
5. The application by default runs in port 4000

## <a name="running">Running Locally</a>

To test locally, run the following in your terminal:

1. Clone repo locally
2. `cd to the project root folder`
3. `bundle install`
4. `bundle exec jekyll serve`
5. Open your browser to `localhost:4000`

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


