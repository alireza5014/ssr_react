import {useState, useEffect} from "react";



function useFetchFromApi(apiUrl){



  // Defining State
  var [state, handleState] = useState({
    isLoading: true,
    data: {}
  });

  // Creating a side effect that update state after getting response from server.
  useEffect(() => {

    // Making a request using XMLHttpRequest
    // We can also use `fetch`, but I think request cancelation of `fetch` is a little ugly for teaching purpose.
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", (e) => {
      // Extract requirement data from response
      var data = JSON.parse(xhr.responseText);

      // Update the state
      handleState({
        isLoading: false,
        data:data
      })
    });

    xhr.open("GET", apiUrl);
    // xhr.setRequestHeader("X-Auth-Token", process.env.REACT_APP_AUTH_TOKEN||'51519c31153047a8a21ce141c1a42c9e');
    xhr.send();

    // In clean up function we are canceling request.
    return function cleanup(){
      xhr.abort();
    };
  // We need to pass the second argument, because we need to invoke it once.
  }, []);


  return state;
}


export default useFetchFromApi;
