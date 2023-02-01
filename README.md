# spaced blog theme

A beautifully minimalistic Hugo theme for blogs. With dark mode and a11y out of the box.

TODOS:

- Add styling for ALL markdown elements
- Add author social media icon support
- Add sidebar
- Add search support %like% behaviour

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

- `useCover`: wether or not you want to use a banner image for the blog and its posts
- `mainAuthor`: The name of the primary blog author
- `mainAuthorDescription`: The primary blog author's description

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

[Read Hugo documentations](https://gohugo.io/content-management/menus/#readout) for more informations about menu

## License

This theme is released under the [**MIT**](/LICENSE.md) License.

## Acknowledgements
