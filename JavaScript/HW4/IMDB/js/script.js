let Movie = {
    title: "Rogue One: A Star Wars Story",
    duration: "2h 30 minutes",
    stars: "Felicity Jones, Mads Mikkelsen, Ben Mendelsohn",
    print: () => {
        console.log(`    Movie: ${Movie.title}
    Duration: ${Movie.duration}
    Stars: ${Movie.stars}`)
    }

}

Movie.print();