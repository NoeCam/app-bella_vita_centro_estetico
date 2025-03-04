"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SelectCosmetologist({ adminId }) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const [admins, setAdmins] = useState([]);
  const [selectedAdminId, setSelectedAdminId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/appointments`
      );
      const json = await response.json();
      setAdmins(json.data.admins || []);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (adminId) {
      setSelectedAdminId(adminId);
    }
  }, [adminId, admins]);

  const handleClick = (e) => {
    const newSelectedAdminId = e.target.value;
    setSelectedAdminId(newSelectedAdminId);

    const params = new URLSearchParams(searchParams);
    if (newSelectedAdminId) {
      params.set("adminId", newSelectedAdminId);
    } else {
      params.delete("adminId");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <select
      name="select"
      value={selectedAdminId}
      onChange={handleClick}
      className="mx-2 mb-5 px-4 py-2 bg-slate-50 shadow-lg rounded-md"
    >
      <option value="">Lista de cosmetólogas</option>
      {admins.map((adm) => (
        <option key={adm.id} value={adm.id}>
          {adm.first_name} {adm.last_name}
        </option>
      ))}
    </select>
  );
}
