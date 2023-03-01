# portfolio
### This is my portfolio

# Instructions for pages
- Name the file (no space or caps)
- Make the title what you named the file just with spaces and caps
- In the source.json you make capitals for spaces and numbers get auto spaced
    - Make sure to capitilize the first letter for appearance

# My icons
#### You use this code to impliment these icons
```bash
# This is the style sheet that you need to import in order to use Font Awesome icons
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>

# This is how you use the icon
<i class="fas fa-wtvr"></i>
# Replace the class with what I have listed below or whatever you want
```
- The check for Completed
```
fas fa-check
```
- The gear for In Progress
```
fas fa-cog
```
- The clock for Planned
```
fas fa-clock
```
- Github icon -
```
fab fa-github
```
- Discord 
```
fab fa-discord
```
- Email
```
fas fa-envelope
```
- Google Voice
```
fas fa-phone-volume
```

# Template for new page
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
        <title>Page 1</title>
    </head>
    <header>
        <nav id="navbar"></nav>
    </header>
    <main id="content"></main>
    <script src="script.js"></script>
</html>
```