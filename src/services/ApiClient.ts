import UserApi from "../app/user/user-detail/UserDetailApi";

import http from "../utils/http";

export class ApiService {
  public user: UserApi;
  constructor() {
    this.user = new UserApi(http);
  }
}

const api = new ApiService();
export default api;
