import { useState } from "react";

function ClientYApp() {
  const [state, setState] = useState({ data: "", error: "" });

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://real-erin-greyhound-yoke.cyclic.app/sample"
      );
      const data = await response.json();
      setState({ data: data.message, error: "" });
    } catch (error) {
      setState({ ...state, error: error.message });
    }
  };

  const postData = async () => {
    try {
      const response = await fetch(
        "https://real-erin-greyhound-yoke.cyclic.app/sample",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(),
        }
      );
      const data = await response.json();
      setState({ data: data.message, error: "" });
    } catch (error) {
      setState({ ...state, error: error.message });
    }
  };

  const putData = async () => {
    try {
      const response = await fetch(
        "https://real-erin-greyhound-yoke.cyclic.app/sample",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(),
        }
      );
      const data = await response.json();
      setState({ data: data.message, error: "" });
    } catch (error) {
      setState({ ...state, error: error.message });
    }
  };

  const deleteData = async () => {
    try {
      const response = await fetch(
        "https://real-erin-greyhound-yoke.cyclic.app/sample",
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(),
        }
      );
      const data = await response.json();
      setState({ data: data.message, error: "" });
    } catch (error) {
      setState({ ...state, error: error.message });
    }
  };

  return (
    <div>
      <h2>Client Y App</h2>
      <button onClick={fetchData}>Fetch Data (GET)</button>
      <button onClick={postData}>Send Data (POST)</button>
      <button onClick={putData}>Update Data (PUT)</button>
      <button onClick={deleteData}>Delete Data (DELETE)</button>
      {state.error ? (
        <p>Error: {state.error}</p>
      ) : (
        <p>Data from the server: {state.data}</p>
      )}
    </div>
  );
}

export default ClientYApp;
