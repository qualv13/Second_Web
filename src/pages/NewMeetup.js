import NewMeetupForm from "../components/layout/meetups/NewMeetupForm";

function NewMeetupPage() {
    function addMeetupHandler(meetupData) {
        fetch('https://firstreactpage-default-rtdb.firebaseio.com/');
    }

    return <section>
        <h1>Add new meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
}

export default NewMeetupPage;