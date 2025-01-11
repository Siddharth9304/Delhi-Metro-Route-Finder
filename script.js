const MetroLine = {
    YELLOW: "Yellow",
    BLUE: "Blue",
    RED: "Red",
    VIOLET: "Violet"
};

//Array to store Red Line Stations 
const RedLineStations = [
    "Rithala",
    "Rohini West",
    "Rohini East",
    "Pitampura",
    "Kohat Enclave",
    "Netaji Subhash Place",
    "Keshav Puram",
    "Kanhaiya Nagar",
    "Inderlok",
    "Shastri Nagar",
    "Pratap Nagar",
    "Pul Bangash",
    "Tis Hazari",
    "Kashmere Gate",
    "Shastri Park",
    "Seelampur",
    "Welcome",
    "Shahdara",
    "Mansarovar Park",
    "Jhil Mil",
    "Dilshad Garden",
    "Shaheed Nagar",
    "Raj Bagh",
    "Major Mohit Sharma",
    "Shyam Park",
    "Mohan Nagar",
    "Arthala",
    "Hindon River",
    "Shaheed Sthal (New Bus Adda)"
];

//Array to store Red Line Stations 
const YellowLineStations = [
    "Millenium City Centre Gurugram",
    "IFFCO Chowk",
    "MG Road",
    "Sikandarpur",
    "Guru Dronacharya",
    "Arjan Garh",
    "Ghitorni",
    "Sultanpur",
    "Chhattarpur",
    "Qutab Minar",
    "Saket",
    "Malviya Nagar",
    "Hauz Khas",
    "Green Park",
    "AIIMS",
    "Dilli Haat INA",
    "Jorbagh",
    "Lok Kalyan Marg",
    "Udyog Bhawan",
    "Central Secretariat",
    "Patel Chowk",
    "Rajiv Chowk",
    "New Delhi",
    "Chawri Bazar",
    "Chandni Chowk",
    "Kashmere Gate",
    "Civil Lines",
    "Vidhan Sabha",
    "Vishwavidyalaya",
    "Guru Tegh Bahadur Nagar",
    "Model Town",
    "Azadpur",
    "Adarsh Nagar",
    "Jahangirpuri",
    "Haiderpur Badli Mor",
    "Rohini Sector 18-19",
    "Samaypur Badli"
];

//Array to store Blue Line Stations 1
const BlueLineStations1 = [
    "Dwarka Sector 21",
    "Dwarka Sector 8",
    "Dwarka Sector 9",
    "Dwarka Sector 10",
    "Dwarka Sector 11",
    "Dwarka Sector 12",
    "Dwarka Sector 13",
    "Dwarka Sector 14",
    "Dwarka",
    "Dwarka Mor",
    "Nawada",
    "Uttam Nagar West",
    "Uttam Nagar East",
    "Janak Puri West",
    "Janak Puri East",
    "Tilak Nagar",
    "Subhash Nagar",
    "Tagore Garden",
    "Rajouri Garden",
    "Ramesh Nagar",
    "Moti Nagar",
    "Kirti Nagar",
    "Shadipur",
    "Patel Nagar",
    "Rajendra Place",
    "Karol Bagh",
    "Jhandewalan",
    "R K Ashram Marg",
    "Rajiv Chowk",
    "Barakhamba",
    "Mandi House",
    "Supreme Court (Pragati Maidan)",
    "Indraprastha",
    "Yamuna Bank",
    "Laxmi Nagar",
    "Nirman Vihar",
    "Preet Vihar",
    "Karkar Duma",
    "Anand Vihar",
    "Kaushambi",
    "Vaishali"
];

// Array to store Blue Line Stations 2
const BlueLineStations2 = [
    "Yamuna Bank",
    "Akshardham",
    "Mayur Vihar Phase-1",
    "Mayur Vihar Extension",
    "New Ashok Nagar",
    "Noida Sector 15",
    "Noida Sector 16",
    "Noida Sector 18",
    "Botanical Garden",
    "Golf Course",
    "Noida City Center",
    "Noida Sector 34",
    "Noida Sector 52",
    "Noida Sector 61",
    "Noida Sector 59",
    "Noida Sector 62",
    "Noida Electronic City"
];

