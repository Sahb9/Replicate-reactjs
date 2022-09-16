import axios from "axios";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import React from "react";
import { postData } from "../../redux/auth";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();

export default function testReactQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
let i = 0;
async function getdata() {
  console.log("isFetching...");
  return await axios.post(
    "https://dev-api.689cloud.com/urss-be-dev/api/v1" +
      "/auth/ip-address-login",
    {
      client_ip_address: "120.72.109.178",
      company_domain: "urss1.689cloud.com",
    }
  );
}
function Example() {
  // const { isLoading, isFetching, error, data, isStale } = useQuery(
  //   "repoData",
  //   () =>
  //     fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
  //       function(res) {
  //         return res.json();
  //       }
  //     ),
  //   {
  //     cacheTime: Infinity, //Thời gian cache data, ví dụ: 5000, sau 5s thì cache sẽ bị xóa, khi đó data trong cache sẽ là undefined
  //     refetchOnWindowFocus: false,
  //     //staleTime: 5000,
  //   }
  // );
  let temp = "";
  const { isLoading, isFetching, isError, error, data, isStale } = useQuery(
    "repoData",
    getdata,
    {
      //staleTime: 10000,
      refetchOnMount: false,
    }
  );
  console.log({ isLoading, isFetching, isStale });
  console.log(i++);
  //console.log(isStale);
  //console.log(data);
  if (data != undefined) {
    temp = data.data.data;
    //console.log(data.data.data);
  }
  if (isLoading) return "Loading...";

  if (isError) return <h2>An error has occurred: + {error.message}</h2>;

  //console.log(error);
  //console.log("error message", error.message);

  return (
    <div>
      {/* <h1>Problem is :{error}</h1> */}
      <h1>{temp.name}</h1>
      <p>{temp.company_id}</p>
      <strong>👀 {temp.domain}</strong>{" "}
      {/* <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong> */}
    </div>
  );
}
