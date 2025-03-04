"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Calendar from "react-calendar";

export default function CalendarPersonalize({ onChange, value }) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const date = searchParams.get("date");

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && value === null && date) {
      onChange(date);
    }
  }, [isMounted, value, date]);

  if (!isMounted) {
    return <div>Loading...</div>;
  }

  const formatDate = (date) => {
    return date.toLocaleDateString("en-CA");
  };

  const handleClick = (newDate) => {
    const formattedDate = formatDate(newDate);
    onChange(formattedDate);

    const params = new URLSearchParams(searchParams);
    if (formattedDate) {
      params.set("date", formattedDate);
    } else {
      params.delete("date");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const disableWeekends = ({ date }) => {
    return date.getDay() === 0 || date.getDay() === 6; // 0 = Domingo, 6 = Sábado
  };

  return (
    <Calendar
      onChange={handleClick}
      value={value ? new Date(value) : new Date()}
      tileDisabled={disableWeekends}
    />
  );
}
