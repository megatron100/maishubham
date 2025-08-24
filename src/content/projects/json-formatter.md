---
title: "JSON Formatter"
description: "A simple, fast JSON formatting and validation tool"
demoUrl: "/demos/json-formatter"
repoUrl: "https://github.com/yourusername/json-formatter"
date: 2023-10-10
---

A lightweight web-based JSON formatter and validator that I built to solve a recurring problem in my development workflow. I was constantly copying JSON from APIs and logs into online formatters, but most of them were cluttered with ads or had privacy concerns.

## Features

- **Fast formatting**: Prettify JSON with proper indentation and syntax highlighting
- **Validation**: Clear error messages for malformed JSON
- **Minification**: Compress JSON by removing unnecessary whitespace  
- **Privacy-focused**: All processing happens client-side, no data is sent to servers
- **Keyboard shortcuts**: `Ctrl+F` to format, `Ctrl+M` to minify
- **Copy to clipboard**: One-click copying of formatted output

## Technical details

Built with vanilla JavaScript and a custom JSON parser for better error handling than `JSON.parse()`. The syntax highlighting uses a lightweight tokenizer that identifies strings, numbers, booleans, and structural characters.

The tool handles large JSON files (tested up to 10MB) without performance issues by using efficient string manipulation and avoiding DOM updates during parsing.

## Design decisions

I wanted this to feel like a native development tool rather than a web app, so I focused on:
- Monospace fonts and a minimal color scheme
- Immediate feedback as you type
- Familiar keyboard shortcuts
- No loading states or spinners (everything is instant)

## Usage

Paste your JSON into the input area and it automatically formats and validates. Invalid JSON shows specific error messages with line numbers. The formatted output is immediately ready to copy.

Perfect for:
- Debugging API responses
- Cleaning up configuration files  
- Validating JSON before committing to repositories
- Quick data structure exploration

---

*This was one of my first attempts at building a truly focused tool. The constraint of doing just one thing well led to a much cleaner result than my usual feature-creep tendencies.*