// Array to store Violet Line Stations 
const VioletLineStations = [
    "Kashmere Gate",
    "Lal Quila",
    "Jama Masjid",
    "Delhi Gate",
    "ITO",
    "Mandi House",
    "Janpath",
    "Central Secretariat",
    "Khan Market",
    "Jawaharlal Nehru Stadium",
    "Jangpura",
    "Lajpat Nagar",
    "Moolchand",
    "Kailash Colony",
    "Nehru Place",
    "Kalkaji Mandir",
    "Govind Puri",
    "Okhla",
    "Jasola",
    "Sarita Vihar",
    "Mohan Estate",
    "Tughlakabad",
    "Badarpur Border",
    "Sarai",
    "N.H.P.C. Chowk",
    "Mewala Maharajpur",
    "Sector 28 Faridabad",
    "Badkal Mor",
    "Old Faridabad",
    "Neelam Chowk Ajronda",
    "Bata Chowk",
    "Escorts Mujesar",
    "Sant Surdas - Sihi",
    "Raja Nahar Singh"
  ];
  

// Array to store insterchange stations
const interchangeStations = ["Kashmere Gate", "Rajiv Chowk", "Central Secretariat", "Mandi House"];

// creating array containing all stations in sort manner
const allStations = Array.from(new Set([...RedLineStations,...YellowLineStations,...BlueLineStations1,...BlueLineStations2,...VioletLineStations])).sort();

// creating from and to options
const selectFrom = document.getElementById("from");
const selectTo = document.getElementById("to");
allStations.forEach((station)=>{
    const optionFrom = document.createElement("option");
    const optionTo = document.createElement("option");
    optionFrom.innerHTML = station;
    optionTo.innerHTML = station;
    selectFrom.appendChild(optionFrom);
    selectTo.appendChild(optionTo);
})
// setting default value for from and to
document.getElementById("from").value = "Millenium City Centre Gurugram";
document.getElementById("to").value = "Samaypur Badli";

// To store color for each station
const stationColors = new Map();

// Function to add an edge to the graph
function addEdge(graph, station1, station2, color) {
    // Add the stations to the graph
    if (!graph.has(station1)) graph.set(station1, []);
    if (!graph.has(station2)) graph.set(station2, []);
    
    graph.get(station1).push(station2);
    graph.get(station2).push(station1);

    // Store the color for each station
    stationColors.set(station1, color);
    stationColors.set(station2, color);
}

// check if the given station is interchangeStation
const interchangeSet = new Set(interchangeStations);
function isInterchangeStation(station) {
    return interchangeSet.has(station);
}

// Helper function to map MetroLine to a string
function metroLineToString(line) {
    return line;
}

// BFS function to find the route
function findRouteBFS(graph, start, destination) {
    let path = [];
    const visited = new Set();
    const parentMap = new Map(); // To track the path
    const route = [];
    const routeLines = []; // To track the line color for each station in the route

    // Perform BFS
    const queue = [];
    queue.push(start);
    visited.add(start);
    parentMap.set(start, null);

    while (queue.length > 0) {
        const current = queue.shift();

        // If destination is found, reconstruct the path
        if (current === destination) {
            let temp = destination;
            while (temp !== null) {
                route.push(temp);
                routeLines.push(stationColors.get(temp));
                temp = parentMap.get(temp);
            }
            break;
        }

        // Explore neighbors
        for (const neighbor of graph.get(current)) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                parentMap.set(neighbor, current);
                queue.push(neighbor);
            }
        }
    }

    if (route.length > 0) {
        // Reverse the route and routeLines to get the correct order
        route.reverse();
        routeLines.reverse();

        let flag = true, flag1 = true;
        let firstStation = true;
        for (let i = 0; i < route.length; i++) {
            const station = route[i];
            const line = routeLines[i];

            // If not the first station and the line changes, it's an interchange
            if (!firstStation && line !== routeLines[i - 1]) {
                if (i === route.length - 1 || routeLines[i + 1] !== routeLines[i - 1]) {
                    if (flag === true) {
                        if (isInterchangeStation(station)) {
                            path.push([`${station}`, `${routeLines[i - 1]}`]);
                            path.push("Interchange");
                            flag1 = false;
                        } else {
                            if (i !== 1 && flag1 === true) {
                                path.push("Interchange");
                            } else {
                                flag1 = true;
                            }
                            path.push([`${station}`, `${metroLineToString(line)}`]);
                        }
                    } else {
                        flag = true;
                        path.push([`${station}`, `${metroLineToString(line)}`]);
                    }
                } else {
                    path.push([`${station}`, `${routeLines[i - 1]}`]);
                    flag = false;
                }
            } else {
                if (i === route.length-1 && routeLines[i] !== routeLines[i - 1])
                    path.push([`${station}`, `${routeLines[i - 1]}`]);
                else 
                    path.push([`${station}`, `${metroLineToString(line)}`])
                flag1 = true;
                flag = true;
            }

            firstStation = false;
        }
    } else {
        path.push(`NoRouteFound`);
    }

    return path;
}


