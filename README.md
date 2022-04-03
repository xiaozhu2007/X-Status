# X-Status
A simple, beautiful Status Page for services.

## ⭐ How it works

- Visitor is used as an monitor
  - A client-side woker visits your website to make sure it's up
  - You can modify the `index.html` and add something for your visitors
- GitHub Pages are used for the status website
  - A simple, beautiful website is generated
  - Fetches data from the orgin.

_X-Status is not affiliated to or endorsed by GitHub._

## Getting started
To use X-Status as an uptime monitor and status website generator, you start by creating a repository using the template on GitHub.

### Create a repository from the template

You can click on the following link to generate a repository using the template: [**Create a new repository**](https://github.com/xiaozhu2007/X-Status/generate) from `xiaozhu2007/status`. Alternatively, you can visit the [X-Status repository on GitHub](https://github.com/xiaozhu2007/X-Status/) and click on the "Use this template" button on the top-right. 

In both cases, the next steps are:

1. Enter a name for your new repository.
1. Important: Check "Include all branches".
1. Click on "Create repository from template".

For more details on how to create repositories using template, read the article on the GitHub website: [Creating a repository from a template](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template).

**Billing note:** X-Status uses thousands of build minutes every month (approximately 3,000 minutes in the default setting). If you use a public repository, GitHub offers unlimited free build minutes, but if you use a private repository, you'll have to pay for this time.

### After creating your repository

The following steps apply to your new repository, not the template repository.

#### Enable publishing

To get a static status website, you have to enable GitHub Pages on your new repository.

1. Go to your repository settings page
1. Go to the "Pages" sub-section on the left
1. Under "Source", change "None" to `master`
1. In the folder dropdown, select `/(root)`
1. Skip the "Theme Chooser" option 
1. Click on "Save"

After saving, you will see confirmation text "Your site is ready to be published at...". For more information on enabling GitHub Pages, see the article on the GitHub website: [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

If you don't want to have a publicly-available status website, you don't have to enable publishing. If that is the case, you can also choose to keep your repository private. It is **not** possible to publish a status website from a private repository without using an API proxy with authentication. 
## Done!
Now that you have your X-Status instance fully set up, you should follow these best practices when adding details to outage incidents.
