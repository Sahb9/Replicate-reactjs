import { useSelector, shallowEqual } from "react-redux";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import axios from "axios";
import { getDataUser, authActions } from "../../../redux/auth";
import { useDispatch } from "react-redux";
import { useState } from "react";

import React from "react";
const queryClient = new QueryClient();
async function getdata() {
  console.log("isFetching...");
  return await axios.get(
    "https://dev-api.689cloud.com/urss-be-dev/api/v1" + "/auth/info",
    {
      headers: {
        "x-access-token": localStorage.getItem("x-access-token"),
      },
    }
  );
}
async function getMeal() {
  return await axios.get(
    "https://react-http-8fde5-default-rtdb.firebaseio.com/meals.json"
  );
}
async function getDatafromBE() {
  return await axios.get("http://localhost:8080/account/findAll");
}
//let meals = "";
function MainFunction() {
  //const [meals, setMeals] = useState([]);

  const dispatch = useDispatch();

  let temp = "";
  const loadedMeals = [];

  const { isLoading, isFetching, isError, error, data, isStale } = useQuery(
    "repoData",
    getMeal,
    {
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
      staleTime: 10000,
      //refetchInterval: 10000,
    }
  );
  console.log({ isLoading, isFetching, isStale });
  //console.log(i++);
  //console.log(isStale);

  console.log(data);
  if (data !== undefined) {
    console.log(data);
    console.log(data.data);

    const responseData = data.data;
    for (const key in data.data) {
      loadedMeals.push({
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price,
      });
    }

    //setMeals(loadedMeals);
    //dispatch(authActions.getInforUser(data.response.data));
    //meals = data;
    //temp = data.response.data;
    //  temp = data.data.data;
    //console.log(data.data.data);
  }
  if (isLoading) return "Loading...";

  if (isError) return <h2>An error has occurred: + {error.message}</h2>;

  //console.log(error);
  //console.log("error message", error.message);

  const mealsList = loadedMeals.map((meal) => (
    <div key={meal.id} id={meal.id}>
      name {meal.id} : {meal.name}
      description: {meal.description}
      price: {meal.price}
    </div>
  ));

  return (
    <div>
      {/* // <div className="font-medium">Name: {temp.name} </div>
      // <div className="font-medium">company_id:{temp.company_id}</div>
      // <div className="font-medium">domain: {temp.domain}</div>
      // <div className="font-medium">token_api_key: {temp.token_api_key}</div>
      // <div className="font-medium">id: {temp.id}</div>
      // <div className="font-medium">role_level: {temp.role_level}</div> */}
      {mealsList}
    </div>
  );
}

export default function UserInforReactQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainFunction />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
//export default UserInforReactQuery;
