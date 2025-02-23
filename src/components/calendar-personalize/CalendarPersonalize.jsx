"use client";

import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarPersonalize({ onChange, value }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && value === null) {
      onChange(new Date());
    }
  }, [isMounted, value]);

  if (!isMounted) {
    return <div>Loading...</div>;
  }

  return <Calendar onChange={onChange} value={value} />;
}
