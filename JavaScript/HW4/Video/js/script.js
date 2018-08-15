function Video(title, uploader, seconds) {
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;
    this.watch = function () {
        console.log(`You watched all ${seconds} seconds of ${title}`);
    }
}

video1 = new Video("The Sneezing Baby Panda", "", 79);
video2 = new Video("In a Heartbeat", "", 240)
video1.watch();
video2.watch();
