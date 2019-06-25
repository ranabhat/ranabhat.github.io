# Resume template

*A simple Jekyll + GitHub Pages powered resume template.*

![img](images/screenshot.png)

## Docs
### Requirements

1. Install a full [Ruby development environment](https://jekyllrb.com/docs/installation/)
2. Install Jekyll and [bundler](https://jekyllrb.com/docs/ruby-101/#bundler) [gems](https://jekyllrb.com/docs/ruby-101/#gems)
`gem install jekyll bundler`

### Running locally

To test locally, run the following in your terminal:

1. Clone repo locally
2. `cd to the project root folder`
3. `bundle install`
4. `bundle exec jekyll serve`
5. Open your browser to `localhost:4000`

### If Docker Installed (save time in configuring Ruby Jekyll in work machine)
1. `cd to the project root folder`
2. Run ` docker run --rm --volume="$PWD:/srv/jekyll" --volume="$PWD/vendor/bundle:/usr/local/bundle" --env JEKYLL_ENV=development -p 4000:4000 jekyll/jekyll:3.8 jekyll serve `
3. Start editing your file according to your need.

### Customizing

First you'll want to fork the repo to your own account. Then clone it locally and customize, or use the GitHub web editor to customize.

#### Options/configuration

Most of the basic customization will take place in the `/_config.yml` file. Here is a list of customizations available via `/_config.yml`:

[...write these out...]

#### Editing content

Most of the content configuration will take place in the `/_layouts/resume.html` file. Simply edit the markup there accordingly

### Publishing to GitHub Pages for free

[GitHub Pages](https://pages.github.com/) will host this for free with your GitHub account. 

### Configuring with your own domain name

To setup your GH Pages site with a custom domain, [follow the instructions](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/) on the GitHub Help site for that topic.


## License

The code and styles are licensed under the MIT license. [See project license.](LICENSE) Obviously you should not use the content of this repo in your own resume. :wink:


