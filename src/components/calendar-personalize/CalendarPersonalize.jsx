"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Calendar from "react-calendar";

export default function CalendarPersonalize({
  onChange,
  value,
  availableDays,
  setSelectedYear,
  setSelectedMonth,
}) {
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

  const formatDate = (date) => date.toLocaleDateString("en-CA");

  const handleActiveDateChange = ({ activeStartDate }) => {
    if (activeStartDate) {
      setSelectedYear(activeStartDate.getFullYear());
      setSelectedMonth(activeStartDate.getMonth() + 1);
    }
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

  const disableDays = ({ date }) => {
    if (!availableDays) return true;

    const normalizeDatefunction = (fecha) => {
      return new Date(
        Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate())
      );
    };

    const normalizeDate = normalizeDatefunction(date);

    const today = new Date();
    const todayNormalized = normalizeDatefunction(today);

    if (normalizeDate < todayNormalized) {
      return true;
    }

    const getDisableDays = availableDays.find((availableDay) => {
      const availableDate = normalizeDatefunction(
        new Date(availableDay.work_date)
      );
      return normalizeDate.getTime() === availableDate.getTime();
    });

    return !getDisableDays || getDisableDays.available === 0;
  };

  return (
    <Calendar
      onChange={handleClick}
      value={value ? new Date(value) : new Date()}
      tileDisabled={disableDays}
      onActiveStartDateChange={handleActiveDateChange}
    />
  );
}
