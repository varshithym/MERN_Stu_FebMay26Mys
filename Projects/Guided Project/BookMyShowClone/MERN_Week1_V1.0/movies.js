// movies.js
// this file stores the movie data used in CLI App
const movies = [
    {
        id:1,
        title:"Dhurandar The Revenge",
        showTimes:[
            {time:"10:00 AM",seatsAvailable: 100},
            {time:"1:00 PM",seatsAvailable: 70},
            {time:"6:00 PM",seatsAvailable: 600},

        ]
    },
    {
        id:2,
        title:"LoveMockTail",
        showTimes:[
            {time:"10:00 AM",seatsAvailable: 100},
            {time:"1:00 PM",seatsAvailable: 70},
            {time:"6:00 PM",seatsAvailable: 600},

        ]
    },
    {
        id:3,
        title:"Hayagreeva",
        showTimes:[
            {time:"10:00 AM",seatsAvailable: 100},
            {time:"1:00 PM",seatsAvailable: 70},
            {time:"6:00 PM",seatsAvailable: 600},

        ]
    }
    
];

// export the movie data to other files
module.exports = movies;