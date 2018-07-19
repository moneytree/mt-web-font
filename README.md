# mt-web-font
# Setup
```
yarn install
```

# Steps for updating the web font
1. Go to https://icomoon.io/app/#/select
2. Upload the latest ``selection.json`` in the ``iconmoon`` folder
3. In the iconmoon web app, just upload whatever svg you want to add. Be sure to center it and name it properly (``-o`` for outlined icons and omit ``-o`` for filled in ones)
4. Generate the new web font
5. Download it
6. Unzip it
7. Copy the whole unzipped folder to update this repository
8. Update the ``.css`` file with the new styles
9. Update the version before publishing `yarn <patch|feature|release>`.


# TODO
Automate the steps for updating it
