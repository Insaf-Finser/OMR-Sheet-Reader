# OMR-Sheet-Reader

> AI-powered web application for understanding piano sheet music

![TypeScript](https://img.shields.io/github/languages/top/Insaf-Finser/OMR-Sheet-Reader?color=%233178C6) ![Stars](https://img.shields.io/github/stars/Insaf-Finser/OMR-Sheet-Reader?style=social)

## Table of Contents

- [Aim](#aim)
- [Description](#description)
- [Problem Statement](#problem-statement)
- [Target Audience](#target-audience)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Author](#author)

## Aim

The Piano Sheet Reader aims to help musicians and beginners understand piano sheet music by converting traditional music notation into readable ABCDEFG note names. It uses Optical Music Recognition (OMR) to detect notes, clefs, measures, and chords. The application provides an intuitive piano learning and practice platform.


## Description

The Piano Sheet Reader is an AI-powered web application that helps musicians and beginners understand piano sheet music by converting traditional music notation into readable ABCDEFG note names. Users can upload a piano sheet image or PDF, and the system uses Optical Music Recognition (OMR) to detect notes, clefs, measures, and chords. 

 The application visualizes both treble and bass staffs, displays note translations directly beneath the sheet music, highlights corresponding piano keys on a virtual keyboard, and provides synchronized audio playback. This project combines computer vision, music theory, interactive visualization, and audio processing to create an intuitive piano learning and practice platform. 

 The Piano Sheet Reader is built using TypeScript, CSS, JavaScript, and HTML, and utilizes various technologies such as React and Vite. The application is designed to be user-friendly and accessible, making it easy for musicians and beginners to learn and practice piano. 

 The project's codebase is well-organized, with a clear separation of concerns and a focus on maintainability and scalability.


## Problem Statement

Understanding piano sheet music can be challenging, especially for beginners. Traditional music notation can be difficult to read and interpret, making it hard for musicians to learn and practice new pieces. The Piano Sheet Reader aims to solve this problem by providing a user-friendly and accessible platform for understanding piano sheet music.


## Target Audience

- Musicians 
- Beginners 
- Music teachers 
- Students


## Features

- Optical Music Recognition (OMR)
- Note detection and translation
- Virtual keyboard highlighting
- Synchronized audio playback

## Tech Stack

| Technology | Role |
|------------|------|
| TypeScript | Core dependency |
| CSS | Core dependency |
| JavaScript | Core dependency |
| HTML | Core dependency |

## Architecture

The Piano Sheet Reader's architecture is based on a client-server model, with the client-side built using React and the server-side built using Node.js. The application uses a combination of computer vision and music theory to detect notes, clefs, measures, and chords in the uploaded sheet music. 

 The application's codebase is organized into several components, including the MusicNote, MusicStaff, and SheetRenderer components, which are responsible for rendering the sheet music and detecting notes and other musical elements.


## Getting Started


### Installation

```bash
git clone https://github.com/Insaf-Finser/OMR-Sheet-Reader.git
cd OMR-Sheet-Reader
```

## Usage

```bash
To use the Piano Sheet Reader, simply upload a piano sheet image or PDF to the application. The system will then use OMR to detect notes, clefs, measures, and chords, and display the note translations directly beneath the sheet music. You can also use the virtual keyboard to practice playing the piece, and listen to the synchronized audio playback to help you learn.
```


## Testing

No dedicated test directory was detected in the repository scan. Consider adding tests to improve reliability and contributor confidence.


## Project Structure

```text
PianoSheetsReader/
  README.md
  eslint.config.js
  index.html
  package-lock.json
  package.json
  postcss.config.cjs
  public/
  src/
  tailwind.config.cjs
  tsconfig.app.json
  tsconfig.json
  tsconfig.node.json
  ...
```


## Contributing

To contribute to the Piano Sheet Reader project, please fork the repository and submit a pull request with your changes. Please ensure that your code is well-documented and follows the project's coding standards. You can also open an issue to report any bugs or suggest new features.


## Author

**Insaf-Finser**

- [GitHub](https://github.com/Insaf-Finser)
