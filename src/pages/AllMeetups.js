import { useState, useEffect } from "react";

import MeetupList from "../components/layout/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLodaing, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://firstreactpage-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLodaing) {
    return (
      <section>
        <div class="wrap">
          <div class="bounceball"></div>
          <div class="text"></div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
