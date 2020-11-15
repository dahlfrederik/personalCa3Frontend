import facade from "../api/quoteFacade";
import React, { useState, useEffect } from "react";

export default function QuotePage() {
  const [dataFromServer, setDataFromServer] = useState([]);

  useEffect(() => {
    facade.fetchData().then((data) => setDataFromServer(data.all));
  }, []);

  return (
    <div className="container-fluid padding">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <h2 className="mt-5">QuotePage page</h2>
          <h4>Only available if logged in and has the role of a user</h4>
          <p>(NO ACCESS FOR ADMINS: This is off course just an example...)</p>
          <h2>Time for the code</h2>
          {
            <p>
              {dataFromServer.map((data) => (
                <p id={data.userQuote}>{data.userQuote}</p>
              ))}
            </p>
          }

          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
}
