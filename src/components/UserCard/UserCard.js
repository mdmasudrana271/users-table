import React, { useState } from "react";
import Details from "../Details/Details";

const UserCard = ({ user }) => {
  const { address, company, name } = user;
  const [details, setDetails] = useState(false);
  return (
    <section className="card w-full bg-base-100 shadow-xl border my-5 py-10 px-5">
      <table className="table w-full">
        <tbody>
          <tr>
            <td>
              <div className="">
                <div>
                  <div className="text-md opacity-90">{company.name}</div>
                </div>
              </div>
            </td>
            <td>
              <div className="">
                <div>
                  <div className="font-bold mb-1">CONTACT</div>
                  <div className="text-sm opacity-90">{name}</div>
                </div>
              </div>
            </td>

            <td>
              <div className="">
                <div>
                  <div className="font-bold">CITY</div>
                  <div className="text-sm opacity-90">{address.city}</div>
                </div>
              </div>
            </td>

            <td>
              <div className="">
                <div>
                  <div className="font-bold">STATE</div>
                  <div className="text-sm opacity-50">{address.street}</div>
                </div>
              </div>
            </td>
            <td><button onClick={()=>setDetails(!details)} className="bg-red-500 text-white rounded-full px-2 py-1 border-none">{details ? "Hide Details" : "View Details"}</button></td>
          </tr>
        </tbody>
      </table>
      {
        details ? <Details user={user}></Details> : undefined
      }
    </section>
  );
};

export default UserCard;
