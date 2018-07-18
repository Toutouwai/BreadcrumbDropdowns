# Breadcrumb Dropdowns

A module for ProcessWire CMS/CMF. Adds dropdown menus of page edit links to the breadcrumbs in Page Edit.

![Breadcrumb Dropdowns](https://user-images.githubusercontent.com/1538852/42858329-215a56c6-8aa2-11e8-8cd2-da2edbab2904.gif)


## Installation

[Install](http://modules.processwire.com/install-uninstall/) the Breadcrumb Dropdowns module. The module requires ProcessWire >= v3.0.83 and AdminThemeUikit.

There is a checkbox option in the module config that determines if the breadcrumb dropdowns will include pages that the user does not have permission to edit.

## Features/details

* The module adds an additional breadcrumb item at the end for the currently edited page. That's because I think it's more intuitive for the dropdown under each breadcrumb item to show the item's sibling pages rather than the item's child pages.
* In the dropdown menus the current page and the current page's parents are highlighted in a crimson colour to make it easier to quickly locate them in case you want to edit the next or previous sibling page.
* If the option to include uneditable pages is selected then those pages are indicated by a reduced text opacity and the "not-allowed" cursor is shown on hover.
* There is a limit of 25 sibling pages per dropdown for performance reasons and to avoid the dropdown becoming unwieldy.

## Incompatibilities

This module replaces the `AdminThemeUikit::renderBreadcrumbs` method so will potentially be incompatible with other modules that hook the same method.

Known incompatible modules:

* AdminThemeBoss
