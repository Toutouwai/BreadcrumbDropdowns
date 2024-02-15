# Breadcrumb Dropdowns

Adds dropdown menus of page edit links to the breadcrumbs in Page Edit. 

The module also adds dropdowns in Edit Template, Edit Field, Edit User, Edit Role, Edit Permission, Edit Language, and when viewing a log file at Setup > Logs.

![Breadcrumb Dropdowns](https://user-images.githubusercontent.com/1538852/45392594-39663680-b67c-11e8-8f2a-8f9d0c3c0608.gif)


## Configuration options

![Configuration options](https://github.com/Toutouwai/BreadcrumbDropdowns/assets/1538852/197db00c-7b39-42f1-a078-3d5ea515ccdc)

## Features/details

* The module adds an additional breadcrumb item at the end for the currently edited page. That's because I think it's more intuitive for the dropdown under each breadcrumb item to show the item's sibling pages rather than the item's child pages.
* In the dropdown menus the current page and the current page's parents are highlighted in a crimson colour to make it easier to quickly locate them in case you want to edit the next or previous sibling page.
* Unpublished and hidden pages are indicated in the dropdowns with similar styling to that used in Page List.
* If the option to include uneditable pages is selected then those pages are indicated by italics with a reduced text opacity and the "not-allowed" cursor is shown on hover.
* There is a limit of 25 pages per dropdown for performance reasons and to avoid the dropdown becoming unwieldy.
* If the current user is allowed to add new pages under the parent page an "Add New" link is shown at the bottom of the breadcrumb dropdown.
* If the currently edited page has children or the user may add children, a caret at the end of the breadcrumbs reveals a dropdown of up to the first 25 children and/or an "Add New" link.

## Overriding the listed siblings for a page

If you want to override the siblings that are listed in the Page Edit dropdowns you can hook the `BreadcrumbDropdowns::getSiblings` method and change the returned PageArray. For most use cases this won't be necessary.

## Incompatibilities

This module replaces the `AdminThemeUikit::renderBreadcrumbs` method so will potentially be incompatible with other modules that hook the same method.
