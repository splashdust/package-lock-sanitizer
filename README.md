# package-lock.json sanitizer

This tool rewrites the resolved URLs in package-lock.json, replacing the registry part of the URL with the offcial NPM registry URL (by default).

This is useful if you are working behind some kind of NPM proxy with an internal URL that you don't want to expose outside of your organisation. Add this script as a pre-commit hook to make sure that you don't commit those URLs to your repository.

## Usage
Run this to see all the options
```bash
$ package-lock-sanitizer --help
```

Example usage as a pre-commit hook with Husky:
(in package.json)
```json
"husky": {
    "hooks": {
        "pre-commit": "npm run package-lock-sanitizer && git add package-lock.json"
    }
},
```
