# spatial-navigation-ts

A copy of the original library, without any modification ([JavaScript SpatialNavigation](https://github.com/luke-chang/js-spatial-navigation)), and typescript types.

This library works great in JS, Angular or pure typescript projects.

### Install
```bash
npm i spatial-navigation-ts
```

### Basic usage Angular
styles.scss
```scss
/* Add style to the focused elements */
:focus {
  outline: 2px solid red;
}
```

app.component.html
```html
<a id="test_1" href="#">Link 1</a>
<a href="#">Link 2</a>
<div class="focusable">Div 1</div>
<div class="focusable">Div 2</div>
```

app.component.ts
```typescript
import { Component, OnInit } from '@angular/core';
import SpatialNavigation from "spatial-navigation-ts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.initNavigation();
  }

  initNavigation() {
    SpatialNavigation.init();

    // Define navigable elements (anchors and elements with "focusable" class).
    SpatialNavigation.add({
      selector: 'a, .focusable'
    });

    // Make the *currently existing* navigable elements focusable.
    SpatialNavigation.makeFocusable();

    // Focus the first navigable element.
    SpatialNavigation.focus();
  }

}
```

### Basic usage JS

```html
<head>
  <script src="./node_modules/spatial-navigation-ts/spatial_navigation.js"></script>
  <script>
    window.addEventListener('load', function() {
      // Initialize
      SpatialNavigation.init();

      // Define navigable elements (anchors and elements with "focusable" class).
      SpatialNavigation.add({
        selector: 'a, .focusable'
      });

      // Make the *currently existing* navigable elements focusable.
      SpatialNavigation.makeFocusable();

      // Focus the first navigable element.
      SpatialNavigation.focus();
    });
  </script>
  <style>
    /* Add style to the focused elements */
    :focus {
      outline: 2px solid red;
    }
  </style>
</head>
<body>
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <div class="focusable">Div 1</div>
  <div class="focusable">Div 2</div>
</body>
```

### More Demonstrations

+ [Demonstrations](https://luke-chang.github.io/js-spatial-navigation/demo/)