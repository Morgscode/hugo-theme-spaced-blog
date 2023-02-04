# spaced blog theme

A beautifully minimalistic Hugo theme for blogs. With dark mode and a11y out of the box.

TODOS:

- Add author social media icon support
- Add about the author block for single post
- Add sidebar
- Add search support %like% behaviour
- Add code syntax highlighting
- Add `copy to clipboard` for block-level code elements
- Add support for single post author override
- Add support for multiple authors per post

![Intro](https://github.com/Morgscode/hugo-theme-spaced-blog/blob/master/images/cover.png)

Main features:

- Dark mode support
- a11y support
- Mobile responsive
- Banner images
- Main blog author profile

## Getting started

### Installation

Create a new Hugo site:

```bash
$ hugo new site [path]
```

Clone this repository into `themes/` directory:

```bash
$ cd [path]
$ git submodule add https://github.com/Morgscode/hugo-theme-spaced-blog.git themes/spaced-blog
```

Add this line in the `config.toml` file:

```toml
theme = "spaced-blog"
```

### Configuration

In your `config.toml` file, define the following variables in `params`:

- `description` = This will be the default html meta description for the blog and it's homepage. It can be overridden by setting a description in the front-matter of any page or post.
- `useCover`: wether or not you want to use a banner images for the blog and its posts
- `[[params.author]]`
- `[[params.author]]name`: The name of the primary blog author
- `[[params.author]]description`: The primary blog author's description

To set the blog author's avatar image - place an image named `blog-author.jpg` in your sites `/content/images` folder. 

To add a menu item, add the following lines in `menu`:

```
[[menu.menu_name]]
  identifier = "item-identifier"
  name = "Item Name"
  url = "/item-slug"
```

The basic menu structure you'll need for this theme is:

```
[menu]
  [[menu.main]]
    identifier = "home"
    name = "Home"
    url = "/"
    weight = 1
  [[menu.main]]
    identifier = "categories"
    name = "Categories"
    url = "/categories"
    weight = 2
  [[menu.main]]
    identifier = "tags"
    name = "Tags"
    url = "/tags"
    weight = 3
```

To use cover images for the blog: set the `useCover` param to `true`.

To add a default cover image for your entire blog, name your image `blog-cover.jpg` and place in `assets/images`.

To add a default cover image for a specific page - place an image named `cover.jpg` in the page bundle.

[Read the Hugo documentation](https://gohugo.io/content-management/menus/#readout) for more informations about menus.

## License

This theme is released under the [**MIT**](/LICENSE.md) License.
