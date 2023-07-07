# Museum Footfall Tracker

Our overall objective was to provide a viable and cost effective solution to the issue of tracking visitor footfall through the Buffalo Museum of Science.

Specifically we aimed to:
- Collect per room data on how many guests visit and how long they stay on average.
- Collect data on foot traffic in and out of every room to identify high/low traffic areas.
- Display data in a useful and readable format
- Protect guest/museum privacy and security by tracking the overall guest population instead of attempting to track individual guests.
- Provide a viable solution logistically for the museum to implement.

---

## Our Solution

Our solution utilizes people tracker sensors at the doorways of each exhibit room, in conjuction with a software app to display and analyze the collected data. These sensors register when guests enter and exit the room, and are able to keep track of the total occupancy of a room at any given time, but do not directly track individual guests inside. We deliberately chose to avoid tracking guests as individuals, as it poses both a significant logistical and privacy concern for the museum. As such, our system relies on tracking guests as representatives of a population. The sensors do not register any difference between individual guests, only recoring that a person has entered or exited the room. Our data reflects the "average guest" during the given time interval, minimizing the impact of outliers on our overall results. 

We calculate how long guests stay on average in each room by taking the average occupancy and dividing it by the total # of guests that enter/exit for a given time interval. This allows us to determine how long the "average guest" spends in each room without collecting data on how long each individual spends. For example, in a room where the average population over an hour is 50 guests, that has 100 guests entering/exiting over that hour, the average guest spends ~30 minutes inside.

This data allows us to examine how different exhibit rooms compare across various datapoints.
- How many guests entered/exited the room 
- How long they stayed on average
- How many guests are usually in the room at any given time

We can use these datapoints in conjunction with each other to examine how the different rooms compare to each other over a given day. We can identify if certain rooms have high foot traffic but low average stay time (lots of guests walk through the door, but they don't stay for that long) or vice versa (not as many guests enter, but the ones that do are staying for longer).

The program displays room data visually, showing the average visit duration and total visits for each room over a given time interval. It allows both for live tracking of data and for analysis of set intervals. This allows for more targeted analysis such as only viewing data for a given time window. For example, viewing the visitor data during the time of a school field trip but not during the rest of the day to see how the data compares to standard operations, and if the popularity of rooms is different than usual or expected.

The system also helps ensure guest safety in event of an evacuation emergency, as it helps keep track of anyone remaining inside the building, and can identify which rooms are occupied in case of emergency.

---

## Viability

This project aims to be the most viable solution for the available resources at the museum's disposal. The sensors are proven hardware that can be sourced from a number of different companies, and require only initial investment in purchase and installation. They do not disrupt the standard guest experience at all and don't require any changes to museum standard operations. The data collected is anonymous, there are no distinguishing datapoints between different guests, as the system only tracks guests in terms of entrants and exits, without individually tracking people. This keeps the solution both safe and private, protecting the security and privacy of the museum and its visitors.