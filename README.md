# JS libs

## Status badge

![status-badge](https://user-images.githubusercontent.com/6597086/56291855-a123b900-6158-11e9-87c5-1a742fbe3383.gif)

Shows basic status. Designed as a service badge.

Statuses:

* `pending`
* `ok`
* `fail` (or `failed`)
* `na` (not available)

Example: 

```js
var badge = StatusBadge({
    target: document.getElementById('myElement'),
    props: {
        text: 'some service',
        status: 'pending'
    }
});

// after some time...

badge.$set({status: 'ok'}); // or 'pending', 'ok', 'fail', 'na'

```