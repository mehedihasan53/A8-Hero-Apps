import React from "react";
import { useLoaderData, useParams } from "react-router";

const AppsDetails = () => {
  const { id } = useParams();
  const appsId = parseInt(id);
  const appData = useLoaderData();

  //   console.log(appsId, appData);
  const singleAppData = appData.find((app) => app.id === appsId);
  //   console.log(singleAppData);
  const { image, title, companyName, description } = singleAppData;
  return (
    <div>
      <h1>AppsDetails</h1>
      <div className="">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <h3>{companyName}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppsDetails;
