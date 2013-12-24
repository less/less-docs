This is a bash script that converts a folder full of PNGs to a `.less` file, designed to be included in a "main" `.less` file, referencing all images encoded as base64 data URIs, along with their sizes.

```bash
#!/bin/bash

SRC="$1"
DST="$2"
TMP="$(mktemp)"

find "$SRC" -name "*.png" | while read i; do
    j="$(basename "$i")"
    f="$(echo "${j%.png}" | tr "@#&%+-. " "_")"
    echo "@gfx_$f: \"data:$(file -b --mime-type "$i");base64,$(base64 -w0 "$i")\";"
    echo "@size_$f: $(gm identify -format "%wpx %hpx" "$i" 2>/dev/null);"
done > "$TMP";
mv "$TMP" "$DST"
```

You may need to change paths/params to `mktemp`, `file`, `base64` and `gm` [GraphicsMagick] according to your setup.

Say you have `foo.png` and `foo@2x.png` in your source folder, the script produces this result (base64 data cut to save space) :

```less
@foo-img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAfCAYAAAA(...)";
@foo-size: 29px 31px;
@foo-img-2x: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA+CAYA(...)";
@foo-size-2x: 58px 62px;
```

This allows you to create a `.less` file like this:

```less
@import "gfx.less" //file produced by the script

.foo {
  background: url(@foo-img) no-repeat center center;
  -webkit-background-size: @size-foo;
}

@media only screen and (-webkit-min-device-pixel-ratio: 2) {
  .foo {
    background-image: url(@foo-img_2x);
  }
}
```

That speeds things a lot and keeps your code nice, clean, and readable. You can put a number of `.png` files in your source folder, and the final compilation of your `.less` file will only include the assets needed and drop the ones that are not used.