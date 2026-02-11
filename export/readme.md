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

-   `npm run dev` — Compile assets when file changes are made with Vite
-   `npm run build` — Compile assets for production

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

You will not need to create an account to start as there is a default account pre-loaded into the system

User: `updates@lform.com`

Pass: `testing1`

### IMPORTANT - Look for TODOs when booting up a new project

Use `⌘ + Shift + f` to search all project files and type in `TODO - Project Setup` and follow the instructions for each instance and remove the TODO commend

### Included Packages

-   Composer
    -   [@lform/pretty-code](https://github.com/lform/pretty-code)
-   NPM
    -   [@lform/lwind](https://github.com/lform/lwind)
    -   [@iconify/tailwind](https://www.npmjs.com/package/@iconify/tailwind)
    -   [@iconify/json](https://www.npmjs.com/package/@iconify/json)
        -   Icon Directory: [icon-sets.iconify.design](https://icon-sets.iconify.design/)

### Included Plugins

-   SEO Pro: https://statamic.com/addons/statamic/seo-pro
-   Bard Mutator: https://statamic.com/addons/jacksleight/bard-mutator
    -   Can modify Bard output
-   Captcha: https://statamic.com/addons/aryeh-raber/captcha
-   Redirects: https://statamic.com/addons/rias/redirect

### Optional/Recommended Plugins

-   Livewire: https://statamic.com/addons/jonassiewertsen/livewire
-   Cookie Byte: https://statamic.com/addons/dryven/cookie-byte
    -   Cookie management
-   Table on Steroids: https://statamic.com/addons/goellner/steroids-table
    -   Adds tables as a fieldtype in the control panel
-   Runway: https://statamic.com/addons/rad-pack/runway
    -   Manage eloquent models via Statamic control panel
-   Mailchimp: https://statamic.com/addons/rad-pack/mailchimp

### Baked In Globals

-   Form Settings
    -   Form Destination Email
-   LForm Settings
    -   LForm Footer Tagline
-   Site Settings
    -   Favicon
    -   Theme Color
    -   Copyright
    -   Robots.txt
    -   Google Tag Manager ID
    -   Site Header Code
    -   Site Footer Code
-   Social Media
    -   LinkedIn
    -   Facebook
    -   X / Twitter
    -   Instagram
    -   Youtube
    -   Pinterest
    -   Houzz
    -   Vimeo
    -   Yelp
    -   Tiktok

### Baked In User Roles

-   Admin
    -   Role given to clients for dashboard access
    -   **It is highly important we do not give super-user to clients!**

## Usage Notes

### Creating Blocks

Each block is made up of **three files**: a **blueprint**, a **template**, and a **page builder reference**.

> **Naming placeholders**
>
> -   `{{ block_name }}` = **snake_case** handle (example: `hero_banner`)
> -   `{{ block-name }}` = **kebab-case** handle (example: `hero-banner`)

---

#### 1) Block Blueprint (content fields)

`/resources/fieldsets/block_{{ block_name }}.yaml`

Defines **all editable content fields** for the block (images, copy, buttons, etc.). If an admin might reasonably need to change it, it belongs here.

---

#### 2) Block Template (rendering + config behavior)

`/resources/views/partials/{{ block-name }}.antlers.html`

Contains the **Antlers + Tailwind** markup that renders the block.

Any optional settings should be handled via the `config` scope (so config fields can be referenced like `{{ config:some_setting }}`).

---

#### 3) Page Builder Reference (replicator → template mapping)

`/resources/views/partials/blocks/{{ block-name }}.antlers.html`

This file should do **one job only**: include the Block Template and **map/pass fields exactly as they would be passed in a normal (static) template**.

After creating this file:

-   Add a new **set** to the **“Page Builder” replicator** in the `page_builder` fieldset.
-   Set the **set handle to kebab-case** (Statamic may default to snake_case, but the handle needs to match the partial filename above).

Also in that new set:

-   Add a field group named `config`.
    -   Put any page-builder-specific settings here—either things admins can control in the UI, or developer-controlled toggles you want available to templates.
