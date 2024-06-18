let instance;
class mainUserData {
  constructor() {
    if (instance) {
      throw new Error("error: A new instance of this singleton cant be created");
    }
    this._data = {
      userUid: "",
    };
    instance = this;
  }

  getUserUid() {
    return this._data.userUid;
  }

  setUserUid(Uid) {
    this._data.userUid = Uid;
  }
}
const userDataService = Object.freeze(new mainUserData());

export default userDataService;
