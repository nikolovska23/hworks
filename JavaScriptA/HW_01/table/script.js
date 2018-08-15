$(function () {

    function TableData(list) {
        this.listOfSongs = list;
        this.tbody = $("#tbody");
        this.reverse = false;
        this.populateTable = function () {
            if (this.sortingFunction != null) {
                if (this.reverse) {
                    this.listOfSongs = this.listOfSongs.sort(this.sortingFunction).reverse();
                } else {
                    this.listOfSongs = this.listOfSongs.sort(this.sortingFunction);
                }
            }
            this.tbody.html("");
            this.listOfSongs.forEach(song => {
                let row = $("<tr>");
                $("<td>").text(song.rank).appendTo(row);
                $("<td>").text(song.song).appendTo(row);
                $("<td>").text(song.artist).appendTo(row);
                $("<td>").text(song.releaseYear).appendTo(row);
                $("<td>").text(song.duration).appendTo(row);
                this.tbody.append(row);
            });
        }
    };

    let table = new TableData([]);


    function getData() {
        $.ajax({
            method: "GET",
            url: "http://demo6418849.mockable.io/songs",
            success: function (data) {
                console.log(data);
                table.listOfSongs = data;
                table.populateTable();
            },
            error: function (error) {
                console.log(error)
            }
        })
    }

    $('input[name=minmax]').on("change", (e) => {
        table.reverse = e.target.value === '1';
        table.populateTable();
    });

    $("#pull").on("click", () => {
        getData();
    });
    
    $("#sort").on("change", (e) => {
        let pickedValue = e.target.value;
        let sortingFunction = null;
        switch (pickedValue) {
            case "1": //sort by rank
                sortingFunction = (song1, song2) => {
                    return parseInt(song1.rank) - parseInt(song2.rank);
                };
                break;
            case "2": //sort by song name
                sortingFunction = (song1, song2) => {
                    return song1.song.localeCompare(song2.song);
                }
                break;
            case "3": //sort by artist name
                sortingFunction = (song1, song2) => {
                    return song1.artist.localeCompare(song2.artist);
                }
                break;
            case "4": //sort by release year
                sortingFunction = (song1, song2) => {
                    return parseInt(song1.releaseYear) - parseInt(song2.releaseYear);
                }
                break;
            case "5": //sort by duration
                sortingFunction = (song1, song2) => {
                    return evaluateMinuteToSeconds(song1.duration) -
                        evaluateMinuteToSeconds(song2.duration);
                }
                break;


            default:

                break;
        }
        table.sortingFunction = sortingFunction;
        table.populateTable();
    });

    function evaluateMinuteToSeconds(minutes) {
        let minutesArray = minutes.split(":");
        return (minutesArray[0] * 60) + minutesArray[1];
    }

});