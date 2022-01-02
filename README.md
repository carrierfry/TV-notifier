# TV-Notifier
get notified, when a movie is availabel in TV!

## Usage
### Prerequesits
Install Node.js version 16 or higher.

### Download
First download this repository either by clicking on `Code -> Download ZIP` or by running `git clone https://github.com/carrierfry/TV-notifier`.

### Running
When using this for the first time run following command to download all required packages (also do this when you download a new version):
```
npm i
```
After that run the following command to add a movie to the search:
```
npm run new
```
This will take you through an interactive prompt to add your desired movie.
You can repeat this command for every movie you want to search for.

When you want to search for the movie just type the following command (This might run for some amount of time if you have added many movies):
```
npm run start
```