// Create Map and add stations
function createMap() {
    const metroGraph = new Map();

    // **Red Line (Line 1)**: Stations from Rithala to Shaheed Sthal
    for(let i=0; i<RedLineStations.length-1; i++)
        addEdge(metroGraph, RedLineStations[i], RedLineStations[i+1], MetroLine.RED);

    // **Yellow Line (Line 2)**: Stations from Millenium City Centre to Samaypur Badli
    for(let i=0; i<YellowLineStations.length-1; i++)
        addEdge(metroGraph, YellowLineStations[i], YellowLineStations[i+1], MetroLine.YELLOW);

    // **Blue Line (Line 3)**: Stations from Dwarka Sector 21 to Noida Electronic City
    for(let i=0; i<BlueLineStations1.length-1; i++)
        addEdge(metroGraph, BlueLineStations1[i], BlueLineStations1[i+1], MetroLine.BLUE);
    for(let i=0; i<BlueLineStations2.length-1; i++)
        addEdge(metroGraph, BlueLineStations2[i], BlueLineStations2[i+1], MetroLine.BLUE);

    // **Violet Line (Line 4)**: Stations from Kashmere Gate to Raja Nahar Singh
    for(let i=0; i<VioletLineStations.length-1; i++)
        addEdge(metroGraph, VioletLineStations[i], VioletLineStations[i+1], MetroLine.VIOLET);

    return metroGraph;
}

// Example usage
const metroGraph = createMap();

document.getElementById("routeForm").addEventListener('submit',(event)=>{
    event.preventDefault();
    
    // remove result previous elements
    const result = document.getElementById("routeResult");
    result.innerHTML = "";
    
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const route = findRouteBFS(metroGraph, from, to);
    
    // adding route heading
    const journey = document.createElement("div");
    journey.innerHTML=`Route from ${from} to ${to}:`;
    result.appendChild(journey);
    result.appendChild(document.createElement("br"));

    // adding route
    let totalStations = 0;
    let totalInterchanges = 0;
    for(let i=0; i<route.length; i++)
    {
        if(Array.isArray(route[i])==true)
        {
            const station = document.createElement("div");
            if(route[i][1]==="Violet")
                station.style.color = "rgba(148, 18, 236, 1)";
            else if(route[i][1]==="Red")
                station.style.color = "rgb(212, 0, 0)"
            else
                station.style.color = route[i][1];
            station.innerHTML = `${route[i][0]}`;
            result.appendChild(station);
            totalStations++;
        }
        else if(route[i]==="Interchange")
        {
            if(i<route.length-1)
            {
                result.lastChild.innerHTML = `${result.lastChild.innerHTML} <span>(Interchange: ${route[i-1][1]} to ${route[i+1][1]})</span>`
                result.lastChild.lastChild.style.color = "Black";
                totalInterchanges++;
            }
        }
    }
    result.appendChild(document.createElement("br"));
    const noStations = document.createElement("div");
    noStations.innerHTML=`Total Stations: ${totalStations}`;
    result.appendChild(noStations);
    const noInterchanges = document.createElement("div");
    noInterchanges.innerHTML=`Total Interchanges: ${totalInterchanges}`;
    result.appendChild(noInterchanges);

    // document.getElementById("routeResult").innerHTML = route;
})

