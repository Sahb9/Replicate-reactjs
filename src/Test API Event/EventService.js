import axios from "axios";

const EVENT_API_BASE_URL = "http://localhost:8080/event";

class EventService {
  async getData() {
    return await axios.get(EVENT_API_BASE_URL + "/showall");
  }
  async createEvent(event) {
    return await axios.post(EVENT_API_BASE_URL + "/createEvent", event);
  }
  async deleteEvent(eventId) {
    return await axios.delete(EVENT_API_BASE_URL + "/delete/" + eventId);
  }
}

export default new EventService();
