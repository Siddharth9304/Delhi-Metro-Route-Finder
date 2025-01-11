# Delhi Metro Route Finder

This project is a tool to help commuters easily navigate the Delhi Metro network by finding the most efficient route between two metro stations. It calculates and displays the route, metro line colors, interchanges, the total number of stations, and an estimated average travel time based on certain assumptions.

## Features

### Current Version Features:
- **Route Finder**: Displays the route between two metro stations.
- **Metro Line Colors**: Shows the color of metro lines for easier navigation.
- **Interchange Details**: Highlights stations where interchanges are needed and calculates the total number of interchanges.
- **Station Count**: Calculates the total number of stations along the route.
- **Average Time Required**: Calculates the average travel time based on the number of stations and interchanges along the route, assuming:
  - 2.5 minutes per station.
  - 7 minutes per interchange.

### Lines Included in Current Version:
- **Red Line**
- **Yellow Line**
- **Blue Line**
- **Violet Line**

### Future Enhancements:
- **Shortest Path Options**:
  - Based on **minimum interchanges** for smoother travel.
  - Based on **minimum time** to save travel time.
  - Based on **minimum distance** for efficient travel.
- **Distance Calculation** 📏
- **Travel Time Estimation** ⏳
- **Fare Calculator** 💰
- **Interactive Map Visualization** 📍

## How It Works

### Data Structure:
- The project uses a **graph data structure** to represent the Delhi Metro network, where metro stations are nodes, and the connections between them are edges.

### Algorithm:
- **BFS (Breadth-First Search)** is used to find the shortest route with the minimum number of stations between the origin and destination.

## Installation

To run this project locally, follow the steps below:

### 1. Clone the repository:
```bash
git clone https://github.com/your-username/delhi-metro-route-finder.git
```

### 2. Navigate to the project directory:
```bash
cd delhi-metro-route-finder
```

### 3. Install the required dependencies:
If you are using a Node.js environment, install the necessary packages (if any) using npm or yarn.
```bash
npm install
```
# or
```bash
yarn install
```

### 4. Start the project:
Run the project locally using a simple HTTP server. You can use the following commands:

```bash
npm start
```
# or
```bash
yarn start
```

## Live Website

Check out the live version of this project: [https://siddharth9304.github.io/Delhi-Metro-Route-Finder]

## GitHub Repository

You can find the repository for this project on GitHub: [(https://github.com/Siddharth9304/Delhi-Metro-Route-Finder)]

## Special Thanks

A big thank you to **Saurabh Shukla Sir** and **Rohit Negi Sir** for their constant support, guidance, and encouragement throughout this journey. Without their mentorship, this project wouldn't have been possible! 🙏

