class UserService {
  async isCorrectLogin(data) {
    return fetch("http://localhost:8000/api/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((data) => {
      return data.json()
    });
  }
  async sendUserData(data) {
    return fetch("http://localhost:8000/api/auth", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((data) => {
        return data.json()
    }); 
  }
  addToLocalStorage() {
    const date = new Date;

    localStorage.setItem("isLogin", JSON.stringify({isLogin: true, date: date.getTime()}));
  }
  canLogin() {
    try {
      const data = JSON.parse(localStorage.getItem("isLogin"));
      const prevDate = data.date;
      const curDate = new Date().getTime();

      return curDate - prevDate <= 2 * 60 * 60 * 1000 && data.isLogin;
    }
    catch(error) {
      return false
    }
  }
  logOut() {
    const date = new Date;
    localStorage.setItem("isLogin", JSON.stringify({isLogin: false, date: date.getTime()}));
  }
}
export default new UserService();