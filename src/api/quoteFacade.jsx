import SERVER_URL from "../util/Settings";

function quoteFacade(){
    function addQuote (quote){
        const options = makeOptions("POST", {
          quote: quote
        });
        return fetch(SERVER_URL+ "/api/quotes/users" ,options)
        .then(handleHttpErrors)
    
    }

    function fetchData() {
        return fetch(SERVER_URL + "/api/quotes/all")
          .then(handleHttpErrors)
          .catch((err) => {
            if (err.status) {
              err.fullError.then((e) => console.log(e.message));
            } else {
              console.log("Network error");
            }
          });
      }

    return {
        makeOptions,
        addQuote, 
        fetchData,
      };
}


function handleHttpErrors(res) {
    if (!res.ok) {
      return Promise.reject({ status: res.status, fullError: res.json() });
    }
    return res.json();
  }

function makeOptions(method, body) {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  }

const facade = quoteFacade();
export default facade;