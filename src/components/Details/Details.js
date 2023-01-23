import React from "react";

const Details = ({ user }) => {
  const { name, address, company, email, username, phone } = user;
  console.log(user);
  return (
    <div className="grid grid-cols-3 gap-10 border shadow-xl rounded-2xl px-10 py-10">
      {/* part-1  */}
      <div className="">
        <div>
          <div className="font-bold mb-2">Contact Person</div>
          <div className="text-sm opacity-90">{name}</div>
        </div>
        <div className="mt-2">
          <div className="font-bold mb-2">Designation</div>
          <div className="text-sm opacity-90">{username}</div>
        </div>
        <div className="mt-2">
          <div className="font-bold mb-2">Email</div>
          <div className="text-sm opacity-90">{email}</div>
        </div>
        <div className="mt-2">
          <div className="font-bold mb-2">Phones</div>
          <div className="text-sm opacity-90">{phone}</div>
        </div>
      </div>
      {/* part-2  */}
      <div className="">
        <div className="mt-2">
          <div className="font-bold mb-2">Address</div>
          <div className="text-sm opacity-90">{address.city} {address.street} {address.suite} India</div>
        </div>
        <div>
          <div className="font-bold mb-2">City</div>
          <div className="text-sm opacity-90">{address.city}</div>
        </div>
        <div className="mt-2">
          <div className="font-bold mb-2">State</div>
          <div className="text-sm opacity-90">{address.street}</div>
        </div>
        <div className="mt-2">
          <div className="font-bold mb-2">Country</div>
          <div className="text-sm opacity-90">India</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
