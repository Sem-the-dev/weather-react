import React from 'react'
import FormattedDate from "./FormattedDate"

export default function FormattedDate(timestamp){
    let date = new Date(timestamp);

  let hours = date.getHours();
  if (hours < 10) {hours = `0${hours}`}
  
  let minutes = date.getMinutes();
  if (minutes < 10) {minutes = `0${minutes}`};
    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function formatHours(timestamp) {
  let date = new Date(timestamp * 1000); 
  let hours = date.getHours();
  if (hours < 10) {hours = `0${hours}`}
  
  let minutes = date.getMinutes();
  if (minutes < 10) {minutes = `0${minutes}`};
  return `${hours}:${minutes}`;
}