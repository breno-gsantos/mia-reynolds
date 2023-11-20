import axios from 'axios';
import EventBox from './EventBox';

const getEvents = async () => {
    try {
        const res = await axios.get('http://localhost:4000/events')
        return res.data
    } catch (error) {
        throw error;
    }
}

export default async function Events(){
    const events = await getEvents();

    return (
        <section className='section' id='tours'>
            <div className='container mx-auto'>
                <EventBox events={events} />
            </div>
        </section>
    )
}