#### fill-available和fit-content的使用

fill-available撑满整个元素

```css
div.test1 {
    background: #f1c40f;
    display: inline-block;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
}
```

fit-content适当宽度

```css
div.test2 {
    background: #f1c40f;
    width: fit-content;
    margin: auto;
}
```

