# package-lock.json sanitizer

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Build Status](https://travis-ci.com/splashdust/package-lock-sanitizer.svg?branch=master)](https://travis-ci.com/splashdust/package-lock-sanitizer/)
[![Latest Version](https://img.shields.io/npm/v/package-lock-sanitizer/latest.svg)](https://www.npmjs.com/package/package-lock-sanitizer) [![Greenkeeper badge](https://badges.greenkeeper.io/splashdust/package-lock-sanitizer.svg)](https://greenkeeper.io/)

This tool rewrites the resolved URLs in package-lock.json, replacing the registry part of the URL with the offcial NPM registry URL (by default).

This is useful if you are working behind some kind of NPM proxy with an internal URL that you don't want to expose outside of your organisation. Add this script as a pre-commit hook to make sure that you don't commit those URLs to your repository.

## Usage
Run this to see all the options
```bash
$ package-lock-sanitizer --help
```

Example usage as a pre-commit hook with Husky:
```json
"husky": {
    "hooks": {
        "pre-commit": "npm run package-lock-sanitizer && git add package-lock.json"
    }
},
```
Don't forget to add `"package-lock-sanitizer": "package-lock-sanitizer"` to your `scripts` section.