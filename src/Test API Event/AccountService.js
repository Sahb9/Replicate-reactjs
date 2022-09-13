import axios from "axios";

const EVENT_API_BASE_URL = "http://localhost:8080/account";

class AccountService {
  async updateEvent(account, accountId) {
    return await axios.put(
      EVENT_API_BASE_URL + "/update/" + accountId,
      account
    );
  }
}

export default new AccountService();
