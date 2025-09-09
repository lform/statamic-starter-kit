# Project Name

Project Description

## Reference Materials

-

## Development Credentials

Dashboard: [https://example.test/cp](https://example.test/cp)

User: updates@lform.com

Pass: testing1

## Project Setup

### Clone Repo

Clone the repository to your local machine using the following command:

```bash
git clone git@github.com:lform/example-repo.git
```

### Set Up Environment

Navigate to the root directory of the repository:

```bash
cd example-repo
```

### Install Dependencies

In the base folder, run the following command to install PHP and NPM dependencies:

```bash
composer install && npm i
```

### Set up Valet

Navigate to the public folder:
```bash
cd public
```

Link the project to Valet:

```bash
valet link <project-name>
```

Secure the Valet link:

```bash
valet secure
```

### Build Components

- `npm run dev` — Compile assets when file changes are made with Vite
- `npm run build` — Compile assets for production

## LForm Statamic Starter Kit

This is a Statamic starter kit for LForm projects that comes with basic config, preset globals, and preinstalled Statamic plugins. It also comes with [@lform/lwind](https://github.com/lform/lwind) and [@lform/pretty-code](https://github.com/lform/pretty-code) pre-installed and configured.

### Installation Guide

### Install Statamic CLI

```
composer global require statamic/cli
```

### Install Statamic
```bash
statamic new <project-name>
```

The CLI tool will ask if you want to install a starter kit, select yes.

```
┌ Would you like to install a starter kit? ────────────────────┐
│   ○ No, start with a blank site.                             │
│ › ● Yes, let me pick a Starter Kit.                          │
└──────────────────────────────────────────────────────────────┘
```

Paste in `lform/statamic-starter-kit` when it asks what kit to install.

```
┌ Which starter kit would you like to install? ────────────────┐
│ lform/statamic-starter-kit                                   │
└──────────────────────────────────────────────────────────────┘
 ```

### IMPORTANT - Look for TODOs when booting up a new project

Use `⌘ + Shift + f` to search all project files and type in `TODO - Project Setup` and follow the instructions for each instance and remove the TODO commend

### Included Packages

- Composer
  - [@lform/pretty-code](https://github.com/lform/pretty-code)
- NPM
  - [@lform/lwind](https://github.com/lform/lwind)
  - [@iconify/tailwind](https://www.npmjs.com/package/@iconify/tailwind)
  - [@iconify/json](https://www.npmjs.com/package/@iconify/json)
    - Icon Directory: [icon-sets.iconify.design](https://icon-sets.iconify.design/)

### Included Plugins

- SEO Pro: https://statamic.com/addons/statamic/seo-pro
- Bard Mutator: https://statamic.com/addons/jacksleight/bard-mutator
  - Can modify Bard output
- Captcha: https://statamic.com/addons/aryeh-raber/captcha
- Redirects: https://statamic.com/addons/rias/redirect

### Optional/Recommended Plugins

- Livewire: https://statamic.com/addons/jonassiewertsen/livewire
- Cookie Byte: https://statamic.com/addons/dryven/cookie-byte
  - Cookie management
- Table on Steroids: https://statamic.com/addons/goellner/steroids-table
  - Adds tables as a fieldtype in the control panel
- Runway: https://statamic.com/addons/rad-pack/runway
  - Manage eloquent models via Statamic control panel
- Mailchimp: https://statamic.com/addons/rad-pack/mailchimp


### Baked In Globals

- Form Settings
  - Form Destination Email
- LForm Settings
  - LForm Footer Tagline
- Site Settings
  - Favicon
  - Theme Color
  - Copyright
  - Robots.txt
  - Google Tag Manager ID
  - Site Header Code
  - Site Footer Code
- Social Media
  - LinkedIn
  - Facebook
  - X / Twitter
  - Instagram
  - Youtube
  - Pinterest
  - Houzz
  - Vimeo
  - Yelp
  - Tiktok



### Baked In User Roles

- Admin
  - Role given to clients for dashboard access
  - **It is highly important we do not give super-user to clients!**

## Usage Notes

### Creating New Forms

When creating new forms that are sent to a client's email address we must configure the property that the email is sent to manually to support the global `Form Destination Email`

To configure this properly navigate to `/resources/forms/{Form Name}.yaml` in the YAML file you should see under the `email` property there is a `to` property, we can change that to use out global destination with a fallback like the example below.

```Yml
title:
email:
  -
    id:
    # Copy the string below into your form config
    to: "{{ global_form:form_email ?? 'fallbackemail@example.com' }}"
```
